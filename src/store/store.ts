import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';

import { IFilms } from "./reducers/type";
import rootReducer from "./rootReducer";
import {  watchFetchFilms } from "./sagas";

const SagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(SagaMiddleware)));

SagaMiddleware.run(watchFetchFilms);

interface IStore {
    addFilmsReducer: IFilms
}
export type RootState = IStore;
export default store;
