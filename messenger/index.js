const express = require('express');
const ws = require('ws')
const http = require('http')

const app = express();

app.get('/websocket/name', (req, res) => {
  res.send('Hello');
});

const httpServer = http.createServer(app);


const websocket = new ws.Server({server: httpServer});

websocket.on('open', () => {
  console.log('Connected to WS Server')
})

websocket.on('connection', (socket) => {

  socket.on('close', () => {
    console.log('Connection Closed!');
  });

  socket.on('message', (data) => {
    console.log('Message Received!')
  });
});

httpServer.listen(3000, () => {
  console.log('WebSocket HttpServer running on port 3000');
});