import React, { Component } from 'react';
import './App.css';

class FilmDetails extends Component {
  render() {
	  
	const filmId = this.props.filmId;
	const movie = this.props.movies.find(movie => movie.id === filmId);
	  
    return (
		<div className="film-page">
			<button className="back-to-search" onClick={this.props.search}>search</button>
			<div className="film-details">
				<img src={movie.poster_path} className="film-poster-midi" alt="Movie poster" />
				<div className="film-info">
					<span className="film-details-title">{movie.title}</span>
					<span className="film-details-vote-average">{movie.vote_average}</span><br />
					<span className="film-details-genre">{movie.genres.slice(0, 2).join(' ')}</span>
					<span className="film-details-release-date">{movie.release_date.split('-')[0]}</span>
					<span className="film-details-runtime">{movie.runtime} min</span>
					<p className="film-details-ovevrview">{movie.overview}</p>
				</div>
			</div>
		</div>
    );
  }
}

export default FilmDetails;