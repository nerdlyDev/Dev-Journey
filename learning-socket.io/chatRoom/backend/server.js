const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: '*', // Allow all origins
        methods: ['GET', 'POST'],
    },
});

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for messages
let messages = [];

// HTTP Polling Endpoint
// app.get('/poll-messages', (req, res) => {
//     res.json(messages);
// });

// WebSocket Connection
io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    // Send existing messages to the new user
    socket.emit('init', messages);

    // Listen for new messages
    socket.on('chat message', (msg) => {
        messages.push(msg); // Save the message in memory
        io.emit('chat message', msg); // Broadcast the message to all clients
    });

    // Handle user disconnect
    socket.on('disconnect-user', (username) => {
      
        console.log(`User ${username || 'unknown'} disconnected: ${socket.id}`);
        socket.emit('disconnect-confirmation', `Goodbye, ${username || 'user'}!`);
    });

    // socket.on('disconnect', () => {
    //     console.log(`Socket disconnected: ${socket.id}`);
    // });
});

// io.on('disconnect', () => {
//   console.log(`Socket disconnected: ${socket.id}`);
// });

// Start the server
const PORT = 5000;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
