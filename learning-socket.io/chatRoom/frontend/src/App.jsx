import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';

// Connect to the backend
const socket = io('http://localhost:5000');

function App() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Fetch initial messages with HTTP Polling
        // axios.get('http://localhost:5000/poll-messages').then((res) => {
        //     setMessages(res.data);
        // });

        // Listen for WebSocket events
        socket.on('init', (msgs) => {
            setMessages(msgs);
        });

        socket.on('chat message', (msg) => {
            setMessages((prev) => [...prev, msg]);
        });

        // Handle disconnect confirmation from backend
        socket.on('disconnect-confirmation', (message) => {
            console.log(message);
        });

        // Cleanup on component unmount or tab close
        return () => {
            socket.emit('disconnect-user', username);
            socket.disconnect();
        };
    }, [username]);

    const sendMessage = () => {
        if (message.trim() && username.trim()) {
            const msg = { username, text: message };
            socket.emit('chat message', msg); // Send message to the backend
            setMessage('');
        }
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`flex ${
                            msg.username === username ? 'justify-end' : 'justify-start'
                        }`}
                    >
                        <div
                            className={`max-w-xs px-4 py-2 rounded-lg shadow ${
                                msg.username === username
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-300 text-black'
                            }`}
                        >
                            <strong>{msg.username === username ? 'You' : msg.username}:</strong>{' '}
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>
            <div className="p-4 bg-white flex">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border p-2 flex-1 mr-2"
                />
                <input
                    type="text"
                    placeholder="Type a message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border p-2 flex-1 mr-2"
                />
                <button
                    onClick={sendMessage}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Send
                </button>
            </div>
        </div>
    );
}

export default App;
