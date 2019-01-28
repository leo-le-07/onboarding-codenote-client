import { actionTypes } from '../actions/authenticate';

interface IStates {
  isAuthenticated: boolean,
}

interface IActions {
  type: string,
  payload: Object,
}

const initialState = {
  isAuthenticated: false,
};

export default function authenticate(state: IStates = initialState, action: IActions) {
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
