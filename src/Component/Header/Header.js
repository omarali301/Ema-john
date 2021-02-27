import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'
const Header = () => {
    return (
        <div>
           <img className="Header-logo" src={logo} alt=""/>
            <nav>
                <a href="/Shop">Shop</a>
                <a href="/Review">Review</a>
                <a href="/Manage">Manage Inventory</a>
                
                </nav>

        </div>
    );
};

export default Header;