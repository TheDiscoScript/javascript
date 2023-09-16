import WebSocket from "ws";

const wsUrl = "ws://0.0.0.0:8080";

const numberOfClients = 5;

for (let j = 0; j < numberOfClients; j++) {
  const ws = new WebSocket(wsUrl);

  ws.on("open", () => {
    console.log(`Client ${j} connected to the WebSocket server`);
    ws.send(`Hello WebSocket server from client ${j}!`);

    const x = 10; // Sending fewer messages for clarity
    for (let i = 0; i < x; i++) {
      ws.send(`Client ${j} says: Hello WebSocket server! - ${i}`);
    }
  });

  ws.on("message", (data: WebSocket.Data) => {
    console.log(`Client ${j} received: ${data}`);
  });
}
