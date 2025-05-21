import React, { useState } from 'react';

function UserLogin() {
  const [user, setUser] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('User logged in:', user); // Placeholder for your login logic
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Username:
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Enter user name"
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

export default UserLogin;
