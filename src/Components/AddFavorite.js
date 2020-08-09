import React, { Component } from 'react';
import Favorite from './Favorite';

export default class AddFavorite extends Component {
  state = {
    favorites: {},
  };
  componentWillMount() {
    this.setState({ favorites: window.localStorage });
  }

  addToFavorites = () => {
    const favorites = JSON.stringify(this.props.id);

    window.localStorage.setItem(this.props.id.id, favorites);
  };
  render() {
    return (
      <div>
        <i onClick={this.addToFavorites} class="material-icons">
          add_circle
        </i>
      </div>
    );
  }
}
