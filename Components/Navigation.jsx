import React from 'react'
// import { Link } from 'react-router-dom'
import "./Navigation.css"

const Navigation = () => {
    return (
        <div className="navigation">
            <ul className='nav-menu'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
            <div className='navbar-right'>
                <img src="" alt="" className="search" />
                <div className='navbar-search-icon'>
                </div>
            </div>
        </div>
    )
}

export default Navigation