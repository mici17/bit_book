import React from 'react';
import './LoginForm.css';
import { Link } from 'react-router-dom'

export const LoginForm = (props) => {
    console.log('click')
    return (
        <div className="login-form-container">
            <div className="login-cards">
                <Link to="#" className="login-login-card" onClick={props.onLoginClickChange}>Login</Link>
                <Link to="#" className="login-register-card" onClick={props.onRegisterClickChange}>Register</Link>
            </div>
            <form className="login-form"  >
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