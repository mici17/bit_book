import React from 'react';
import './LoginForm.css';
import { Link } from 'react-router-dom'

export const LoginForm = (props) => {

    return (
        <div className="login-form-container">
            <div className="login-cards">
                <Link to="/login" className="login-login-card" onClick={props.onLoginClickChange}>Login</Link>
                <Link to="/register" className="login-register-card" onClick={props.onRegisterClickChange}>Register</Link>
            </div>
            <form className="login-form">
                <label>email
                    <input type="email" name="email" placeholder="Email Address" value={props.email} className="login-input" onChange={props.onInputChange} />
                </label>
                <label>pass
              <input type="password" name="password" placeholder="Password" value={props.password} className="login-input" onChange={props.onInputChange} />
                </label>
                <button className="login-button" onClick={props.onSubmitLogIn}>Login</button>
                <p>{props.error}</p>
            </form>
        </div >
    )
}