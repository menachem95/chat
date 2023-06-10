import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";
import cors from "cors";
import http from "http";
import bodyParser from "body-parser";
import mongoose from "mongoose";

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


const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://mem:x7hFAdbBGxgk9dIp@cluster0.avjb12c.mongodb.net/");
    console.log("connected to mongoDB!");
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});
mongoose.connection.on("connected", () => {
  console.log("MongoDB connected!");
});

server.listen(8080, () => {
  connectDB();
  console.log("listening on 8080");
});
