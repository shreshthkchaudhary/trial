import React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />

      <div className="nav-links">
        <a href="#" className="active">Home</a>
        <a href="#">Menu</a>
        <a href="#">Order Online</a>
        <a href="#">Contact</a>
      </div>

      <div className="nav-actions">
        <a href="#" className="login-link">
          <span className="login-icon">👤</span> Log In
        </a>
        <a href="#" className="cart-link">
          🛒 <span>0</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;