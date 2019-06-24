import React from 'react';
import './LoginForm.css'

export const LoginForm = (props) => {
    console.log('click')
    return (
        <div className="login-form-container">
            <div className="login-cards">
                <span className="login-login-card" onClick={props.onLoginClickChange}><a href="#">Login</a></span>
                <span className="login-register-card" onClick={props.onRegisterClickChange}><a href="#">Register</a></span>
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