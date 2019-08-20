import { put, call, takeLatest, fork } from 'redux-saga/effects';
import  request  from '../api';
import { getRegions } from '../modules/home';
import { GET_REGION_ID, getRegion } from '../modules/region';
import { GET_POKEMON_ID, getPokemon } from '../modules/info';

const api = 'https://pokeapi.co/api/v2';

function* pokemonRegions(){
  const apiResponse = yield call(request, `${api}/region`);
  apiResponse.results.pop()
  yield put(getRegions(apiResponse));
}

function* pokemonRegion(data){
  const apiResponse = yield call(request, `${api}/region/${data.payload}`);
  let pokedex = apiResponse.pokedexes[0] && apiResponse.pokedexes[0].url
  const apiPokedex = yield call(request, pokedex);

  yield put(getRegion(apiPokedex));
}

function* pokemon(data){
  const pokemonSpecies = yield call(request, `${api}/pokemon-species/${data.payload}`);
  const pokemon = yield call(request, `${api}/pokemon/${data.payload}`);
  let descriptions = pokemonSpecies.flavor_text_entries.filter( description => description.language.name === 'es')
  let pokemonDescription = {
    name: pokemon.species.name,
    generation: pokemonSpecies.generation.name,
    description: descriptions,
    images: pokemon.sprites
  }

  yield put(getPokemon(pokemonDescription));
}

export default function* rootSaga(){
  yield fork(pokemonRegions)
  yield takeLatest(GET_REGION_ID, pokemonRegion)
  yield takeLatest(GET_POKEMON_ID, pokemon)
}
