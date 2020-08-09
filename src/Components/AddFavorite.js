import React, { Component } from 'react';

export default class AddFavorite extends Component {
  state = {
    favorites: {},
  };
  componentDidMount() {
    this.setState({ favorites: window.localStorage });
  }

  addToFavorites = () => {
    const favorites = JSON.stringify(this.props.id);
    window.localStorage.setItem(this.props.id.id, favorites);
    alert('Added to your favorites!');
  };
  render() {
    return (
      <div>
        <i onClick={this.addToFavorites} className="material-icons">
          add_circle
        </i>
      </div>
    );
  }
}
