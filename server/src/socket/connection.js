import set_handlers from "./root_handler.js";

const init = function (io) {
  io.on("connection", (socket) => {
    set_handlers(io, socket);
  });
};

export default init;
