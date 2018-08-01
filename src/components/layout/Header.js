import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="page-header">
        <div className="inner-wrapper">
            <div className="logo">
                <Link to="/">Leila Khan</Link>
            </div>
            <nav className="headerNavigation">
                <h4>Header Navigation</h4>
                <ul className="headerNavMenuItems">
                    <li><Link to="/wall">Wall</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/kitchen">Kitchen</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header;