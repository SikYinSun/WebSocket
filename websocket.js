import { WebSocketServer } from "ws";

export function setupWebSocket(port) {
  // Create WebSocket server
    const wss = new WebSocketServer({ port });

    wss.on('connection', (ws) => {
        console.log('New client connected');

        // Handle incoming messages from clients
        ws.on('message', (message) => {
            console.log(`Received: ${message}`);

            // Broadcast message to all connected clients
            wss.clients.forEach((client) => {
              // Check if the client is not the sender and is open
                if (client !== ws && client.readyState === ws.OPEN) {
                    client.send(message.toString());
                }
            });
        });

        ws.on('close', () => {
            console.log('WebSocket client disconnected');
        });
    });

    console.log(`WebSocket server is running on ws://localhost:${port}`);
}
