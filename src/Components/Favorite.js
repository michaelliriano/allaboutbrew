import React, { Component } from 'react';
import Favorites from './Favorites';

export default class Favorite extends Component {
  state = {
    favorites: [],
  };
  componentDidMount() {
    this.setState({ favorites: Object.keys(localStorage) });
  }

  render() {
    const { favorites } = this.state;
    console.log(favorites);
    return (
      <div className="main-content">
        <h1>Your Favorited Beers:</h1>
      </div>
    );
  }
}
