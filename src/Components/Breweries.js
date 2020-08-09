import React, { Component } from 'react';
import axios from 'axios';

export default class Breweries extends Component {
  state = {
    breweries: [],
  };
  async componentDidMount() {
    try {
      let id = this.props.props.match.params.id;
      console.log(id);
      const response = await axios.get(
        `https://api.brewerydb.com/v2/beer/${id}/breweries?key=7d116c2a012e5ed6f81222634ab65613`
      );
      this.setState({
        breweries: response.data.data,
      });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const { breweries } = this.state;
    const brewery = breweries.map((brewery) => {
      return (
        <div key={brewery.id}>
          <p>Name:{brewery.name}</p>
          <p>Still Open: {brewery.isInBusiness}</p>
          <p>Is Verified: {brewery.isVerified}</p>
          <p>Status: {brewery.statusDisplay}</p>
        </div>
      );
    });
    return (
      <div className="breweries">
        <h3>Breweries</h3>
        {brewery}
      </div>
    );
  }
}
