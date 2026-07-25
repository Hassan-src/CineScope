export const API_BASE_URL = "https://api.themoviedb.org/3";

export const API_OPTIONS = {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    accept: "application/json",
  },
};
