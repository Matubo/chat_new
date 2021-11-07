export default function join_to_room(socket) {
  return function (id) {
    socket.emit("join_to_room", { id });
  };
}
