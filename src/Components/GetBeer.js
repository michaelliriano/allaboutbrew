import React, { Component } from 'react'
import axios from 'axios';
import Home from './Home';

export default class GetBeer extends Component {
    state={
        beers: [],

    }
    async componentDidMount() {
        await axios.get('https://api.brewerydb.com/v2/beers/?key=7d116c2a012e5ed6f81222634ab65613').then((res) => {
          const beers  =  res.data.data;
          this.setState({beers})
        })
      }
    render() {
        const {beers} = this.state;
        const displayBeers  = beers.map((drink) => {
            if(drink.labels && drink.description){
                return (
                    <div style={beerStyles} key={drink.id}>
                        <h1>{drink.name}</h1>
                        <img src={drink.labels.medium} alt=""/>
                        <p>{drink.description}</p>
                    </div>
                )
            }
        })
        return (
            <div style={container}>
              {displayBeers}
            </div>
        )
    }
}
const beerStyles = {
    position: 'relative',
    height: 'auto',
    width: '300px',
    border: '1px solid black',
    textAlign: 'center',
    margin: '20px'
}
const container = {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'space-around'
}