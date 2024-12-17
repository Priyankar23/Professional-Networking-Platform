import React from 'react';
import './Header.css';
import Vector from './Vector.png'; 

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Vector} alt="Circle Hub Logo" className="header__logo-img" />
        Circle Hub
      </div>
      <nav className="header__nav">
        <a href="/">How it works</a>
        <a href="/">Company</a>
        <a href="/">Resources</a>
        <a href="/">Pricing</a>
      </nav>
      <div className="header__buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Try For Free</button>
      </div>
    </header>
  );
}

export default Header;
