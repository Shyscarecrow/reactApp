import React, { Component } from 'react';
import './App.css';

class Sort extends Component {
	
	
		
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
      <React.Fragment>
	     <p className="sort-by"> SEARCH BY</p>
		 <button className ="sort-button default-background" id="sort-title" type="button" onClick={toggleSearch}>TITLE</button>
		 <button className ="sort-button" id="sort-genre" type="button" onClick={toggleSearch}>GENRE</button>		 
	  </React.Fragment>
    );
  }
}

export default Sort;