import { MovieContext, MovieProvider } from "./MovieContext";

function useMovieProvider() {
  const context = MovieProvider(MovieContext);
  if (context === undefined)
    throw new Error("Context used out of the provider");
  return context;
}

export default useMovieProvider;
