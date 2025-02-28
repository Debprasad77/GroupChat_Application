import React from 'react';

const JoinForm = ({ username, setUsername, room, setRoom, handleJoin }) => (
  <div className="join-container">
    <h2>Join Chat Room</h2>
    <form onSubmit={handleJoin}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        
      />
      <input
        type="text"
        placeholder="Room Name"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
        required
      />
      <button type="submit">Join</button>
    </form>
  </div>
);

export default JoinForm;