import React, { Component } from 'react';
import './App.css';
import Sort from './Sort';

class Search extends Component {
  
  render() {
    return (
      <div className="search-container">
		<p className="search-title">FIND YOUR MOVIE</p>
        <form>
			<input className="search-field" type="search" name="q" placeholder="Movie" /> 
			<Sort />
			<button className ="search-button" type="button">SEARCH</button>
		</form>
      </div>
    );
  }
}

export default Search;
