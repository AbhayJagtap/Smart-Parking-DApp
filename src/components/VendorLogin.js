import React from 'react';

const VendorLogin = () => {
  return (
    <div>
      <h2>Vendor Login</h2>
      {/* Vendor login form */}
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

export default VendorLogin;
