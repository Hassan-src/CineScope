// The api options neccessary refer to https://api.themoviedb.org/
const API_BASE_URL = "https://api.themoviedb.org/3";
const API_OPTIONS = {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    accept: "application/json",
  },
};

// Fetching from Omdb api for more info refer to https://www.omdbapi.com/
const OMDB_API_BASE_URL = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_KEY}`;
async function fetchImdbRating(endpoint) {
  const response = await fetch(`${OMDB_API_BASE_URL}${endpoint}`);
  const data = await response.json();
  if (!response.ok) throw new Error(data.status_message);
  return data;
}
// Fetching from Tmdb api
async function fetchMovie(endpoint) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, API_OPTIONS);
  const data = response.json();
  return data;
}
// Rating from Omdb
export function getImdbRating(imdb_id) {
  return fetchImdbRating(`&i=${imdb_id}`);
}
// Daily movie trend from Tmdb
export function getTrendingDaily() {
  return fetchMovie("/trending/all/day");
}
// Popular movies from Tmdb
export function getPopularMovies() {
  return fetchMovie("/movie/popular");
}
// Top rated movies from Tmdb
export function getTopRatedMovies() {
  return fetchMovie("/movie/top_rated");
}
// Credits from Tmdb including the actors, directors,...
export function getCredits(movie_id) {
  return fetchMovie(`/movie/${movie_id}/credits`);
}
// All the details of a certain movie including country, genres, runtime,...
export function getMovieDetails(movie_id) {
  return fetchMovie(`/movie/${movie_id}`);
}

export function getMovieTrailer(movie_id) {
  return fetchMovie(`/movie/${movie_id}/videos`);
}
