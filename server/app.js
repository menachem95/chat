import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "http://localhost/3000" } });

io.on("connection", (socket) => {
  console.log("user connected" , socket.id);

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  })
});

server.listen(8080, () => {
  console.log("listening on 8080");
});
