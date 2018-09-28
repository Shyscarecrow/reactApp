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
			movies: [],
			id: null
		}
		this.pageChanger = this.pageChanger.bind(this);
	}
	
	pageChanger(event){
		let newId = event.target.id;
		this.setState({page: 'film', id: {newId}})
	}
  render() {
	  	
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">netflixroulette</h1>
		  {(this.state.page === 'search') ? <Search /> : <FilmDetails movies={this.state.movies} filmId = {this.state.id}
		  clickon={(event)=>this.pageChanger(event)}/>}
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
