import express from "express";
import path from "path";
import { Server } from "socket.io";
import {
  ADD_MESSAGE_TO_ROOM,
  ADD_NEW_ROOM,
  GET_ROOM_MESSAGES,
  GET_LAST_ROOM_MESSAGES,
  GET_ROOM_BY_ID,
} from "./src/chatInit.js";

const __dirname = path.resolve(path.dirname(""));
const port = 3001;

const chat_server = express();
const io = new Server(chat_server, {
  cors: {
    origin: "*",
  },
});
const rootFolder = path.join(__dirname, "build");

chat_server.use(express.static(rootFolder));

chat_server.get("/", (req, res) => {
  res.send(rootFolder);
});

const server = chat_server.listen(port, () => {
  console.log({ port: port });
});
