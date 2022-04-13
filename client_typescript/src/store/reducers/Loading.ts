import {
  LoadingActions,
  LoadingActionsTypes,
} from "../../types/actions/LoadingActions";
import { ILoading } from "../../types/states/LoadingTypes";

const initialState: ILoading = {
  loading: false,
  error: null,
};

export const loadingReducer = (
  state = initialState,
  action: LoadingActions
): ILoading => {
  switch (action.type) {
    case LoadingActionsTypes.START_LOADING:
      return { ...state, loading: true };
    case LoadingActionsTypes.FINISH_LOADING:
      return {
        ...state,
        loading: false,
      };
    case LoadingActionsTypes.LOADING_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
