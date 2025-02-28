import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';

const socket = io.connect('http://localhost:5000');

function App() {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [joined, setJoined] = useState(false);
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  // Disable browser scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'; // Disable scroll restoration
    }

    // Scroll to the top of the page on reload
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessages((prev) => [...prev, data]);
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
      <Navbar />
      <Body
        joined={joined}
        username={username}
        setUsername={setUsername}
        room={room}
        setRoom={setRoom}
        handleJoin={handleJoin}
        messages={messages}
        users={users}
        socket={socket}
        setJoined={setJoined}
      />
      <Footer />
    </div>
  );
}

export default App;