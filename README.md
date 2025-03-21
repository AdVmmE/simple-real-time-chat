# Simple Real-Time Chat
A lightweight real-time chat application built with Node.js, Express, Socket.IO, and MongoDB. Users can send and receive messages instantly, with message history stored in a database and cleared when all users disconnect.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

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
