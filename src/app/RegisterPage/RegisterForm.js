import React from 'react';
import './RegisterForm.css'

export const RegisterForm = () => {
    return (
        <div className="register-form-container">
            <div className="register-cards">
                <span className="register-login-card">Login</span>
                <span className="register-register-card">Register</span>
            </div>
            <form className="register-form">
                <label>Name
                    <input type="text" placeholder="Full Name" value="" className="register-input" />
                </label>
                <label>email
                    <input type="email" placeholder="Email Address" value="" className="register-input" />
                </label>
                <label>pass
                    <input type="password" placeholder="Min 6 characters" value="" className="register-input" />
                </label>
                <button className="register-button">Register</button>
            </form>
        </div>
    )
}