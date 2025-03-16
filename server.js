const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

const messageSchema = new mongoose.Schema({
    content: String,
    timestamp: { type: Date, default: Date.now },
});
const Message = mongoose.model('Message', messageSchema);

app.use(express.static('views'));
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    Message.find()
        .sort({ timestamp: 1 })
        .then(messages => {
            socket.emit('loadMessages', messages.map(msg => ({ message: msg.content })));
        })
        .catch(err => console.error('Error loading messages:', err));







        socket.on('message', async (data) => {
        try {
            const newMessage = new Message({ content: data.message });
            await newMessage.save();
            io.sockets.emit('message', { message: data.message, id: socket.id });
        } catch (err) {
            console.error('Error saving message:', err);
        }
    });

    socket.on('disconnect', async () => {
        console.log('A user disconnected:', socket.id);
        try {
            await Message.deleteMany({}); 
            console.log('All messages deleted from database');
            io.emit('loadMessages', []); 
        } catch (err) {
            console.error('Error deleting messages:', err);
        }
    });
});


server.listen(3000, () => console.log('Server running on port 3000'));



//still working on this