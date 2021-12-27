const WebSocket = require("ws");

// Create a web socket connection at port 8080.
// This is where the client will keep listening to.
const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
  ws.send("SERVER: Connection established");

  function pingClient() {
    ws.send("SERVER: PING");
  }

  // Keep pinging the client every 4 seconds.
  const ping = setInterval(pingClient, 4000);

  // Listen to the message coming from client.
  ws.on("message", (message) => {
    console.log(`${new Date().toLocaleTimeString()} ${message}`);
  });

  // Clearing up when client closes web socket connection
  ws.on("close", () => {
    clearInterval(ping);
    console.log(`${new Date().toLocaleTimeString()} Connection closed.`);
  });
});
