import React from 'react';
import '../styling/auth.css';
import Header from './Header';

function Login() {
    return (
        <>
            <Header />
            <div id="auth-container">
                <form id="auth-form">
                    <h2>Log In</h2>
                    <label htmlFor="email-input">Email</label>
                    <input type="email" id="email-input" required />
                    <label htmlFor="password-input">Password</label>
                    <input type="password" id="password-input" required />
                    <button type="submit">Log In</button>
                    <p>
                        Don't have an account? <a href="/signup">Sign Up</a>
                    </p>
                </form>
            </div>

        </>
    );
}

function Signup() {
    return (
        <>
            <Header/>
            <div id="auth-container">
                <form id="auth-form">
                    <h2>Sign Up</h2>
                    <label htmlFor="name-input">Name</label>
                    <input type="text" id="name-input" required />
                    <label htmlFor="email-input">Email</label>
                    <input type="email" id="email-input" required />
                    <label htmlFor="password-input">Password</label>
                    <input type="password" id="password-input" required />
                    <button type="submit">Sign Up</button>
                    <p>
                        Already have an account? <a href="login">Log In</a>
                    </p>
                </form>
            </div>
        </>
    );
}

export { Login, Signup };
