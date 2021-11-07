export default function add_message_to_room(socket) {
  return function (id, message) {
    socket.emit("add_new_message", { id, message });
  };
}
