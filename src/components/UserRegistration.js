import React from 'react';

const UserRegistration = () => {
  return (
    <div>
      <h2>User Registration</h2>
      {/* User registration form */}
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserRegistration;
