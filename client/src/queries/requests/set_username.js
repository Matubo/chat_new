export default function set_username(socket) {
  return function (username) {
    socket.emit("set_username", { username });
  };
}
