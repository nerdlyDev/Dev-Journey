const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

// Initialize the app and server
const app = express();
const server = http.createServer(app); // HTTP server using Express

// Configure CORS for the Socket.IO server
const io = new Server(server, {
  cors: {
    origin: "*", // Allow requests from the React app
    methods: ["GET", "POST"],
  },
});

// Middleware to handle CORS
app.use(cors());

// Listen for incoming Socket.IO connections
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // Listen for messages from clients
  socket.on("send_message", (data) => {
    console.log("Message received:", data);

    // Broadcast the message to all connected users
    io.emit("receive_message", data);
  });

  // Handle user disconnection
  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
  });
});

// Start the server
server.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
