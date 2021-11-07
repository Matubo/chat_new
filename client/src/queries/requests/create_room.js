export default function create_room(socket) {
  return function () {
    socket.emit("create_room");
  };
}
