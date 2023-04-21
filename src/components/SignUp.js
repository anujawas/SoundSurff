import React from 'react';
import '../styling/auth.css';

function Signup() {
  return (
    <div className="auth-container">
      <form>
        <h2>Sign Up</h2>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
