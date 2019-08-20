export const GET_REGION_ID = 'prueba-runa/Home/GET_REGION_ID';
export const GET_REGION = 'prueba-runa/Home/GET_REGION';

const initialState = {
  region: [],
}

export default function reducer(state = initialState, action){
  switch (action.type) {
    case GET_REGION_ID:
      return state
    case GET_REGION:
      state.region = action.payload;
      return {...state}
    default:
      return state;
  }
}

export function getRegionId(payload){
  return{
    type: GET_REGION_ID,
    payload,
  }
}

export function getRegion(payload){
  return{
    type: GET_REGION,
    payload,
  }
}
