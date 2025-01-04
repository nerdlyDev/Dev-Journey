const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

// Allow all origins with CORS
app.use(cors({
    origin: '*', // Allow all origins
    methods: ['GET', 'POST'], // Specify allowed HTTP methods
}));

const io = new Server(server, {
    cors: {
        origin: '*', // Allow all origins for WebSocket
        methods: ['GET', 'POST'], // Specify allowed HTTP methods
    },
});

app.get('/', (req, res) => {
    res.send('WebSocket server is running');
});

io.on('connection', (socket) => {
    console.log('A user connected');

    // Listen for messages from the client
    socket.on('message', (msg) => {
        console.log(`Message received: ${msg}`);

        // Emit the user's message to the client
        socket.emit('message', { sender: 'user', text: msg });

        // Create a prebuilt server response
        const serverResponse = `Server says: You said "${msg}"`;

        // Emit the server's response
        socket.emit('message', { sender: 'server', text: serverResponse });
    });

    socket.disconnect();
    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
    
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
