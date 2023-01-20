const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { Server } = require("socket.io");
const dbConnect = require("./db/dbConnect");
const authRouter = require("./router/auth");

app.use(cors());

//* database
dbConnect();

//* middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//* server
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
  });
});

//* endpoint
app.use(authRouter);

server.listen(3001, () => {
  console.log("Server is listening on port 3001");
});
