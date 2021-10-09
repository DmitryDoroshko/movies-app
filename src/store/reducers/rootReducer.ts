import {combineReducers} from "redux";
import moviesReducer from "./moviesReducer";
import sideEffectsReducer from "./sideEffectsReducer";

export const rootReducer = combineReducers({
    movies: moviesReducer,
    sideEffects: sideEffectsReducer,
});