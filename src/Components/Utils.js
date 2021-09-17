const OMDB_API_KEY = "b7c583b0";
const API_URL = "http://www.omdbapi.com";
export const getMoviesBysearchTerm = async (searchTerm = "batman") => {
	let response = await fetch(
		`https://www.omdbapi.com/?s=${searchTerm}&apikey=${apikey}`
	);
	let movieData = await response.json();
	return movieData.Search;
};

export const getMoviesById = async (searchTerm = "tt0372784") => {
	let response = await fetch(
		`https://www.omdbapi.com/?i=${searchTerm}&apikey=${apikey}`
	);
	let movieData = await response.json();
	return movieData;
};
