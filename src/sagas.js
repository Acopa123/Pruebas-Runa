import { put, call, fork } from 'redux-saga/effects';
import  request  from './api';
import { getRegions } from './modules/home';

const api = 'https://pokeapi.co/api/v2';

function* pokemonRegions(){
  const apiResponse = yield call(request, `${api}/region`);

  yield put(getRegions(apiResponse));
}

export default function* rootSaga(){
  yield fork(pokemonRegions)
}
