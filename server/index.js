import express from "express";
import path from "path";
import init_socket_server from "./src/socket/io.js";

const __dirname = path.resolve(path.dirname(""));
const PORT = 3001;
const ROOT_FOLDER = path.join(__dirname, "build");
const chat_server = express();

chat_server.use(express.static(ROOT_FOLDER));

chat_server.get("/", (req, res) => {
  res.send(ROOT_FOLDER);
});

const app = chat_server.listen(PORT, () => {
  console.log({ port: PORT });
});

init_socket_server(app);