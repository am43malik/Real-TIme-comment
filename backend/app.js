const express = require("express");
const app = express();
app.use(express.json());
const { Server } = require("socket.io");

const server = app.listen(3002, () => {
  console.log("app listning on 3002");
});
let io = new Server(server);

io.on("connection", (socket) => {
  socket.on("comment", (data) => {
    socket.broadcast.emit("comment", data);
  });
});
