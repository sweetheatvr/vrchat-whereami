// Import required libraries
const WebSocketClient = require('websocket').client;
const { Server } = require("socket.io");
const http = require('http');
const express = require('express');

// Set the URL for the VRChat WebSocket server
const base_websocket_url = "wss://pipeline.vrchat.cloud/?authtoken=";

// Create an Express app, HTTP server, and Socket.IO server
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Set an initial world name
let world = "this is a placeholder world name";

// Serve index.html when someone accesses the root
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

// When a client connects to the Socket.IO server, send the current world name
io.on('connection', socket => io.emit("world-received", world));

// Start the server on port 3000
server.listen(3000, () => console.log('listening on *:3000'));

// Create a WebSocket client for the VRChat WebSocket server
const vrchatClient = new WebSocketClient();

// When the WebSocket client connects, listen for messages
vrchatClient.on('connect', vrcConnection => vrcConnection.on('message', result => {
  // Parse the message as JSON
  if (result.type === 'utf8') {
    const json = JSON.parse(result.utf8Data);
    // If the message is about the user's location, update the world name and send it to the Socket.IO server
    if (json.type === "user-location") {
      world = json.content.substring(json.content.indexOf('"name":')+8,json.content.indexOf('","description"'));
      io.emit('world-received', world);
    }
  }
}));

// Connect to the VRChat WebSocket server using an authentication token
vrchatClient.connect(base_websocket_url + process.argv[2], null, null, { 'User-Agent': 'Mozilla/5.0' }, null);