const WebSocket = require("ws");
const url = "ws://localhost:8080";
const connection = new WebSocket(url);
let introduceStop;

connection.onopen = () => {
    connection.send("FROM CLIENT TO SERVER: PONG.");
    introduceStop = setTimeout(function() {
        console.log("INSIDE CLIENT: Closing web socket connection")
        connection.close();
    }, 10000);
}

connection.onerror = error => {
    console.log(`INSIDE CLIENT: Web socket error: ${error}`);
}

connection.onmessage = event => {
    console.log(event.data);
}

connection.onclose = () => {
    clearTimeout(introduceStop);
    console.log("INSIDE CLIENT: Web Socket connection properly closed.");
}
