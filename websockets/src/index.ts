import http from "http";
import WebSocket from "ws";

// Create an HTTP server
const server = http.createServer();

// Create a WebSocket server by passing the HTTP server instance
const wss = new WebSocket.Server({ noServer: true });

// Event listener for WebSocket connections
wss.on("connection", (ws: WebSocket, request) => {
  console.log(`Client connected: ${request.url}`);

  // Event listener for incoming messages from clients
  ws.on("message", (data: WebSocket.Data) => {
    console.log(`Received: ${data}`);

    // Broadcast the received message to all connected clients
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });

  // Event listener for client disconnection
  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

// Attach the WebSocket server to the HTTP server
server.on("upgrade", (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit("connection", ws, request);
  });
});

const PORT = process.env.PORT || 3001;

// Start the HTTP server on the specified port
server.listen(PORT, () => {
  console.log(`WebSocket server is listening on port ${PORT}`);
});
