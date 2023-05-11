import React from 'react';

const UserLogin = () => {
  return (
    <div>
      <h2>User Login</h2>
      {/* User login form */}
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default UserLogin;
