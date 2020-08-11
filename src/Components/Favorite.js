import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RemoveFavorite from './RemoveFavorite';

export default class Favorite extends Component {
  state = {
    favorites: [],
    empty: true,
  };
  async componentDidMount() {
    await this.setState({ favorites: Object.keys(localStorage) });
    if (this.state.favorites.length > 0) {
      document.querySelector('.fav-active').style.color = '#972e2e';
      this.setState({ empty: false });
    } else {
      document.querySelector('.fav-active').style.color = 'white';
    }
  }
  updateState = async () => {
    await this.setState({ favorites: Object.keys(localStorage) });
  };

  render() {
    const { favorites } = this.state;
    const fav = favorites.map((item) => {
      const items = JSON.parse(localStorage.getItem(item));
      return (
        <div key={items.id}>
          <div data-id={items.id} className="beer-item z-depth-5" style={div}>
            <RemoveFavorite props={this.state} empty={this.updateState} />
            <img src={items.labels.medium} height="150" width="150" alt="" />
            <div className="single-beer-title">
              <h1 style={h1}>{items.name}</h1>
            </div>
            <div className="single-beer-button">
              <Link to={'/discover/' + items.id}>
                <button>Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      );
    });
    if (this.state.empty) {
      return (
        <div className="main-content" style={div}>
          <div className="no-favorites">
            <h3>You currently do not have any beers favorited at this time.</h3>
            <p>Please visit the discover page to add a favorite.</p>
          </div>
        </div>
      );
    } else {
      if (this.state.favorites.length === 0) {
        document.querySelector('.fav-active').style.color = 'white';
        return (
          <div className="main-content" style={div}>
            <div className="no-favorites">
              <h3>
                You currently do not have any beers favorited at this time.
              </h3>
              <p>Please visit the discover page to add a favorite.</p>
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <div className="main-title">
              <h1>FAVORITES: </h1>
            </div>
            <div className="loader"></div>

            <div className="beer-container">{fav}</div>
          </div>
        );
      }
    }
  }
}
const h1 = {
  fontSize: '20px',
};
const div = {
  textAlign: 'center',
};
