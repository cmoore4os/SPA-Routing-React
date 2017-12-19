import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Movies from './components/movies/Movies';
import Home from './components/pages/home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movie Guide</h1>
        </header>
        <Router>
          <div>
            <Route path="/" component={Home} exact />
            <Route path="/movies" component={Movies} />
            {/* <Route path="/movies/:movie" component = {Movie} /> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
