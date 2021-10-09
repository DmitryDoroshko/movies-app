import {MOVIES_FETCH, MoviesAction, MoviesState} from "../types/moviesTypes";

const initialState: MoviesState = {
    currentName: "",
    currentPlot: "",
    currentYear: "",
    error: null,
    fetching: false,
    loading: false,
    movieSelected: null,
    movies: [],
    moviesAll: [],
    moviesSortedAscending: [],
    moviesSortedDescending: [],
};

export default (state= initialState, action: MoviesAction): MoviesState => {
    switch (action.type) {
        case MOVIES_FETCH:
            return {...state, loading: true};

        default:
            return state;
    }
}