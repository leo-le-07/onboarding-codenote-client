import { combineReducers } from 'redux';
import authenticate from './authenticate';

export default combineReducers({
  authen: authenticate
});