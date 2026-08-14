import { useContext } from "react";
import { MovieContext } from "./MovieContext";

function useMovieProvider() {
  const context = useContext(MovieContext);
  if (context === undefined)
    throw new Error("Context used out of the provider");
  return context;
}

export default useMovieProvider;
