import { all, takeEvery, put, call } from "redux-saga/effects";
import {SagaIterator} from "redux-saga";

export function* rootSaga() {
    yield all([sagaWatcher]);
}

export function* sagaWatcher(): SagaIterator {

}

function* sagaWorker(): SagaIterator {

}


