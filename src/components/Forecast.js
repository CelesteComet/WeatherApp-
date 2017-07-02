import React, { Component } from 'react';
import { fetch5DayForecast } from '../api/weather';
import queryString from 'query-string';
import * as moment from 'moment';

function ForecastItem(props) {
  return(
    <div>
      <img src={props.img} />
      <p>{props.weather}</p>
      <p>{props.day + ' ' + props.month + ' ' + props.date}</p>
    </div>
  );
}

class Forecast extends Component {
  constructor() {
    super();
    this.state = {
      list: null
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps !== this.props) {
      this.updateForecastList();
    }
  }

  componentDidMount() {
    this.updateForecastList();
  }

  updateForecastList() {
    var parsed = queryString.parse(this.props.location.search);
    var city = parsed.city;
    fetch5DayForecast(city).then(function(res) {
      this.setState({
        list: res.data.list,
        city: res.data.city.name
      })
    }.bind(this))
  }

  render() {
    var list = this.state.list;
    return(
      <div>
        {!list && 
          <div>LOADING</div>
        }

        {list &&
          list.map((e, index) => {
            let mMoment = moment(new Date(e.dt) * 1000);
            return (
              <li onClick={this.props.handleDetailView.bind(null, list[index], this.state.city)} key={index}>
               <ForecastItem
               day={mMoment.format('dddd')}
               month={mMoment.format('MMMM')}
               date={mMoment.format("D")}
               weather={e.weather[0].description}
               img={e.weather[0].icon} />
              </li>
            );
          })
        }
      </div>
    );
  }
}

export default Forecast;