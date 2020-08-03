import React, { Component } from 'react'
import { Link} from 'react-router-dom';

export default class Sidebar extends Component {
    state={
        guest: true,
        home: true,
        search: false,
        favorites: false
    }
    
    render() {
        return (
            
            
                   <div className="sidebar">
                   <ul>
                       <Link to="/"><li className="nav-item"><i className="material-icons ">home</i></li></Link>
                       <Link to="/search"><li className="nav-item"><i className="material-icons ">search</i></li></Link>
                       <Link to="/discover"><li className="nav-item"><i className="material-icons ">add_box</i></li></Link>
                       <Link to="/favorites"><li className="nav-item"><i className="material-icons ">favorite</i></li></Link>
                       
                    </ul>
                   </div>
         
            
        )
    }
}
