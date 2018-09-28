import React, { Component } from 'react';
import './App.css';

class Movies extends Component {
	constructor(props) {
		super(props);
	}
  render() {
	const movies = this.props.movies;
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
			{(!movies.lenght)
          ? (<div className="no-results"><span>No films found</span></div>)
          : (<div className="results-movies"> 
				/*{movies.map(movie =>
				<div key={movie.id} className="film" onclick={this.pageChanger}>
				<img src={movie[poster-path]} className="film-poster-mini" alt="Movie poster" />
				<span className="film-title">{movie.title}</span>
				<span className="film-release-date">{movie[release-date]}</span>
				<span className="film-genre">{movie.genres}</span>
			</div>)} */
		</div>)
         }
		</div>
      </div>
    );
  }
}

export default Movies;