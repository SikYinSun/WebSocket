import express from 'express';
import { setupWebSocket } from './websocket.js'; 
import apiRouter from './api.js'; 

const app = express();
const API_PORT = 3000;
const WS_PORT = 8080;

// Middleware for parsing JSON (needed for POST/PUT requests)
app.use(express.json());

// Use the API routes
app.use('/api', apiRouter);

// Start the REST API server
app.listen(API_PORT, () => {
    console.log(`REST API is running on http://localhost:${API_PORT}`);
});

// Start the WebSocket server on a separate port
setupWebSocket(WS_PORT);
