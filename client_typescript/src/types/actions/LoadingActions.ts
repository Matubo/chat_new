export enum LoadingActionsTypes {
  START_LOADING = "START_LOADING",
  FINISH_LOADING = "FINISH_LOADING",
  LOADING_ERROR = "LOADING_ERROR",
}

interface StartLoadingAction {
  type: LoadingActionsTypes.START_LOADING;
}
interface FinishLoadingAction {
  type: LoadingActionsTypes.FINISH_LOADING;
}

interface LoadingErrorAction {
  type: LoadingActionsTypes.LOADING_ERROR;
  payload: string;
}

export type LoadingActions =
  | StartLoadingAction
  | FinishLoadingAction
  | LoadingErrorAction;
