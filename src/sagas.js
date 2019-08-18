import { put, call, takeLatest } from 'redux-saga/effects';
import  request  from './request';
import { GET_REGIONS, getRegions } from './modules/home';

const api = 'https://pokeapi.co/api/v2';

//  Function to get regions
function* getPokemonRegions(){
  const apiResponse = yield call(request, `${api}/region`);

  yield put(getRegions(apiResponse));
}

export default function* rootSaga(){
  yield [
    takeLatest(GET_REGIONS, getPokemonRegions)
  ]
}
