import {
  ADD_MESSAGE_TO_ROOM,
  ADD_NEW_ROOM,
  GET_ROOM_MESSAGES,
  GET_LAST_ROOM_MESSAGES,
  GET_ROOM_BY_ID,
} from "../chatInit.js";

function handlers(io, socket) {
  socket.on("set_username", (data) => {
    console.log("set_user", data);
    const { username } = data;
    if (username != "") {
      socket.username = username;
      socket.emit("accept_set_username", {
        status: true,
        username: socket.username,
      }); //--
      console.log("accept_set_user");
    }
  });

  socket.on("join_to_room", (data) => {
    const { id } = data;
    console.log("join_to_room", data);
    let result = GET_ROOM_BY_ID({ id });
    if (result.status) {
      socket.join(result.room);
      socket.emit("accept_join_to_room", result.room); //--
      console.log("accept_join_to_room", result);
    }
  });

  socket.on("create_room", () => {
    console.log("create_room");
    let result = ADD_NEW_ROOM();
    if (result.status) {
      socket.join(result.room);
      socket.emit("accept_join_to_room", result); //--
      console.log("accept_create_room", result);
    }
  });

  socket.on("add_new_message", (data) => {
    const { id, message } = data;
    console.log("new_message_on_room", data);
    console.log(id, message, socket.username);
    let result = ADD_MESSAGE_TO_ROOM({
      id,
      username: socket.username,
      message,
    });
    console.log(result);
    if (result.status) {
      io.to(result.room).emit("new_room_message", {
        status: true,
        message: result.message,
        id: result.id,
      });
      console.log("accept_new_message_room", {
        status: true,
        message: result.message,
        id: result.id,
      });
    }
  });

  socket.on("get_last_messages", (data) => {
    const { id, loaded_count } = data;
    let result = GET_LAST_ROOM_MESSAGES({ id, loaded_count }); //download_count - количество на клиенте а не количество загружаемых
    if (result.status) {
      socket.emit("get_last_messages", result);
    }
  });
}

export default handlers;
