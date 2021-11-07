const initialState = {
  authorized: false,
  userId: null,
};

export default function authorized(state = initialState, action) {
  switch (action.type) {
    case "LOG_IN":
      return { authorized: true, userId: action.userId };
    case "LOG_OUT":
      return { authorized: false, userId: null };
    default:
      return state;
  }
}
