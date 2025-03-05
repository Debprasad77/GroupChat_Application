import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Support from "./components/Support";
import Blog from "./components/Blog";
import Login from "./components/Login";

import './App.css';

const socket = io.connect('http://localhost:5000');

function App() {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [joined, setJoined] = useState(false);
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
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
      {loading ? (
        <div className="bubble-loader-container">
          <div className="bubble-loader">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
          </div>
          <p className="loading-text">Loading...</p>
        </div>
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
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
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />


          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;