import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Web3 Roadshow</Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">My Tickets</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">Sell Tickets</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link1"><h1>Sign In</h1></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
