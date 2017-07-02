import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import GetWeatherWidget from './components/GetWeatherWidget';
import Forecast from './components/Forecast';
import Detail from './components/Detail';

class App extends Component {

  constructor() {
    super();
    this.onSubmitZipCode = this.onSubmitZipCode.bind(this);
    this.handleDetailView = this.handleDetailView.bind(this);
  }

  onSubmitZipCode(e, city) {
    e.history.push('/forecast/?city=' + city);
  }

  handleDetailView(e, details, city) {
    console.log(city);
    e.history.push('/detail', {details: details, city: city});
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' render={ function(props) {
            return (
              <Header>
                <GetWeatherWidget mStyle={'row'} onSubmitZipCode={this.onSubmitZipCode.bind(null, props)}/>
              </Header>
            );
          }.bind(this)} />

          <Route exact path='/' render={ Home } />

          <Route path='/forecast' render={ function(props) {
            return (
              <Forecast location={props.history.location} handleDetailView={this.handleDetailView.bind(null, props)}/>
            );
          }.bind(this)} />

          <Route path='/detail' render={ function(props) {
            return (
              <Detail location={props.history.location} />
            );
          }} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
