import React, { Component } from 'react';
import axios from 'axios';

export default class Ingredients extends Component {
  state = {
    ingredients: undefined,
    loading: false,
  };

  async componentDidMount() {
    try {
      let id = this.props.props.match.params.id;
      const response = await axios.get(
        `https://api.brewerydb.com/v2/beer/${id}/ingredients?key=7d116c2a012e5ed6f81222634ab65613`
      );
      this.setState({
        ingredients: response.data.data,
        loading: true,
      });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const { ingredients, loading } = this.state;
    console.log(typeof ingredients);
    if (loading === false) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    } else if (typeof ingredients === 'undefined') {
      return (
        <div className="ingredients">
          <h1>Ingredients</h1>
          <p>
            There are currently no ingredients for this product at this time.
            Please try again later
          </p>
        </div>
      );
    } else {
      return (
        <div className="ingredients">
          <h1>Ingredients</h1>
          {ingredients.map((data) => {
            return (
              <div key={data.id}>
                <p>{data.name}</p>
              </div>
            );
          })}
        </div>
      );
    }
  }
}
