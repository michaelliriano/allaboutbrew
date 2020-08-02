import React, { Component } from 'react'
import axios from 'axios';



export default class GetBeer extends Component {
    state={
        beers: [],

    }
    async componentDidMount() {
        await axios.get(`https://api.brewerydb.com/v2/beers/?key=${process.env.REACT_APP_KEY}`).then((res) => {
          const beers  =  res.data.data;
          this.setState({beers})
        })
      }
    render() {
        const {beers} = this.state;
        const displayBeers  = beers.map((drink) => {
            if(drink.labels){
                return (
                    <div className="beer-item" style={div} key={drink.id}>
                        <img className="flow-text " src={drink.labels.medium} height="150" width="150" alt=""/>
                        <h1 className="flow-text" style={h1}>{drink.name}</h1>    
                    </div>
                )
            }
        })
        return (
            
                <div className="beer-container" >
                    {displayBeers}
                </div>
            
        )
    }
}
const h1 = {
    fontSize: "20px"
}
const div = {
    textAlign: 'center'
}


const BASE_KEY = process.env.REACT_APP_KEY;