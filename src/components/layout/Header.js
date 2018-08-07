import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="app-header">
        <div className="app-header__inner-wrapper">
            <div className="app-header__logo">
                <Link className="app-header__logo-link" to="/">Leila Khan</Link>
            </div>
            <nav className="app-navigation">
                <h4 className="app-navigation__header">Header Navigation</h4>
                <ul className="app-navigation__list">
                    <li className="app-navigation__list-item"><Link className="app-navigation__list-item-link" to="/wall">Wall</Link></li>
                    <li className="app-navigation__list-item"><Link className="app-navigation__list-item-link" to="/blog">Blog</Link></li>
                    <li className="app-navigation__list-item"><Link className="app-navigation__list-item-link" to="/gallery">Gallery</Link></li>
                    <li className="app-navigation__list-item"><Link className="app-navigation__list-item-link" to="/kitchen">Kitchen</Link></li>
                    <li className="app-navigation__list-item"><Link className="app-navigation__list-item-link" to="/about">About Me</Link></li>
                    <li className="app-navigation__list-item"><Link className="app-navigation__list-item-link" to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header;