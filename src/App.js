import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Sidebar from './Components/Sidebar';
import Search from './Components/Search';
import Favorite from './Components/Favorite';
import GetBeer from './Components/GetBeer';
import Beer from './Components/Beer';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
            <Sidebar />
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/discover" component={GetBeer} />
          <Route exact path="/discover/:id" component={Beer} />
          <Route exact path="/favorites" component={Favorite} />
        </div>
      </BrowserRouter>
    )
  }
}



export default App;