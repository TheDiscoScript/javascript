import WebSocket from "ws";

const port = (process?.env?.PORT ?? 8080) as number;
const server = new WebSocket.Server({
  host: "0.0.0.0",
  port,
});

server.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    console.log(`Received message: ${message}`);
  });

  ws.send("Hello from WebSocket server!");
});

console.log(`WebSocket server running on ws://localhost:${port}`);
