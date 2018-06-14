import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TreeComponent1 from './ui/TreeComponent1';
import GridComponent from './ui/GridComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React, kish</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="row">
            <div className="col-sm-3">
                <TreeComponent1 />
            </div>
            <div className="col-sm-8">
                <GridComponent />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
