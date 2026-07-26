const API_BASE_URL = "https://api.themoviedb.org/3";

const API_OPTIONS = {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    accept: "application/json",
  },
};

async function fetchMovie(endpoint) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, API_OPTIONS);
  const data = response.json();
  return data;
}

export function getTrendingDaily() {
  return fetchMovie("/trending/all/day");
}

export function getPopularMovies() {
  return fetchMovie("/movie/popular");
}

export function getTopRatedMovies() {
  return fetchMovie("/movie/top_rated");
}
