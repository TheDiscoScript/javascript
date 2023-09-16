import WebSocket from "ws";
import express from "express";
import http from "http";
import bodyParser from "body-parser";

const port = (process?.env?.PORT ?? 8080) as number;

const app = express();
const httpServer = http.createServer(app);
const wss = new WebSocket.Server({ server: httpServer });

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Set up WebSocket server events
wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    console.log(`Received message: ${message}`);
  });

  ws.send("Hello from WebSocket server!");
});

// Set up Express routes
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.post("/send", (req, res) => {
  const message = req.body.message || "Default message from Express";

  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });

  res.send(`Message '${message}' sent to all WebSocket clients!`);
});

app.post("/send100", (req, res) => {
  const message = req.body.message || "Default message from Express";

  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      for (let i = 0; i < 100; i++) {
        client.send(`${message} - ${i}`);
      }
    }
  });

  res.send(`Message '${message}' sent to all WebSocket clients!`);
});

httpServer.listen(port, () => {
  console.log(`HTTP & WebSocket server running on http://localhost:${port}`);
});
