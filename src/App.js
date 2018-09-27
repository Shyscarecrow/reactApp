import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Movies from './Movies';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">netflixroulette</h1>
		  <Search />
        </header>
		< Movies />
		<footer className="App-footer">
		<h1 className="App-title">netflixroulette</h1>
		</footer>
       </div>
    );
  }
}

export default App;
