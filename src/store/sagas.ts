import { call, put, takeEvery } from 'redux-saga/effects';

import { addFilms, changeError, setLoading, setPage } from './actions/actions';
import { FETCH_FILMS } from './actions/actions';
import { SEARCH_FILMS } from './actions/actions';
import { IAction } from './actions/types';
import services from './services';


function* workerFetchFilms({ payload }: IAction): any {
   yield put(setLoading(true))
   const films = yield call(services.getFilms, payload)
   yield put(addFilms(films))
   yield put(setPage(payload))
   yield put(setLoading(false))
  }
 
export function* workerSearchFilms({payload}: IAction):any {
   try{
      const searchedFilm = yield call(services.searchFilm, payload)
      yield put(addFilms(searchedFilm))
   }
   catch(error){
      yield put(changeError(true))
   }
 
}

export function* watchFetchFilms(){
   yield takeEvery(FETCH_FILMS, workerFetchFilms)
   yield takeEvery(SEARCH_FILMS, workerSearchFilms)
}

