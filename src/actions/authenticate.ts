import { createAction } from 'redux-actions';

export const actionTypes = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
};

export const userHasAuthenticated = createAction(actionTypes.LOGIN_SUCCESS);
