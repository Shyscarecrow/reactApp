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
	  </div>
    );
  }
}

export default FilmDetails;