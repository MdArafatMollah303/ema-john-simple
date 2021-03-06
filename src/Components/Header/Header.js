import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
const header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/Shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/manage inventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default header;