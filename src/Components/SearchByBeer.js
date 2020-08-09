import React, { Component } from 'react';

export default class SearchByBeer extends Component {
  state = {
    beers: [],
  };
  componentDidUpdate() {
    console.log(this.props);
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;

      console.log(lat, long);
    });
  }
  render() {
    return <div className="main-content"></div>;
  }
}
