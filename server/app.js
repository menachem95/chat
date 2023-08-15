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
import User from "./models/User.js";
import Message from "./models/Message.js";
const { ObjectId } = mongoose.Schema.Types;
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

// let users = []

const io = socket(server, {
  cors: { origin: "*", methods: ["GET", "POST"] },
});

io.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on("register", async (userInfo) => {
    try {
      await User.create({
        name: userInfo.name,
        id: socket.id,
      });
      const users = await User.find();

      io.emit("get users", users);
    } catch (err) {
      console.log(err);
      return err;
    }
  });

  socket.on("login", async (name, cb) => {
    const user = await User.findOneAndUpdate(
      { name },
      { online: true, id: socket.id },
      { new: true }
    );
    console.log(user.id)
    const messages = await Message.find({
      $or: [{ from: ObjectId(user._id)  }, { to: ObjectId(user._id) }],
    });
    console.log(messages)
    cb(user, messages);
    // const users = await User.find({"name": { "$ne" : name}});
    const users = await User.find();

    // socket.emit("get user", user);
    io.emit("get users", users);
  });
  socket.on("send message", async (m, cd) => {
    console.log("m:",m);
    const message = await Message.create({
      to: m.to._id,
      from: m.from,
      content: m.content,
    });
    console.log(message);
    cd(message);


    // socket.to(m.to.id).emit("get message", message);
  });

  socket.on("disconnect", async () => {
    await User.findOneAndUpdate({ id: socket.id }, { online: false });
    // console.log("user.online:", user?.online)
    const users = await User.find();

    io.emit("get users", users);
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

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
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
