const initialState = {
  rooms: new Map(),
  current_room: null,
};

export default function chat_rooms(state = initialState, action) {
  switch (action.type) {
    case "ADD_ROOM":
      return {
        rooms: state.rooms.set(
          action.new_room.id,
          action.new_room
        ) /* [...state.rooms, action.new_room] */,
        current_room: state.current_room,
      };
    case "CHANGE_ROOM":
      return { rooms: state.rooms, current_room: action.new_current_room };
    case "SET_NEW_MESSAGES":
      return { rooms: action.rooms, current_room: action.current_room };
    default:
      return state;
  }
}
