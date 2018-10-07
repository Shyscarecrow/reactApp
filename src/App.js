import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Movies from './Movies';
import FilmDetails from './FilmDetails';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 'search',
			movies: [{
				"id": 353486,
				"title": "Jumanji: Welcome to the Jungle",
				"tagline": "The game has evolved.",
				"vote_average": 6.5,
				"vote_count": 3330,
				"release_date": "2017-12-09",
				"poster_path": "https://image.tmdb.org/t/p/w500/bXrZ5iHBEjH7WMidbUDQ0U2xbmr.jpg",
				"overview": "The tables are turned as four teenagers are sucked into Jumanji's world - pitted against rhinos, black mambas and an endless variety of jungle traps and puzzles. To survive, they'll play as characters from the game.",
				"budget": 90000000,
				"revenue": 928901353,
				"genres": [
				"Action",
				"Adventure",
				"Comedy",
				"Family"
				],
				"runtime": 119
				},
				{
				"id": 37165,
				"title": "The Truman Show",
				"tagline": "On the air. Unaware.",
				"vote_average": 7.9,
				"vote_count": 6238,
				"release_date": "1998-06-04",
				"poster_path": "https://image.tmdb.org/t/p/w500/EelZzudHRvJmjWccWscN1S5vmI.jpg",
				"overview": "Truman Burbank is the star of \"The Truman Show\", a 24-hour-a-day \"reality\" TV show that broadcasts every aspect of his life -- live and in color -- without his knowledge. His entire life has been an unending soap opera for consumption by the rest of the world. And everyone he knows -- including his wife and his best friend -- is really an actor, paid to be part of his life.",
				"budget": 60000000,
				"revenue": 264118201,
				"genres": [
					"Comedy",
					"Drama"
				],
				"runtime": 103
			},
			{
				"id": 11282,
				"title": "Harold & Kumar Go to White Castle",
				"tagline": "Fast Food. High Times.",
				"vote_average": 6.5,
				"vote_count": 864,
				"release_date": "2004-05-30",
				"poster_path": "https://image.tmdb.org/t/p/w500/yVH2fsop0ZnjcaOgryqWBI1Psbm.jpg",
				"overview": "Sometimes, it takes a strange night to put everything else into focus. And that's exactly what happens to Harold and his roommate, Kumar, when they set out to get the best stoner fix money can buy: White Castle hamburgers. Both guys are at a crossroads, about to make major decisions that will affect the course of their lives. Yet they arrive at wisdom by accident as they drive around New Jersey in search of fast food.",
				"budget": 9000000,
				"revenue": 23936908,
				"genres": [
					"Comedy",
					"Adventure"
				],
				"runtime": 88
			},
			{
				"id": 5176,
				"title": "3:10 to Yuma",
				"tagline": "Time waits for one man.",
				"vote_average": 7,
				"vote_count": 1441,
				"release_date": "2007-09-06",
				"poster_path": "https://image.tmdb.org/t/p/w500/9Nwkh0eQmkymEOR0ovAALtjSIZW.jpg",
				"overview": "In Arizona in the late 1800s, infamous outlaw Ben Wade and his vicious gang of thieves and murderers have plagued the Southern Railroad. When Wade is captured, Civil War veteran Dan Evans, struggling to survive on his drought-plagued ranch, volunteers to deliver him alive to the \"3:10 to Yuma\", a train that will take the killer to trial.",
				"budget": 55000000,
				"revenue": 70016220,
				"genres": [
					"Western"
				],
				"runtime": 122
			},
			{
				"id": 8844,
				"title": "Jumanji",
				"tagline": "Roll the dice and unleash the excitement!",
				"vote_average": 7,
				"vote_count": 4015,
				"release_date": "1995-12-15",
				"poster_path": "https://image.tmdb.org/t/p/w500/vgpXmVaVyUL7GGiDeiK1mKEKzcX.jpg",
				"overview": "When siblings Judy and Peter discover an enchanted board game that opens the door to a magical world, they unwittingly invite Alan -- an adult who's been trapped inside the game for 26 years -- into their living room. Alan's only hope for freedom is to finish the game, which proves risky as all three find themselves running from giant rhinoceroses, evil monkeys and other terrifying creatures.",
				"budget": 65000000,
				"revenue": 262797249,
				"genres": [
					"Adventure",
					"Fantasy",
					"Family"
				],
				"runtime": 104
			},
			{
				"id": 29343,
				"title": "Humanoids from the Deep",
				"tagline": "From The Caverns Of The Deep... It Strikes!",
				"vote_average": 5.8,
				"vote_count": 60,
				"release_date": "1980-05-01",
				"poster_path": "https://image.tmdb.org/t/p/w500/oFsXLoEwVmd8Z9PxTRVJjuYHJdH.jpg",
				"overview": "They're not human. But they hunt human women. Not for killing. For mating.",
				"budget": 0,
				"revenue": 0,
				"genres": [
					"Horror",
					"Science Fiction"
				],
			"runtime": 80
			}
			],
			id: 0
		}
		this.pageChanger = this.pageChanger.bind(this);
		this.backToSearch = this.backToSearch.bind(this);
	}
	
	pageChanger(event){
		let newId = +event.target.id;
		this.setState({page: 'film', id: newId})
	}
	
	backToSearch(){
		this.setState({page: "search", id: 0});
	}
	
  render() {
	  	
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">netflixroulette</h1>
		  {(this.state.page === 'search') ? <Search /> : <FilmDetails movies={this.state.movies} filmId = {this.state.id} search={this.backToSearch}/>}
        </header>
		< Movies movies={this.state.movies} clickon={(event)=>this.pageChanger(event)}/>
		<footer className="App-footer">
		<h1 className="App-title">netflixroulette</h1>
		</footer>
       </div>
    );
  }
}

export default App;
