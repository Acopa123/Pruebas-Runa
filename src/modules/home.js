export const GET_REGIONS = 'prueba-runa/Home/GET_REGIONS';

const initialState = {
  regions: [],
}

export default function reducer(state = initialState, action){
  switch (action.type) {
    case GET_REGIONS:
      state.regions = action.payload;
      return {...state}
    default:
      return state;
  }
}

export function getRegions(payload){
  return{
    type: GET_REGIONS,
    payload,
  }
}
