// ESM
// import WebSocket from 'ws';

// CommonJS
const WebSocket = require('ws')

const ws = new WebSocket.Server({port:8181})

ws.on("connection", (s)=> {
    console.log('Client connected... ')
    s.on('message', function message(data) {
        console.log('received: %s', data);
      });


      s.on('open', function open() {
        s.send('something');
      });
})

ws.on('error', console.error);



