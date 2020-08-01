import React from 'react';
import GetBeer from './Components/GetBeer';

class App extends React.Component {

  
  render() {
    return (
      <div style={styles}>
        <GetBeer />
      </div>
    )
  }
}
const styles = {
  position: 'absolute',
  height: '100%',
  width: '100%'
}
export default App;