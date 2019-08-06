export const LOG_IN = "LOG_IN";

export function userHasAuthenticated (val) {
    return {
      type: LOG_IN,
      isLogin: val
    }
}