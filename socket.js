function sendMessage(){
    const message = document.getElementById('message').value;
    socket.emit('message', {message});
}
const socket = window.io();//connect to the server that sent this file
socket.emit('message', {message:message});//send a message to the server