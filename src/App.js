import React from 'react';
import GetBeer from './Components/GetBeer';


class App extends React.Component {

  render() {
    return (
      <div style={styles}>
        <GetBeer key={BASE_KEY} />
      </div>
    )
  }
}
const styles = {
  position: 'absolute',
  height: '100%',
  width: '100%'
}
const BASE_KEY = process.env.REACT_APP_KEY;
export default App;