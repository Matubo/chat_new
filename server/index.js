import express from "express";
import path from "path";
import init_socket_server from "./src/socket_query/socket_queries.js";
import {
  ADD_MESSAGE_TO_ROOM,
  ADD_NEW_ROOM,
  GET_ROOM_MESSAGES,
  GET_LAST_ROOM_MESSAGES,
  GET_ROOM_BY_ID,
} from "./src/chatInit.js";

const __dirname = path.resolve(path.dirname(""));
const port = 3001;
const rootFolder = path.join(__dirname, "build");
const chat_server = express();

chat_server.use(express.static(rootFolder));

chat_server.get("/", (req, res) => {
  res.send(rootFolder);
});

chat_server.listen(port, () => {
  console.log({ port: port });
});

init_socket_server(chat_server);
