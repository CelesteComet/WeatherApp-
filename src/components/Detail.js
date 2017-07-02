import React from 'react';
import * as moment from 'moment';

function Detail(props) {

  var data = props.location.state.details;
  let mMoment = moment(new Date(data.dt) * 1000);
  console.log(props)
  var city = props.location.state.city;
  var description = data.weather[0].description;
  var minTemp = 'Min Temp: ' + parseInt(data.temp.min * (9/5) - 459.67) + ' degrees';
  var maxTemp = 'Max Temp: ' + parseInt(data.temp.max * (9/5) - 459.67) + ' degrees';
  var humidity = 'Humidity: ' + data.humidity;
  return (
    <div>
      <p>{city}</p>
      <p>{description}</p>
      <p>{minTemp}</p>
      <p>{maxTemp}</p>
      <p>{humidity}</p>
    </div>
  );
}

export default Detail;
