import global from './global';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  global: global
})

export default reducer;