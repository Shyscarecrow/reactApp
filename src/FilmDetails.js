import React, { Component } from 'react';
import './App.css';

class FilmDetails extends Component {
  render() {
	  
	const filmId = this.props.filmId;
	const movie = this.props.movies.filter(movie => movie.id === filmId);
	  
    return (
      <div className="film-details">
		<span className="film-title">{movie.title}</span>
		<span className="film-genre">{movie.genres}</span>
		<img src={movie.poster_path} className="film-poster-midi" alt="Movie poster" />
		<span className="film-release-date">{movie.release_date}</span>
	  </div>
    );
  }
}

export default FilmDetails;