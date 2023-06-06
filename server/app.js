import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("user connected", socket.id);
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
  socket.on("send-message", (socket) => {
    console.log(socket.message);
    io.emit("receive-message", socket)
  });
});

httpServer.listen("8080");

// const app = express();
// app.use(cors());
// const server = http.createServer(app);
// const io = new Server(server, { cors: { origin: "http://localhost/3000", methods: ["GET", "POST"] } });

// server.listen(8080, () => {
//   console.log("listening on 8080");
// });
