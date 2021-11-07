import { Server } from "socket.io";
import init from "./connection.js";

const init_socket_server = (server) => {
  init(
    new Server(server, {
      cors: {
        origin: "*",
      },
    })
  );
};

export default init_socket_server;
