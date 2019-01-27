import { actionTypes } from '../actions/authenticate';

const initialState = {
  isAuthenticated: false,
};

export default function authenticate(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    default:
      return state;
  }
};
