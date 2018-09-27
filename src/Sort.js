import React, { Component } from 'react';
import './App.css';

class Sort extends Component {
  render() {
    return (
      <React.Fragment>
	     <p className="sort-by"> SEARCH BY</p>
		 <button className ="sort-button sort-button-default" type="button">TITLE</button>
		 <button className ="sort-button" type="button">GENRE</button>
		 
      </React.Fragment>
    );
  }
}

export default Sort;