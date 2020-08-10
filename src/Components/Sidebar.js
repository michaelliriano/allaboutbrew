import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Success from './Success';
import Deleted from './Deleted';

export default class Sidebar extends Component {
  state = {
    guest: true,
    home: true,
    search: false,
    favorites: [],
  };
  async componentDidMount() {
    await this.setState({ favorites: Object.keys(localStorage) });
    if (this.state.favorites.length > 0) {
      document.querySelector('.fav-active').style.color = '#972e2e';
    } else {
      document.querySelector('.fav-active').style.color = 'white';
    }
  }

  render() {
    return (
      <div className="sidebar">
        <ul>
          <Link to="/">
            <li className="nav-item">
              <i className="material-icons ">home</i>
            </li>
          </Link>
          <Link to="/search">
            <li className="nav-item">
              <i className="material-icons ">search</i>
            </li>
          </Link>
          <Link to="/discover">
            <li className="nav-item">
              <i className="material-icons ">add_box</i>
            </li>
          </Link>
          <Link to="/favorites">
            <li className="nav-item">
              <i className="material-icons fav-active ">favorite</i>
            </li>
          </Link>
        </ul>
        <Success props={this.state} />
        <Deleted />
      </div>
    );
  }
}
