import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import home from './home';
import region from './region';

const reducer = combineReducers({
  home,
  region,
  forms: formReducer,
});

export default reducer;
