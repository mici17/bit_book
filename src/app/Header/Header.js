import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="header-logo">
                    <p>-m "Pokidali"</p>
                </div>
                <div className="header-links">
                    <Link to="/feed" className="header-feed">Feed</Link>
                    <Link to="/people" className="header-people">People</Link>
                    <Link to="/profile" className="header-profile">Profile</Link>
                    <Link onClick={() => {
                        localStorage.clear();
                        window.location.reload();
                    }}>Log out</Link>
                </div>
            </div>
        </header>
    )
}