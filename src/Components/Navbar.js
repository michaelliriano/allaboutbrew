import React, { Component } from 'react'

export default class Navbar extends Component {
    state={
        home: false,
        search: false,

    }
    render() {
        return (
              <div className="navbar-fixed">
                  <nav style={navStyle}>
                <div className="nav-wrapper">
                <a  className="brand-logo center"><span>🍻</span>  All About Brew <span>🍻</span> </a>
                
                </div>
              </nav>
              </div>
        )
    }
}
const navStyle = {
    backgroundColor: '#204051'
}