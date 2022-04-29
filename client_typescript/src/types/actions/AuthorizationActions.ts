export enum AuthorizationActionTypes {
  LOG_IN = "LOGIN",
  LOG_OUT = "LOG_OUT",
}

interface LogInAction {
  type: AuthorizationActionTypes.LOG_IN;
  payload: {username:string}
}
interface LogOutAction {
  type: AuthorizationActionTypes.LOG_OUT;
}

export type AuthorizationAction = LogInAction | LogOutAction;
