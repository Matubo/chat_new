export default function accept_set_username(socket) {
  return function (fun) {
    socket.on("accept_set_username", (data) => {
      console.log("accept_set_username")
      fun(data);
    });
  };
}
