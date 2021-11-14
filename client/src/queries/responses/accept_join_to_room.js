export default function accept_join_to_room(socket) {
  return function (fun) {
    socket.on("accept_join_to_room", (data) => {
      fun(data);
    });
  };
}
