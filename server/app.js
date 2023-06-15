import { createServer } from "http";
import socket from "socket.io";
import express from "express";
import cors from "cors";
import http from "http";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userManagement from "./routes/userManagement.js";
import groupManagement from "./routes/groupManagement.js";

// const httpServer = createServer();
// const io = new Server(httpServer, {
//   cors: {
//     origin: "*",
//   },
//   methods: ["GET", "POST"],
// });

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
const server = http.createServer(app);

let users = []

const io = socket(server, {
  cors: { origin: "*", methods: ["GET", "POST"] },
});

io.on("connection", (socket) => {
  console.log("user connected", socket.id);

  socket.on("login", (data) => {
    const user = {id: socket.id}
    users.push(user);
    console.log(users)
    console.log("login", data);
    io.emit("get users", users)
  })

  socket.on("send-message", (data) => {
    console.log(data.message);
    io.emit("receive-message", data);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});

// app.use((req, res, next) => {
//   req.io = io;
//   next();
// })

app.use("/user", userManagement);
app.use("/group", groupManagement);

// httpServer.listen("8080");

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI
    );
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

server.listen(8080,  () =>  {
   connectDB();
  console.log("listening on 8080");
});
