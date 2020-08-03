import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class Beer extends Component {
    state={
        beer: {
            name: '',
            description: '',
            img: {} 
        },
        loading: false
    }
    async componentDidMount() {
        let id = this.props.match.params.id
        const res = await axios.get(`https://api.brewerydb.com/v2/beer/${id}?key=7d116c2a012e5ed6f81222634ab65613`);
        this.setState({
            beer: {
                name: res.data.data.name,
                description: res.data.data.description,
                img: res.data.data.labels
            },
            loading: true
        })
    
    }
    render() {
        const {beer,loading} = this.state;
        if(loading === false){
            return(
                <div className="main-content">
                      <div style={loader}>
                          <span>LOADING...</span>
                      </div>
                </div>
            )
        } else if(beer.description) {
           return(
            <div className="main-content">
                <div className="single-beer">
                <h1>{beer.name}</h1>
                <img src={beer.img.large} height="300px" width="300px" alt=""/>
                <p>{beer.description}</p>
                <Link to="/discover"> <i className="material-icons medium">arrow_back</i></Link>
           </div>
           <div className="single-beer-info">
               <h3>BREW FACTS</h3>
           </div>
       </div>
           )
        } 
        else if(!beer.description){
            return  <div className="main-content">
                        <div className="single-beer">
                         <h3>{beer.name}</h3>
                        <img src={beer.img.large} height="300px" width="300px" alt=""/>
                        <p>This beer currently does not have a description. If you would like more information please visit BreweryDB.</p>
                        <Link to="/discover"> <i className="material-icons medium">arrow_back</i></Link>
                        </div>
                    </div>
        } 
    }
}

const loader = {
    position: 'absolute',
    top: '50%',
    left: '50%'
}