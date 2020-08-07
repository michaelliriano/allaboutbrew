import React, { Component } from 'react';
import axios from 'axios';
import Ingredients from './Ingredients';

export default class Beer extends Component {
  state = {
    beer: {
      name: '',
      description: '',
      status: '',
      isOrganic: '',
      isRetired: '',
      img: {},
      category: {},
      style: {},
      glass: {
        name: '',
      },
    },
    loading: false,
  };
  async componentDidMount() {
    let id = this.props.match.params.id;
    const res = await axios.get(
      `https://api.brewerydb.com/v2/beer/${id}?key=7d116c2a012e5ed6f81222634ab65613`
    );
    this.setState({
      beer: {
        name: res.data.data.name,
        description: res.data.data.description,
        img: res.data.data.labels,
        isOrganic: res.data.data.isOrganic,
        isRetired: res.data.data.isRetired,
        category: res.data.data.category,
        status: res.data.data.status,
        style: res.data.data.style,
        glass: res.data.data.glass,
      },
      loading: true,
    });
  }
  render() {
    const { beer, loading } = this.state;
    if (loading === false) {
      return <div className="main-content"></div>;
    } else if (beer.description) {
      return (
        <div className="main-content">
          <div className="single-beer-container">
            <div className="single-beer">
              <h1>{beer.name}</h1>
              <img src={beer.img.medium} height="300px" width="300px" alt="" />
              <h6>Description:</h6>
              <p>{beer.description}</p>
            </div>
            <div className="single-beer-info">
              <h3>BREW FACTS:</h3>
              <p>Name: {beer.name}</p>
              <p>Status: {beer.status}</p>
              <p>Category: {beer.style.category.name}</p>
              <p>Organic: {beer.isOrganic}</p>
              <p>Retired: {beer.isRetired}</p>
              <h3>Style:</h3>
              <p>What style of beer is this?</p>
              <p>
                {beer.style.name} (A.K.A {beer.style.shortName})
              </p>
              <p>Details:</p>
              <p>{beer.style.description}</p>
            </div>
            <Ingredients props={this.props} />
          </div>
        </div>
      );
    } else if (!beer.description) {
      return (
        <div className="main-content">
          <div className="single-beer">
            <h3>{beer.name}</h3>
            <img src={beer.img.large} height="300px" width="300px" alt="" />
            <p>
              This beer currently does not have a description. If you would like
              more information please visit BreweryDB.
            </p>
          </div>
          <div className="single-beer-info">
            <p>Name: {beer.name}</p>
            <p>Status: {beer.status}</p>
            <p>Category: {beer.style.category.name}</p>

            <p>Organic: {beer.isOrganic}</p>
            <p>Retired: {beer.isRetired}</p>
            <h3>Style:</h3>
            <p>What style of beer is this?</p>
            <p>
              {beer.style.name} (A.K.A {beer.style.shortName})
            </p>
            <p>Details:</p>
            <p>{beer.style.description}</p>
            <Ingredients props={this.props} />
          </div>
        </div>
      );
    }
  }
}
