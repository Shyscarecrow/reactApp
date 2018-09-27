import React, { Component } from 'react';
import './App.css';

class Movies extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: []
		}
	}
  render() {
	  
    return (
      <div>
		<div className="results-information">
			<div className="films-quantity">
				<span><span id="total-quantity">7</span> movies found</span>
			</div>
			<div className="results-sort-by">
				<span>Sort by</span>
				<span>release date</span>
				<span className="default-color">rating</span>
			</div>
		</div>
		<div className="movies-container">
			{(!this.state.movies.lenght)
          ? (<div className="no-results"><span>No films found</span></div>)
          : <div></div>
         }
		</div>
      </div>
    );
  }
}

export default Movies;