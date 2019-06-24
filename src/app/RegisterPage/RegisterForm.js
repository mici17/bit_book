import React from 'react';
import './RegisterForm.css'

export const RegisterForm = (props) => {
    return (
        <div className="register-form-container">
            <div className="register-cards">
                <span className="register-login-card" onClick={props.onLoginClickChange}><a href="#">Login</a></span>
                <span className="register-register-card" onClick={props.onRegisterClickChange}><a href="#">Register</a></span>
            </div>
            <form className="register-form">
                <label>Name
                    <input type="text" name="name" placeholder="Full Name" value={props.name} className="register-input" onChange={props.onInputChange} />
                </label>
                <label>email
                    <input type="email" name="email" placeholder="Email Address" value={props.email} className="register-input" onChange={props.onInputChange} />
                </label>
                <label>pass
                    <input type="password" name="password" placeholder="Min 6 characters" value={props.password} className="register-input" onChange={props.onInputChange} />
                </label>
                <button className="register-button">Register</button>
            </form>
        </div>
    )
}