import React, { Component } from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import Routes from './Route';
import Menu from './Menu';
import logo from '../logo.svg';
import '../content/App.css';
// import '../content/';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
             <Router>
                <div>
                    <Menu/>
                    <Routes/>
                </div>
            </Router>
      </div>
    );
  }
}

export default App;
