import { createContext, useEffect, useReducer, useState } from "react";
import {
  getCredits,
  getMovieDetails,
  getMovieTrailer,
  getTrendingDaily,
} from "../services/api";

const MovieContext = createContext();

const initialState = {
  trending: {
    data: [],
    loading: false,
    error: null,
  },
  details: {
    data: null,
    loading: false,
    error: null,
  },
  trailer: {
    data: null,
    loading: false,
    error: null,
  },
  credits: {
    data: null,
    loading: false,
    error: null,
  },
};

function reducer(state, action) {
  switch (action.type) {
    // Trending movies data
    case "trending/loading": {
      return {
        ...state,
        trending: { ...state.trending, loading: true, error: null },
      };
    }
    case "trending/loaded": {
      return {
        ...state,
        trending: { ...state.trending, loading: false, data: action.payload },
      };
    }
    case "trending/rejected": {
      return {
        ...state,
        trending: {
          ...state.trending,
          data: [],
          loading: false,
          error: action.payload,
        },
      };
    }
    // Movies details
    case "details/loading": {
      return {
        ...state,
        details: {
          ...state.details,
          data: null,
          loading: true,
          error: null,
        },
      };
    }
    case "details/loaded": {
      return {
        ...state,
        details: {
          ...state.details,
          data: action.payload,
          loading: false,
        },
      };
    }
    case "details/rejected": {
      return {
        ...state,
        details: {
          ...state.details,
          data: null,
          loading: false,
          error: action.payload,
        },
      };
    }
    // Movies trailer
    case "trailer/loading": {
      return {
        ...state,
        trailer: {
          ...state.trailer,
          data: null,
          loading: true,
          error: null,
        },
      };
    }
    case "trailer/loaded": {
      return {
        ...state,
        trailer: {
          ...state.trailer,
          data: action.payload,
          loading: false,
        },
      };
    }
    case "trailer/rejected": {
      return {
        ...state,
        trailer: {
          ...state.trailer,
          data: null,
          loading: false,
          error: action.payload,
        },
      };
    }
    // Movies Credits
    case "credits/loading": {
      return {
        ...state,
        credits: {
          ...state.credits,
          data: null,
          loading: true,
          error: null,
        },
      };
    }
    case "credits/loaded": {
      return {
        ...state,
        credits: {
          ...state.credits,
          data: action.payload,
          loading: false,
        },
      };
    }
    case "credits/rejected": {
      return {
        ...state,
        credits: {
          ...state.credits,
          data: null,
          loading: false,
          error: action.payload,
        },
      };
    }
    default:
      throw new Error("Unknown action!");
  }
}

function MovieProvider({ children }) {
  const [{ trending, details, trailer, credits, genres }, dispatch] =
    useReducer(reducer, initialState);
  const [topMovie, setTopMovie] = useState(0);
  const heroMovie = trending.data.length > 0 ? trending.data[topMovie] : null;
  useEffect(function () {
    async function loadTrending() {
      dispatch({ type: "trending/loading" });
      try {
        const data = await getTrendingDaily();
        // Getting the data and slice it to only 6 children
        dispatch({
          type: "trending/loaded",
          payload: data.results.slice(0, 6),
        });
      } catch (err) {
        dispatch({ type: "trending/rejected", payload: err.message });
      }
    }
    loadTrending();
  }, []);
  useEffect(
    function () {
      if (!heroMovie?.id) return;
      const movieId = heroMovie.id;
      async function allTheDetails() {
        dispatch({ type: "details/loading" });
        dispatch({ type: "trailer/loading" });
        dispatch({ type: "credits/loading" });
        // Details data
        getMovieDetails(movieId)
          .then((data) => {
            dispatch({
              type: "details/loaded",
              payload: data,
            });
          })
          .catch((err) => {
            dispatch({ type: "details/rejected", payload: err.message });
          });
        // Trailer data
        getMovieTrailer(movieId)
          .then((data) => {
            dispatch({
              type: "trailer/loaded",
              payload:
                data.results.find(
                  (video) =>
                    video.site === "YouTube" &&
                    video.type === "Trailer" &&
                    video.official,
                ) ??
                data.results.find(
                  (video) =>
                    video.site === "YouTube" && video.type === "Trailer",
                ),
            });
          })
          .catch((err) => {
            dispatch({ type: "trailer/rejected", payload: err.message });
          });
        // Credits data
        getCredits(movieId)
          .then((data) => {
            dispatch({
              type: "credits/loaded",
              payload: data,
            });
          })
          .catch((err) => {
            dispatch({ type: "credits/rejected", payload: err.message });
          });
      }
      allTheDetails();
    },
    [heroMovie?.id],
  );
  return (
    <MovieContext.Provider
      value={{
        trending,
        details,
        trailer,
        credits,
        genres,
        heroMovie,
        topMovie,
        setTopMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export { MovieProvider, MovieContext };
