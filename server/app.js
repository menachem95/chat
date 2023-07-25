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
  console.log(`⚡: ${socket.id} user just connected!`);
 socket.on("login", (userinfo) => {
  // console.log(userinfo);
  users.push(userinfo)
  console.log("users",users);
  io.emit("get users", users)
 })
  socket.on("send message", (message) => {
    console.log(`message:`, message)
    socket.to(message.to).emit("get message", message);
  // socket.emit("get message", message);

  })
 

  socket.on('disconnect', () => {
    users = users.filter(user => user.id !== socket.id)
    console.log("users",users);
    io.emit("get users", users)
    console.log(`🔥: ${socket.id} user disconnected`);
  });
});

// app.use((req, res, next) => {
//   req.io = io;
//   next();
// })

// app.use("/user", userManagement);
// app.use("/group", groupManagement);

// httpServer.listen("8080");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(
//       process.env.MONGO_URI
//     );
//     console.log("connected to mongoDB!");
//   } catch (error) {
//     throw error;
//   }
// };
// mongoose.connection.on("disconnected", () => {
//   console.log("MongoDB disconnected!");
// });
// mongoose.connection.on("connected", () => {
//   console.log("MongoDB connected!");
// });

server.listen(8080,  () =>  {
  //  connectDB();
  console.log("listening on 8080");
});
