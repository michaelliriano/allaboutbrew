import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddFavorite from './AddFavorite';

export default class GetBeer extends Component {
  state = {
    beers: [],
    loading: false,
    favorited: [],
  };
  async componentDidMount() {
    await axios
      .get(
        `https://api.brewerydb.com/v2/beers/?key=7d116c2a012e5ed6f81222634ab65613`
      )
      .then((res) => {
        const beers = res.data.data;
        this.setState({
          beers: beers,
          loading: true,
        });
      });
  }
  render() {
    const { beers } = this.state;
    const date = new Date();
    const month = [];
    month[0] = 'January';
    month[1] = 'February';
    month[2] = 'March';
    month[3] = 'April';
    month[4] = 'May';
    month[5] = 'June';
    month[6] = 'July';
    month[7] = 'August';
    month[8] = 'September';
    month[9] = 'October';
    month[10] = 'November';
    month[11] = 'December';
    const current = month[date.getMonth()];
    const displayBeers = beers.map((drink) => {
      if (drink.labels) {
        return (
          <div key={drink.id}>
            <div
              data-id={drink.id}
              className="beer-item z-depth-5"
              style={div}
              key={drink.id}
            >
              <div className="add-favorite">
                <AddFavorite id={drink} />
              </div>
              <img src={drink.labels.medium} height="150" width="150" alt="" />
              <div className="single-beer-title">
                <h1 style={h1}>{drink.name}</h1>
              </div>
              <div className="single-beer-button">
                <Link to={'/discover/' + drink.id}>
                  <button>Learn More</button>
                </Link>
              </div>
            </div>
          </div>
        );
      } else {
        return <div key={drink.id}></div>;
      }
    });
    return (
      <div>
        <div className="main-title">
          <h1>Discover: {current} </h1>
        </div>
        <div className="loader"></div>

        <div className="beer-container">{displayBeers}</div>
      </div>
    );
  }
}
const h1 = {
  fontSize: '20px',
};
const div = {
  textAlign: 'center',
};
