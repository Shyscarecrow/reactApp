import React, { Component } from 'react';
import './App.css';

class Movies extends Component {
	
  render() {
	  
	const movies = this.props.movies;
	
	function toggleSort(event){
		if (event.target.id === 'sort-rating') {
			event.target.classList.add('default-color');
			document.getElementById('sort-release-date').classList.remove('default-color');
		} else {
			event.target.classList.add('default-color');
			document.getElementById('sort-rating').classList.remove('default-color');
		}
			
	}
    return (
      <div>
		<div className="results-information">
			<div className="films-quantity">
				<span><span id="total-quantity">{movies.length}</span> movies found</span>
			</div>
			<div className="results-sort-by">
				<span>Sort by</span>
				<span id="sort-release-date" className="sort-span" onClick={toggleSort}>release date</span>
				<span id="sort-rating" className=" sort-span default-color"onClick={toggleSort} >rating</span>
			</div>
		</div>
		<div className="movies-container">
			{(movies.lenght == 0)
          ? (<div className="no-results"><span>No films found</span></div>)
          : (<div className="results-movies"> 
			{movies.map(movie =>
				<div key={movie.id} className="film" id={movie.id}>
				<img src={movie.poster_path} className="film-poster-mini" alt="Movie poster"/><br />
				<span className="film-title">{movie.title}</span><br />
				<span className="film-release-date">{movie.release_date}</span><br />
				<span className="film-genre">{movie.genres}</span>
			</div>)} 	
			</div>)
         }
		</div>
      </div>
    );
  }
}

export default Movies;