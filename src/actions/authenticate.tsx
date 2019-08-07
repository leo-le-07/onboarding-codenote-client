export const LOGIN = "LOGIN";

export function userHasAuthenticated (val) {
    return {
      type: LOGIN,
      isLogin: val
    }
}