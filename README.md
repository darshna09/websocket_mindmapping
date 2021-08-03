# Web Socket

A live connection between server and client.
```
|--------------------|                             |--------------------|
|                    | --------- PING -----------> |                    |
|       SERVER       |                             |       CLIENT       |
|                    | <-------- PONG ------------ |                    |
|--------------------|                             |--------------------|
```

## Objective

In this project we are creating a [web socket](https://www.npmjs.com/package/ws) server using Node JS and a client to implement the [WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API). The steps are as follows:
1. From the client to the server: Open web socket connection. Send PONG.
2. In the server when connection is established send PING to the client.
3. From the server at interval of 4 seconds keep sending PING to the client.
4. After 10 seconds close the web socket connection from the client.

## Dev Setup
Setup the project
```
npm install
```
Open one terminal and start the server (Node JS)
```
node server
```
For client you can either use your own project or run the following in the terminal.
```
node client
```

## References
- [Simple Websocket Example with Nodejs](https://www.js-tutorials.com/nodejs-tutorial/simple-websocket-example-with-nodejs/)