import {
    Movies, MOVIES_ARE_LOADING,
    MOVIES_FETCH,
    MOVIES_FETCH_ERROR,
    MOVIES_FETCH_PENDING,
    MOVIES_FETCH_SUCCESS, MOVIES_HAVE_BEEN_LOADED, MOVIES_SHOW_ALL, MOVIES_SORT_ASCENDING, MOVIES_SORT_DESCENDING,
    MoviesAction
} from "../types/moviesTypes";


export const fetchMovies = (url: string): MoviesAction => {
    return {
        type: MOVIES_FETCH,
        payload: {
            url
        }
    };
}

export const moviesFetchSuccess = (movies: Movies): MoviesAction => {
    return {
        type: MOVIES_FETCH_SUCCESS,
        payload: {
            movies
        }
    }
}

export const moviesFetchError = (error: string): MoviesAction => {
    return {
        type: MOVIES_FETCH_ERROR,
        payload: {
            error
        }
    }
}

export const moviesAreLoading = (loading: boolean): MoviesAction => {
    return {
        type: MOVIES_ARE_LOADING,
        payload: {
            loading
        }
    }
}

export const moviesHaveBeenLoaded = (loading: boolean): MoviesAction => {
    return {
        type: MOVIES_HAVE_BEEN_LOADED,
        payload: {
            loading
        }
    }
}

export const moviesShowAll = (movies: Movies): MoviesAction => {
    return {
        type: MOVIES_SHOW_ALL,
        payload: {
            movies
        }
    }
}

export const moviesSortedAscending = (movies: Movies): MoviesAction => {
    return {
        type: MOVIES_SORT_ASCENDING,
        payload: {
            movies
        }
    }
}

export const moviesSortedDescending = (movies: Movies): MoviesAction => {
    return {
        type: MOVIES_SORT_DESCENDING,
        payload: {
            movies
        }
    }
}



