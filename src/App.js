import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Movies from './Movies';
import FilmDetails from './FilmDetails';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 'search',
			movies: []
		}
	}
  render() {
	  
	function pageChanger(){
		this.setState({page: 'film'})
	}
	  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">netflixroulette</h1>
		  <Search />
        </header>
		< Movies movies={this.state.movies}/>
		<footer className="App-footer">
		<h1 className="App-title">netflixroulette</h1>
		</footer>
       </div>
    );
  }
}

export default App;
