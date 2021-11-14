export default function new_room_message(socket) {
  return function (fun) {
    socket.on("new_room_message", (data) => {
      fun(data);
    });
  };
}
