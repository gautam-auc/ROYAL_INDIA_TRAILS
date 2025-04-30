import React, { useState } from 'react';
import { NavLink } from 'react-router';
import './Navbar.css'; // Importing custom CSS

export const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className="custom-navbar">
            <div className="navbar-container">
                {/* Logo */}
                <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img
                        src='/travel-rit-photo.png'
                        alt="Royal India Trails Logo"
                        style={{ height: '40px', marginRight: '30px' }}
                    />
                    Royal India Trails
                </NavLink>

                {/* Hamburger Icon */}
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                {/* Navigation Links */}
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/destinations" className="nav-links" onClick={closeMobileMenu}>Destinations</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/booking" className="nav-links" onClick={closeMobileMenu}>Booking</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-links" onClick={closeMobileMenu}>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-links" onClick={closeMobileMenu}>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};