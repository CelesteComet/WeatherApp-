import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GetWeatherWidget extends Component {
  constructor() {
    super();

    this.state = {
      city: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({city: e.target.value})
  }

  render() {
    return(
      <div className={'get-weather-widget ' + this.props.mStyle}>
        <input type='text' placeholder='St. George, Utah' onChange={this.handleChange}/>
        <button onClick={this.props.onSubmitZipCode.bind(null, this.state.city)}>Get Weather</button>
      </div>
    );
  }
}

GetWeatherWidget.propTypes = {
  mStyle: PropTypes.string.isRequired,
  onSubmitZipCode: PropTypes.func.isRequired
}

export default GetWeatherWidget;