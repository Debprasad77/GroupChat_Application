import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import JoinForm from './components/joinForm';
import ChatWindow from './components/ChatWindow';
import './App.css';

const socket = io.connect('http://localhost:5000');

function App() {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [joined, setJoined] = useState(false);
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessages(prev => [...prev, data]);
    });

    socket.on('room_users', ({ users }) => {
      setUsers(users);
    });

    return () => {
      socket.off('receive_message');
      socket.off('room_users');
    };
  }, []);

  const handleJoin = (e) => {
    e.preventDefault();
    if (username && room) {
      socket.emit('join_room', { username, room });
      setJoined(true);
    }
  };

  return (
    <div className="app-container">
      {!joined ? (
        <JoinForm
          username={username}
          setUsername={setUsername}
          room={room}
          setRoom={setRoom}
          handleJoin={handleJoin}
        />
      ) : (
        <ChatWindow
          messages={messages}
          users={users}
          socket={socket}
          room={room}
          username={username}
          setJoined={setJoined}
        />
      )}
    </div>
  );
}
export default App;