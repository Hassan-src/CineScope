import { createContext, useEffect, useReducer } from "react";
import { getTrendingDaily } from "../services/api";

const MovieContext = createContext();

const initialState = {
  trending: {
    data: [],
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
    default:
      throw new Error("Unknown action!");
  }
}

function MovieProvider({ children }) {
  const [{ trending }, dispatch] = useReducer(reducer, initialState);
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

  return <MovieContext.Provider>{children}</MovieContext.Provider>;
}

export { MovieProvider, MovieContext };
