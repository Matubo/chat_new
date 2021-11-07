const initialState = {
  loading: false,
  error: false,
  error_message: null,
};

export default function loading(state = initialState, action) {
  switch (action.type) {
    case "START_LOADING":
      return { loading: true, error: false, error_message: null };
    case "FINISH_LOADING":
      return { loading: false, error: false, error_message: null };
    case "ERROR":
      return {
        loading: false,
        error: true,
        error_message: action.error_message,
      };
    default:
      return state;
  }
}
