import React from 'react';
import './RegisterForm.css'
import { Link } from 'react-router-dom'

export const RegisterForm = (props) => {
    return (
        <div className="register-form-container">
            <div className="register-cards">
                <Link to="#" className="register-login-card" onClick={props.onLoginClickChange}>Login</Link>
                <Link to="#" className="register-register-card" onClick={props.onRegisterClickChange}>Register</Link>
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