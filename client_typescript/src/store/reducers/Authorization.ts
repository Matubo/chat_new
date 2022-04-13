import {
  AuthorizationActionTypes,
  AuthorizationAction,
} from "../../types/actions/AuthorizationActions";
import { IAuthorization } from "../../types/states/AuthorizationTypes";

const initialState: IAuthorization = {
  authorized: false,
  userName: null,
};

export const authorizationReducer = (
  state = initialState,
  action: AuthorizationAction
): IAuthorization => {
  switch (action.type) {
    case AuthorizationActionTypes.LOG_IN:
      return {
        authorized: true,
        userName: action.payload,
      };
    case AuthorizationActionTypes.LOG_OUT:
      return {
        authorized: false,
        userName: null,
      };
    default:
      return state;
  }
};
