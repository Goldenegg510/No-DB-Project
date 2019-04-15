import React, { Component } from 'react';
import './App.css';
import Jobs from './Components/Jobs'

class App extends Component {
  createJob(){}
  render() {
    return (
      <div className="App">
        <Jobs />
      </div>
    )
  }
}

export default App;