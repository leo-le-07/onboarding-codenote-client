import {LOG_IN} from '../actions/authenticate';
const initialState = {
  isAuthenticated: false,
};

export default function authenticate(state = initialState, action) { 
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isAuthenticated: action.isLogin,
      };
    default:
      return state;
  }
};
