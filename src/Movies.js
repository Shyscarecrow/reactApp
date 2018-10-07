import React, { Component } from 'react';
import './App.css';

class Movies extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: this.props.movies.sort(function(a, b){a.vote_average - b.vote_average})
		}
		
		this.toggleSort = this.toggleSort.bind(this)
	}
	
	toggleSort(event){
		let movies = this.state.movies;
		
		function compareRating(a, b){return b.vote_average - a.vote_average};
		function compareDate(a, b){return b.release_date.split('-')[0] - a.release_date.split('-')[0]};
		
		if(event.target.id === "sort-release-date") {
			this.setState({movies: movies.sort(compareDate)});
			event.target.classList.add('default-color');
			document.getElementById('sort-rating').classList.remove('default-color');
			
		} else if(event.target.id === "sort-rating"){
			this.setState({movies: movies.sort(compareRating)});
			event.target.classList.add('default-color');
			document.getElementById('sort-release-date').classList.remove('default-color');
		}
	}
		
	
  render() {
	  
	return (
      <div>
		<div className="results-information">
			<div className="films-quantity">
				<span><span id="total-quantity">{this.state.movies.length}</span> movies found</span>
			</div>
			<div className="results-sort-by">
				<span>Sort by</span>
				<span id="sort-release-date" className="sort-span" onClick={this.toggleSort}>release date</span>
				<span id="sort-rating" className="sort-span default-color" onClick={this.toggleSort}>rating</span>
			</div>
		</div>
		<div className="movies-container">
			{(this.state.movies.lenght === 0)
          ? (<div className="no-results"><span>No films found</span></div>)
          : (<div className="results-movies"> 
			{this.state.movies.map(movie =>
				<div key={movie.id} className="film" >
				<img src={movie.poster_path} id={movie.id} onClick={this.props.clickon} className="film-poster-mini" alt="Movie poster"/><br />
				<span className="film-title">{movie.title}</span><br />
				<span className="film-release-date">{movie.release_date.split('-')[0]}</span><br />
				<span className="film-genre">{movie.genres.join(' & ')}</span>
			</div>)} 	
			</div>)
         }
		</div>
      </div>
    );
  }
}

export default Movies;