export const GET_POKEMON_ID = 'prueba-runa/Info/GET_POKEMON_ID';
export const GET_POKEMON = 'prueba-runa/Info/GET_POKEMON';

const initialState = {
  info: [],
}

export default function reducer(state = initialState, action){
  switch (action.type) {
    case GET_POKEMON_ID:
      return state
    case GET_POKEMON:
      state.info = action.payload;
      return {...state}
    default:
      return state;
  }
}

export function getPokemonId(payload){
  return{
    type: GET_POKEMON_ID,
    payload,
  }
}

export function getPokemon(payload){
  return{
    type: GET_POKEMON,
    payload,
  }
}
