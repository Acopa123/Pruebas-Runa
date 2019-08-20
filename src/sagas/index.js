import { put, call, takeLatest, fork } from 'redux-saga/effects';
import  request  from '../api';
import { getRegions } from '../modules/home';
import { GET_REGION_ID, getRegion } from '../modules/region';

const api = 'https://pokeapi.co/api/v2';
// https://pokeapi.co/api/v2/pokedex/2/

function* pokemonRegions(){
  const apiResponse = yield call(request, `${api}/region`);

  yield put(getRegions(apiResponse));
}

function* pokemonRegion(data){
  const apiResponse = yield call(request, `${api}/region/${data.payload}`);
  let pokedex = apiResponse.pokedexes[0] && apiResponse.pokedexes[0].url
  const apiPokedex = yield call(request, pokedex);

  yield put(getRegion(apiPokedex));
}

export default function* rootSaga(){
  yield fork(pokemonRegions)
  yield takeLatest(GET_REGION_ID, pokemonRegion)
}
