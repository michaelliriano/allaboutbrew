import React, { Component } from 'react';
import SearchByBeer from './SearchByBeer';

export default class Search extends Component {
  state = {};
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ input: e.target[0].value });
  };
  render() {
    return (
      <div className="main-content">
        <div className="search-header">
          <form onSubmit={this.handleSubmit} action="" className="search-form">
            <label htmlFor="Find your favorite beer:">
              <input
                type="text"
                name="beer-search"
                value={undefined}
                placeholder="What's the name of the beer you're looking for?"
                id="search-bar"
                onChange={this.handleChange}
              />
            </label>
            <button className="waves-effect waves-light btn search-btn">
              Search
            </button>
          </form>
        </div>
        <SearchByBeer props={this.state.input} />
      </div>
    );
  }
}
