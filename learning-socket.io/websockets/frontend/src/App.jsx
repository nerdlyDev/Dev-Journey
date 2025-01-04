import './App.css'
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

function App() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Listen for incoming messages from the server
        socket.on('message', (msg) => {
            setMessages((prev) => [...prev, msg]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const sendMessage = () => {
        if (message.trim()) {
            socket.emit('message', message); // Send message to the server
            setMessage('');
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto', fontFamily: 'Arial' }}>
            <h1>socket.io Chat</h1>
            <div style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '10px',
                height: '400px',
                overflowY: 'scroll',
                marginBottom: '10px',
            }}>
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                            margin: '5px 0',
                        }}
                    >
                        <div
                            style={{
                                maxWidth: '70%',
                                padding: '10px',
                                borderRadius: '10px',
                                backgroundColor: msg.sender === 'user' ? '#d1f7c4' : '#f1f1f1',
                                textAlign: msg.sender === 'user' ? 'right' : 'left',
                            }}
                        >
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex' }}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{
                        flex: 1,
                        padding: '10px',
                        borderRadius: '8px',
                        border: '1px solid #ccc',
                        marginRight: '10px',
                    }}
                />
                <button
                    onClick={sendMessage}
                    style={{
                        padding: '10px 20px',
                        borderRadius: '8px',
                        border: 'none',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        cursor: 'pointer',
                    }}
                >
                    Send
                </button>
            </div>
        </div>
    );
}

export default App;
