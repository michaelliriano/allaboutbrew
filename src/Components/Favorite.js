import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Favorite extends Component {
  state = {
    favorites: [],
  };
  componentDidMount() {
    this.setState({ favorites: Object.keys(localStorage) });
  }

  render() {
    const { favorites } = this.state;
    const fav = favorites.map((item) => {
      const items = JSON.parse(localStorage.getItem(item));
      return (
        <div key={items.id}>
          <div className="beer-item z-depth-5" style={div}>
            <div className="add-favorite"></div>
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
    return (
      <div>
        <div className="beer-container">{fav}</div>
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
