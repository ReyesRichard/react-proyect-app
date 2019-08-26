import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import './stylesheets/main.scss';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Dashboard from './containers/dashboard';
import Other from './containers/other';

import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">

      <Router>
        <Header user="Arturo"/>

        <div className="routes">
              <Route path="/" exact component={Dashboard} />
              <Route path="/other/" component={Other} />
        </div>
      </Router>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Footer />
    </div>
  );
}

export default App;
