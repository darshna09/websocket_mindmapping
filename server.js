const WebSocket = require("ws");

// Create a web socket connection at port 8080. This is where the client will keep listening to.
const webSocketConnection = new WebSocket.Server({port: 8080});

webSocketConnection.on("connection", ws => {
    ws.send("FROM SERVER TO CLIENT: Connection established");

    function pingClient() {
        ws.send('FROM SERVER TO CLIENT: PING');
    }

    // After connection between the server and the client is established keep pinging the client every 4 seconds.
    const ping = setInterval(pingClient, 4000);

    ws.on("message", message => {
        console.log(`INSIDE SERVER: Received message => ${message}`);
    });

    ws.on("close", () => {
        clearInterval(ping);
        console.log("INSIDE SERVER: Connection closed.");
    });
});