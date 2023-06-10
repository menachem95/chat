import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";
import cors from "cors";
import http from "http";
import bodyParser from "body-parser";

import loginRoute from "./routes/loginRoute.js"

// const httpServer = createServer();
// const io = new Server(httpServer, {
//   cors: {
//     origin: "*",
//   },
//   methods: ["GET", "POST"],
// });

const app = express();
app.use(cors());
app.use(bodyParser.json());
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*", methods: ["GET", "POST"] } });

io.on("connection", (socket) => {
  console.log("user connected", socket.id);

  socket.on("send-message", (data) => {
    console.log(data.message);
    io.emit("receive-message", data);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});

app.use("/login", loginRoute)


// httpServer.listen("8080");

server.listen(8080, () => {
  console.log("listening on 8080");
});
