import { Server } from "socket.io";

const io = (server) => {
  return new Server(server, {
    cors: {
      origin: "*",
    },
  });
};

export default io;
