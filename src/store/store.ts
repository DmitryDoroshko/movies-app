import moviesReducer from "./reducers/moviesReducer";
import {applyMiddleware, createStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {composeWithDevTools} from "redux-devtools-extension";
import {sagaWatcher} from "./rootSaga";

const saga = createSagaMiddleware();
export const store =  createStore(moviesReducer, composeWithDevTools(applyMiddleware(saga)));

saga.run(sagaWatcher);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;