// The api options neccessary refer to https://api.themoviedb.org/
const API_BASE_URL = "https://api.themoviedb.org/3";
const API_OPTIONS = {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    accept: "application/json",
  },
};

const OMDB_API_BASE_URL = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_KEY}`;
// Using a cache to avoid rerenders for already shown movies
async function cachedFetch(cache, key, fetchFn) {
  if (cache.has(key)) {
    return cache.get(key);
  }
  const data = await fetchFn();
  cache.set(key, data);
  return data;
}

// Fetching from Omdb api for more info refer to https://www.omdbapi.com/
async function fetchImdbRating(endpoint) {
  const response = await fetch(`${OMDB_API_BASE_URL}${endpoint}`);
  const data = await response.json();
  if (!response.ok) throw new Error(data.status_message);
  return data;
}
// Fetching from Tmdb api
async function fetchMovie(endpoint) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, API_OPTIONS);
  const data = await response.json();
  if (!response.ok) throw new Error(data.status_message);
  return data;
}
// Rating from Omdb
const cacheImdbRate = new Map();
export function getImdbRating(imdb_id) {
  return cachedFetch(cacheImdbRate, imdb_id, () =>
    fetchImdbRating(`&i=${imdb_id}`),
  );
}
// Daily movie trend from Tmdb
const cacheTrending = new Map();
export function getTrendingDaily() {
  return cachedFetch(cacheTrending, "Trending-week", () =>
    fetchMovie("/trending/movie/week"),
  );
}
// Popular movies from Tmdb
const cachePopularMovies = new Map();
export function getPopularMovies() {
  return cachedFetch(cachePopularMovies, "PopularMovies", () =>
    fetchMovie("/movie/popular"),
  );
}
// Top rated movies from Tmdb
const cacheTopRated = new Map();
export function getUpComingMovies() {
  return cachedFetch(cacheTopRated, "TopRatedMovies", () =>
    fetchMovie("/movie/upcoming"),
  );
}
// Credits from Tmdb including the actors, directors,...
const cacheCredits = new Map();
export function getCredits(movie_id) {
  return cachedFetch(cacheCredits, movie_id, () =>
    fetchMovie(`/movie/${movie_id}/credits`),
  );
}
// All the details of a certain movie including country, genres, runtime,...
const cacheDetails = new Map();
export function getMovieDetails(movie_id) {
  return cachedFetch(cacheDetails, movie_id, () =>
    fetchMovie(`/movie/${movie_id}`),
  );
}
// Trailer for each movies
const cachedTrailer = new Map();
export function getMovieTrailer(movie_id) {
  return cachedFetch(cachedTrailer, movie_id, () =>
    fetchMovie(`/movie/${movie_id}/videos`),
  );
}
// Movies genres
const cachedGenres = new Map();
export function getMoviesGenres() {
  return cachedFetch(cachedGenres, "MoviesGenres", () =>
    fetchMovie("/genre/movie/list"),
  );
}
// Tv series
const chachedTvSeriesPopular = new Map();
export function getTvSeriesPopular() {
  return cachedFetch(chachedTvSeriesPopular, "TvSeriesPopular", () =>
    fetchMovie("/tv/popular"),
  );
}
const cachedTvSeriesTopRated = new Map();
export function getTvSeriesTopRated() {
  return cachedFetch(cachedTvSeriesTopRated, "TvSeriesTopRated", () =>
    fetchMovie("/tv/top_rated"),
  );
}
