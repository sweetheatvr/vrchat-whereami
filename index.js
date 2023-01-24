/*
    Websocket Application to send current world name to client
*/

//base vrchat websocket url
const base_websocket_url = "wss://pipeline.vrchat.cloud/?authtoken=";

//all the imports
const process = require('process'); //requried to process 
const WebSocketClient = require('websocket').client;
const { Server } = require("socket.io");
const vrchat = require("vrchat");
const http = require('http');

//create new express server
const express = require('express');
const app = express();
const server = http.createServer(app);

var cookie = process.argv;

//create new socket io server nya cool!
const io = new Server(server)

var world = "this is a placeholder world name";

//send index.html to client when we hit our website home
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

//on connection event send world name to client
io.on('connection', (socket) => {
    console.log('user connected to server');
    io.emit("world-received", world);
});

//start doosh server on port 3000
server.listen(3000, () => {
    console.log('listening on *:3000');
});

//Connect to VRCHat websocket
const vrchatClient = new WebSocketClient();
vrchatClient.on('connect', function(vrcConnection) {

    console.log('VRChat WebSocket Client Connected');

    vrcConnection.on('message', function(result) {
        
        if (result.type === 'utf8') {

            var json = JSON.parse(result.utf8Data);

            if (json.type == "user-location"){
                var test = json.content;
                world = test.substring(test.indexOf('"name":')+8,test.indexOf('","description"'));
                console.log("Current World: " + world);
                io.emit('world-received', world);
            }
        }
    });
});

vrchatClient.connect(base_websocket_url + cookie, null, null, { 'User-Agent': 'Mozilla/5.0' }, null);