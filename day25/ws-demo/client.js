
const WebSocket = require('ws')
const socket = new WebSocket('ws://localhost:8181')

socket.onopen = () => {
    console.log("Connection establised with server");
    socket.send('Hello from Client!');

    socket.send('Hello from Client!');
}

socket.onmessage = (event) => {
    console.log('Recieved from server ', event.data);
    
}

socket.onclose = () => {
    console.log('Closing ws socket connection');
}