
//_____________Advxm___________________________
const socket = io();
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const contentMessage = document.getElementById('content-message');

messageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = messageInput.value.trim();
    if (message) {
        socket.emit('message', { message });
        appendMessage(message, true); // Show sent message immediately
        messageInput.value = '';
    }
});

socket.on('message', ({ message, id }) => {
    if (id !== socket.id) { // Avoid duplicating sender's message
        appendMessage(message, false);
    }
});

socket.on('loadMessages', (messages) => {
    messages.forEach(({ message }) => appendMessage(message, false));
});

socket.on('connect', () => console.log('Connected to server'));
socket.on('connect_error', () => console.log('Connection failed'));

function appendMessage(message, isSent) {
    const msgElement = document.createElement('p');
    msgElement.textContent = message;
    msgElement.classList.add(isSent ? 'sent' : 'received');
    contentMessage.appendChild(msgElement);
    contentMessage.scrollTop = contentMessage.scrollHeight; // Auto-scroll
}