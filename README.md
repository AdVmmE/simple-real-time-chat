# Simple Real-Time Chat
A lightweight real-time chat application built with Node.js, Express, Socket.IO, and MongoDB. Users can send and receive messages instantly, with message history stored in a database and cleared when all users disconnect.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [How to Use](#how-to-use)
- [Images](#images)

## Introduction
This project is a simple real-time chat system where users can connect via a web interface, send messages, and see updates instantly. It uses Socket.IO for real-time communication and MongoDB to persist messages until all users disconnect. The application is designed for simplicity and can serve as a foundation for more complex chat systems.

## Features
- **Real-Time Messaging**: Send and receive messages instantly using WebSockets.
- **Message Persistence**: Messages are stored in MongoDB and loaded for new users.
- **Auto-Scroll**: Chat window scrolls to the latest message automatically.
- **Message Cleanup**: All messages are deleted from the database when a user disconnects (currently deletes on any disconnect—work in progress).
- **Sent/Received Styling**: Sent messages are styled differently from received ones.

## Installation
Follow these steps to set up and run the project locally.

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance, e.g., MongoDB Atlas)
- A MongoDB connection string (URI)

### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/AdVmmE/simple-real-time-chat.git
   cd simple-real-time-chat
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add your MongoDB connection string:
   ```bash
   MONGO_URI=mongodb://your-mongodb-uri-here
   ```
   Replace `your-mongodb-uri-here` with your actual MongoDB URI (e.g., from MongoDB Atlas).
4. **Run the Server**
   ```bash
   node server.js
   ```
   The server will start on `http://localhost:3000`.
5. **Open in Browser**
   Navigate to `http://localhost:3000` in your web browser to access the chat interface.

## Usage
- **Sending a Message**: Type a message in the input field and press Enter (or submit the form). Your message will appear in the chat window instantly.
- **Receiving Messages**: Messages from other users (or yourself in another tab) will appear in real-time.
- **Message History**: When you join, all previous messages (if any) are loaded from the database.
- **Disconnect Behavior**: When a user disconnects, all messages are currently deleted from the database (this may change in future updates).

### Example
1. Open two browser tabs at `http://localhost:3000`.
2. Type a message in one tab and see it appear in the other instantly.
3. Close one tab to simulate a disconnect—note that the message history will reset.

## Contributing
Contributions are welcome! Here’s how you can help:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m "Add feature"`).
4. Push to your branch (`git push origin feature-branch`).
5. Open a Pull Request.

### Notes for Contributors
- The project is still in development (e.g., the disconnect behavior might need refinement).
- Feel free to suggest improvements like user authentication, persistent message history, or UI enhancements.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details (you can add this file to your repo if desired).

## How to Use
1. Go to your GitHub repo: [https://github.com/AdVmmE/simple-real-time-chat](https://github.com/AdVmmE/simple-real-time-chat).
2. Click on `README.md` (or create it if it doesn’t exist via "Add file" > "Create new file").
3. Copy and paste the content above into the file.
4. Commit the changes.

## Images

```markdown
![Chat Interface]

```


