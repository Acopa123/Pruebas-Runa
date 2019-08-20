import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import home from './home';
import region from './region';
import info from './info';

const reducer = combineReducers({
  home,
  region,
  info,
  forms: formReducer,
});

export default reducer;
