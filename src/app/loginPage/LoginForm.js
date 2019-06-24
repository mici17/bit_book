import React from 'react';
import './LoginForm.css'

export const LoginForm = () => {
    return (
        <div className="login-form-container">
            <div className="login-cards">
                <span className="login-login-card">Login</span>
                <span className="login-register-card">Register</span>
            </div>
            <form className="login-form">
                <label>email
                    <input type="email" placeholder="Email Address" value="" className="login-input" />
                </label>
                <label>pass
              <input type="password" placeholder="Password" value="" className="login-input" />
                </label>
                <button className="login-button">Login</button>
            </form>
        </div >
    )
}