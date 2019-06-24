import React from 'react';
import './LoginForm.css'

export const LoginForm = (props) => {

    return (
        <div className="login-form-container">
            <div className="login-cards">
                <span className="login-login-card" onClick={props.onLoginClickChange}><a href="#">Login</a></span>
                <span className="login-register-card" onClick={props.onRegisterClickChange}><a href="#">Register</a></span>
            </div>
            <form className="login-form">
                <label>email
                    <input type="email" name="email" placeholder="Email Address" value={props.email} className="login-input" onChange={props.onInputChange} />
                </label>
                <label>pass
              <input type="password" name="password" placeholder="Password" value={props.password} className="login-input" onChange={props.onInputChange} />
                </label>
                <button className="login-button" onClick={props.onSubmitLogIn}>Login</button>
            </form>
        </div >
    )
}