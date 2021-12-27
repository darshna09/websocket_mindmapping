const WebSocket = require("ws");
const url = "ws://localhost:8080";
const connection = new WebSocket(url);

let introduceStop;

connection.onopen = () => {
  // After connection opens send message to server.
  connection.send("CLIENT: PONG");

  // After 10 seconds close web socket connection.
  introduceStop = setTimeout(function () {
    console.log(
      `${new Date().toLocaleTimeString()} Client closing WebSocket connection`
    );
    connection.close();
  }, 10000);
};

// Catch error while web socket connection is open.
// After `onerror`, `onclose` will be triggered.
connection.onerror = (error) => {
  console.log(`Web socket error: ${error}`);
};

// Keep reading messages from server.
connection.onmessage = (event) => {
  console.log(`${new Date().toLocaleTimeString()} ${event.data}`);
};

// Clear things once web socket connection is closed.
connection.onclose = () => {
  clearTimeout(introduceStop);
  console.log(`${new Date().toLocaleTimeString()} WebSocket connection closed.`);
};
