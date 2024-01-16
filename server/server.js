const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const port = process.env.PORT || 3001;

app.use(
  cors({
    origin: "http://localhost:3000", // Replace with the actual origin of your client application
  })
);

io.on("connection", (socket) => {
  console.log("a user connected");
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
