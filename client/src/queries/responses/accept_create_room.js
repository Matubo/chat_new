export default function accept_create_room(socket) {
  return function (fun) {
    socket.on("accept_create_room", (data) => {
      fun(data);
    });
  };
}
