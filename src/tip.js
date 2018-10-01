Для Movies.js

/*{movies.map(movie =>
				<div key={movie.id} className="film" id={movie.id} onclick={props.clickon}>
				<img src={movie[poster-path]} className="film-poster-mini" alt="Movie poster" />
				<span className="film-title">{movie.title}</span>
				<span className="film-release-date">{movie[release-date]}</span>
				<span className="film-genre">{movie.genres}</span>
			</div>)} */
			
			

			
Для FilmDetails

//<img src={movie[poster-path]} className="film-poster-midi" alt="Movie poster" />
//<span className="film-release-date">{movie[release-date]}</span>





toggleSearch(event){
		const title = document.getElementById('sort-title');
		const genre = document.getElementById('sort-title');
		if (event.target.id == title.id) {
			title.classList.add('default-background');
			genre.classList.remove('default-background');
		} else {
			genre.classList.add('default-background');
			title.classList.remove('default-background');
		}
	}
	
	
	
	
	
	onclick={props.clickon}