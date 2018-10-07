import React, { Component } from 'react';
import './App.css';

class Search extends Component { 
	constructor(props) {
		super(props);
		this.state = {
			searchOption: "title"
		}
		this.sortHandler = this.sortHandler.bind(this);
	}
	
	sortHandler(event){
		this.setState({searchOption: function(option){
				return event.target.id === "sort-title" ? "title" : "genre"
			}
		})
	}
  
	render() {
		
		function toggleSearch(event){
			if (event.target.id === 'sort-title') {
				event.target.classList.add('default-background');
				document.getElementById('sort-genre').classList.remove('default-background');
			} else {
				event.target.classList.add('default-background');
				document.getElementById('sort-title').classList.remove('default-background');
			}
				
		}
		
		return (
        <div className="search-container">
			<p className="search-title">find your movie</p>
			<form>
				<input className="search-field" type="search" name="q" placeholder="Movie" /> 
				<div className="sort">
					<p className="sort-by"> search by</p>
					<button className ="sort-button default-background" id="sort-title" type="button" onClick={toggleSearch}>title</button>
					<button className ="sort-button" id="sort-genre" type="button" onClick={toggleSearch}>genre</button>		 
				</div>
				<button className ="search-button" type="button">SEARCH</button>
			</form>
		</div>
		);
	}
}

export default Search;
