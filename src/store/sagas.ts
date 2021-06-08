 import { call, put, takeEvery } from 'redux-saga/effects';
import { addFilms, setLoading, setPage } from './actions/actions';
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

    const searchedFilm = yield call(services.searchFilm, payload)
    console.log(searchedFilm);
    yield put(addFilms(searchedFilm))
}

export function* watchFetchFilms(){
   yield takeEvery(FETCH_FILMS, workerFetchFilms)
   yield takeEvery(SEARCH_FILMS, workerSearchFilms)
}

