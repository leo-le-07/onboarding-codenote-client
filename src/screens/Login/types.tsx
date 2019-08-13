export interface LoginState {
  email: string;
  password: string;
  isLoading: boolean;
}

export interface LoginProps {
  userHasAuthenticated(isUserAuthenticated: boolean);
}