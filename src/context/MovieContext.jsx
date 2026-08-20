import { createContext, useEffect, useReducer, useState } from "react";
import {
  getCredits,
  getMovieDetails,
  getMoviesGenres,
  getMovieTrailer,
  getPopularMovies,
  getTrendingDaily,
  getTvSeriesPopular,
  getTvSeriesTopRated,
  getUpComingMovies,
} from "../services/api";
import useLocalStorageState from "../Hooks/useLocalStorageState";

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
  popularMovies: {
    data: [],
    loading: false,
    error: null,
  },
  upComingMovies: {
    data: [],
    loading: false,
    error: null,
  },
  genres: {
    data: null,
    loading: false,
    error: null,
  },
  tvpopular: {
    data: [],
    loading: false,
    error: null,
  },
  tvTopRated: {
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
    // PopularMovies for the movies page
    case "popular/loading": {
      return {
        ...state,
        popularMovies: {
          ...state.popularMovies,
          data: [],
          loading: true,
          error: null,
        },
      };
    }
    case "popular/loaded": {
      return {
        ...state,
        popularMovies: {
          ...state.popularMovies,
          data: action.payload,
          loading: false,
          error: null,
        },
      };
    }
    case "popular/rejected": {
      return {
        ...state,
        popularMovies: {
          ...state.popularMovies,
          data: [],
          loading: false,
          error: action.payload,
        },
      };
    }
    // Upcoming movies for the movies page
    case "upComing/loading": {
      return {
        ...state,
        upComingMovies: {
          ...state.upComingMovies,
          data: [],
          loading: true,
          error: null,
        },
      };
    }
    case "upComing/loaded": {
      return {
        ...state,
        upComingMovies: {
          ...state.upComingMovies,
          data: action.payload,
          loading: false,
          error: null,
        },
      };
    }
    case "upComing/rejected": {
      return {
        ...state,
        upComingMovies: {
          ...state.upComingMovies,
          data: [],
          loading: false,
          error: action.payload,
        },
      };
    }
    // Genres base on ids
    case "genres/loading": {
      return {
        ...state,
        genres: {
          ...state.genres,
          data: null,
          loading: true,
          error: null,
        },
      };
    }
    case "genres/loaded": {
      return {
        ...state,
        genres: {
          ...state.genres,
          data: action.payload,
          loading: false,
          error: null,
        },
      };
    }
    case "genres/rejected": {
      return {
        ...state,
        genres: {
          ...state.genres,
          data: null,
          loading: false,
          error: action.payload,
        },
      };
    }
    // TvSeries Popular
    case "tvpopular/loading": {
      return {
        ...state,
        tvpopular: {
          ...state.tvpopular,
          data: [],
          loading: true,
          error: null,
        },
      };
    }
    case "tvpopular/loaded": {
      return {
        ...state,
        tvpopular: {
          ...state.tvpopular,
          data: action.payload,
          loading: false,
          error: null,
        },
      };
    }
    case "tvpopular/rejected": {
      return {
        ...state,
        tvpopular: {
          ...state.tvpopular,
          data: [],
          loading: false,
          error: action.payload,
        },
      };
    }
    // TvSeries top rated
    case "tvTopRated/loading": {
      return {
        ...state,
        tvTopRated: {
          data: [],
          loading: true,
          error: null,
        },
      };
    }
    case "tvTopRated/loaded": {
      return {
        ...state,
        tvTopRated: {
          data: action.payload,
          loading: false,
          error: null,
        },
      };
    }
    case "tvTopRated/rejected": {
      return {
        ...state,
        tvTopRated: {
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
  const [
    {
      trending,
      details,
      trailer,
      credits,
      genres,
      popularMovies,
      upComingMovies,
      tvpopular,
      tvTopRated,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  const [topMovie, setTopMovie] = useState(0);
  const heroMovie = trending.data.length > 0 ? trending.data[topMovie] : null;
  const [bookmarks, setBookmarks] = useLocalStorageState([], "bookMark");
  const bookmarksMovieIds = bookmarks?.map((id) => id.id);
  function handleBookMarkBtn(movie) {
    setBookmarks((current) => {
      // Preventing duplicate movies
      const exists = current.some((item) => item.id === movie.id);
      if (exists) {
        return current.filter((item) => item.id !== movie.id);
      }
      return [
        ...current,
        {
          id: movie.id,
          title: movie.title || movie.name,
          poster_path: movie.poster_path,
          release_date: movie.release_date,
          overview: movie.overview,
        },
      ];
    });
  }
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
  useEffect(function () {
    async function movies() {
      dispatch({ type: "popular/loading" });
      dispatch({ type: "upComing/loading" });
      getPopularMovies()
        .then((popularMovies) => {
          dispatch({
            type: "popular/loaded",
            payload: popularMovies?.results.slice(0, 14),
          });
        })
        .catch((err) => {
          dispatch({ type: "popular/rejected", payload: err.message });
        });
      getUpComingMovies()
        .then((upComingMovies) => {
          dispatch({
            type: "upComing/loaded",
            payload: upComingMovies?.results.slice(0, 14),
          });
        })
        .catch((err) => {
          dispatch({ type: "upComing/rejected", payload: err.message });
        });
    }
    movies();
  }, []);
  useEffect(function () {
    async function genres() {
      dispatch({ type: "genres/loading" });
      try {
        const data = await getMoviesGenres();
        dispatch({ type: "genres/loaded", payload: data.genres });
      } catch (err) {
        dispatch({ type: "genres/rejected", payload: err.message });
      }
    }
    genres();
  }, []);
  useEffect(function () {
    async function tvSeriesPopular() {
      dispatch({ type: "tvpopular/loading" });
      getTvSeriesPopular()
        .then((data) =>
          dispatch({
            type: "tvpopular/loaded",
            payload: data?.results.slice(0, 14),
          }),
        )
        .catch((err) =>
          dispatch({ type: "tvpopular/rejected", payload: err.message }),
        );
      getTvSeriesTopRated()
        .then((data) =>
          dispatch({
            type: "tvTopRated/loaded",
            payload: data?.results.slice(0, 14),
          }),
        )
        .catch((err) =>
          dispatch({ type: "tvTopRated/rejected", payload: err.message }),
        );
    }
    tvSeriesPopular();
  }, []);
  return (
    <MovieContext.Provider
      value={{
        trending,
        details,
        trailer,
        credits,
        genres,
        popularMovies,
        upComingMovies,
        tvpopular,
        tvTopRated,
        heroMovie,
        topMovie,
        bookmarks,
        bookmarksMovieIds,
        setBookmarks,
        handleBookMarkBtn,
        setTopMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export { MovieProvider, MovieContext };
