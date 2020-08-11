import React, { Component } from 'react';

export default class RemoveFavorite extends Component {
  componentDidMount() {
    this.setState({ favorites: this.props.props.favorites });
  }
  removeFavorite = (e) => {
    let keyName = e.target.parentElement.parentElement.dataset.id;
    localStorage.removeItem(keyName);
    e.target.parentElement.parentElement.remove();
    this.randomFunction();
    this.props.empty();
  };
  randomFunction = () => {
    document.querySelector('.deleted-fav').style.display = 'block';
    setTimeout(() => {
      console.log('Deleted from favorites');
      document.querySelector('.deleted-fav').style.display = 'none';
    }, 3000);
  };

  render() {
    return (
      <div className="remove-favorite">
        <i onClick={this.removeFavorite} className="material-icons">
          remove_circle
        </i>
      </div>
    );
  }
}
