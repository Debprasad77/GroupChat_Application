import React, { useState, useEffect, useRef } from 'react';

const ChatWindow = ({ messages, users, socket, room, username, setJoined }) => {
  const [messageInput, setMessageInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (messageInput.trim()) {
      socket.emit('send_message', {
        room,
        message: messageInput,
        username
      });
      setMessageInput('');
    }
  };

  const handleLeaveRoom = () => {
    socket.emit('leave_room', { room, username });
    setJoined(false); // Reset the joined state to show the JoinForm
  };

  return (
    <div className="chat-container">
      <div className="sidebar">
        <h3>Room: {room}</h3>
        <h4>Users ({users.length})</h4>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
        <button className="leave-button" onClick={handleLeaveRoom}>
          Leave Room
        </button>
      </div>

      <div className="main-chat">
        <div className="messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.username === username ? 'sent' : 'received'}`}
            >
              <span className="user">{msg.username}</span>
              <p className="text">{msg.message}</p>
              <span className="time">
                {new Date(msg.timestamp).toLocaleTimeString()}
              </span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSend}>
          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ChatWindow;