import React, { Component } from 'react'
import GetBeers from './GetBeer';
import Sidebar from './Sidebar';
export default class MainScreen extends Component {
    render() {
        return (
            
           
                <div style={navMenu} className="col s3">
            <Sidebar />
          </div>
            </div>
        )
    }
}


const navMenu ={
    backgroundColor:'#eceff1',
    height: '100vh',
    position: 'fixed'
}
const beerMenu ={
    position: 'absolute',
    right: 0
}


