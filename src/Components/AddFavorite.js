import React, { Component } from 'react';

export default class AddFavorite extends Component {
  state = {
    favorites: {},
    clicked: [],
  };
  componentDidMount() {
    this.setState({ favorites: window.localStorage });
  }

  addToFavorites = (e) => {
    const favorites = JSON.stringify(this.props.id);
    window.localStorage.setItem(this.props.id.id, favorites);
    this.randomFunction(e.target);
    const id = e.target.parentElement.parentElement.parentElement.dataset.id;
    const clicked = [...this.state.clicked];
    clicked.concat({ clicked: id });
    this.setState({ clicked });
    console.log(id);
  };
  randomFunction = (prop) => {
    document.querySelector('.added-fav').style.display = 'block';
    console.log(prop);
    prop.innerHTML = 'check_circle';
    setTimeout(() => {
      console.log('added to favorites');
      document.querySelector('.added-fav').style.display = 'none';
    }, 3000);
  };
  render() {
    return (
      <div>
        <i onClick={this.addToFavorites} className="material-icons checked-fav">
          add_circle
        </i>
      </div>
    );
  }
}
