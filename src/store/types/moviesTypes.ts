export const MOVIES_FETCH: string = "MOVIES/MOVIES_FETCH";
export const MOVIES_FETCH_PENDING: string = "MOVIES/MOVIES_FETCH_PENDING";
export const MOVIES_FETCH_SUCCESS: string = "MOVIES/MOVIES_FETCHED_SUCCESS";
export const MOVIES_FETCH_ERROR: string = "MOVIES/MOVIES_FETCH_ERROR";

export const MOVIES_ARE_LOADING: string = "MOVIES/MOVIES_ARE_LOADING";
export const MOVIES_HAVE_BEEN_LOADED: string = "MOVIES/MOVIES_HAVE_BEEN_LOADED";

export const MOVIES_SORT_ASCENDING: string = "MOVIES/MOVIES_SORT_ASCENDING";
export const MOVIES_SORT_DESCENDING: string = "MOVIES/MOVIES_SORT_DESCENDING";
export const MOVIES_SHOW_ALL: string = "MOVIES/MOVIES_SHOW_ALL";

export interface Movie {
    id: string;
    title: string;
    year: string;
    rated: string;
    releaseDate: string;
    runtime: string;
    genre: string;
    director: string;
}

export interface Movies {
    movies: Movie[];
}

// Actions
interface FetchMoviesAction {
    type: typeof MOVIES_FETCH;
    payload: {
        url: string;
    }
}

interface MoviesFetchSuccessAction {
    type: typeof MOVIES_FETCH_SUCCESS;
    payload: {
        movies: Movies;
    };
}

interface MoviesFetchErrorAction {
    type: typeof MOVIES_FETCH_ERROR;
    payload: {
        error: string;
    }
}

interface MoviesAreLoadingAction {
    type: typeof MOVIES_ARE_LOADING;
    payload: {
        loading: boolean;
    }
}

interface MoviesHaveBeenLoadedAction {
    type: typeof MOVIES_HAVE_BEEN_LOADED;
    payload: {
        loading: boolean;
    }
}

interface MoviesShowAllAction {
    type: typeof MOVIES_SHOW_ALL;
    payload: {
        movies: Movies;
    }
}

interface MoviesSortAscendingAction {
    type: typeof MOVIES_SORT_ASCENDING;
    payload: {
        movies: Movies;
    }
}

interface MoviesSortDescendingAction {
    type: typeof MOVIES_SORT_DESCENDING;
    payload: {
        movies: Movies;
    }
}

export type MoviesAction = FetchMoviesAction
    | MoviesFetchSuccessAction
    | MoviesFetchErrorAction
    | MoviesAreLoadingAction
    | MoviesHaveBeenLoadedAction
    | MoviesShowAllAction
    | MoviesSortAscendingAction
    | MoviesSortDescendingAction;


export interface MoviesState {
    movies: Movies | [];
    moviesAll: Movies | [];
    moviesSortedAscending: Movies | [];
    moviesSortedDescending: Movies | [];
    movieSelected: Movie | null;
    currentName: string | null;
    currentYear: string | null;
    currentPlot: string | null;
    error: string | null;
    loading: boolean | null;
    fetching: boolean | null;
}


