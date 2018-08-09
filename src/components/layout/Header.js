import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
            navVisible: false
        };
    }

    handleResize() {
        this.setState({windowWidth: window.innerWidth});
        if ( this.state.windowWidth > 767 ) {
            this.setState({ navVisible:true });
        }
    }

    handleToggleClick () {
        if ( this.state.windowWidth < 768 ) {
            this.setState({
                navVisible: !this.state.navVisible
            })
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize.bind(this));
        this.handleResize()
    }


    render() { 
        if(this.state.navVisible === true) { 
            return (
                <header className="app-header">
                    <div className="app-header__inner-wrapper">
                        <div className="app-header__logo">
                            <Link className="app-header__logo-link" to="/">Leila Khan</Link>
                            <button onClick={this.handleToggleClick.bind(this)} className="app-header__toggle-btn">Toggle Mobile Navigation</button>
                        </div>
                        <nav className="app-navigation">
                            <h4 className="app-navigation__header">Header Navigation</h4>
                            <ul className="app-navigation__list">
                                <li className="app-navigation__list-item"><Link onClick={this.handleToggleClick.bind(this)} className="app-navigation__list-item-link" to="/wall">Wall</Link></li>
                                <li className="app-navigation__list-item"><Link onClick={this.handleToggleClick.bind(this)} className="app-navigation__list-item-link" to="/blog">Blog</Link></li>
                                <li className="app-navigation__list-item"><Link onClick={this.handleToggleClick.bind(this)} className="app-navigation__list-item-link" to="/gallery">Gallery</Link></li>
                                <li className="app-navigation__list-item"><Link onClick={this.handleToggleClick.bind(this)} className="app-navigation__list-item-link" to="/kitchen">Kitchen</Link></li>
                                <li className="app-navigation__list-item"><Link onClick={this.handleToggleClick.bind(this)} className="app-navigation__list-item-link" to="/about">About Me</Link></li>
                                <li className="app-navigation__list-item"><Link onClick={this.handleToggleClick.bind(this)} className="app-navigation__list-item-link" to="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            )
        } else {
            return (
                <header className="app-header">
                    <div className="app-header__inner-wrapper">
                        <div className="app-header__logo">
                            <Link className="app-header__logo-link" to="/">Leila Khan</Link>
                            <button onClick={this.handleToggleClick.bind(this)} className="app-header__toggle-btn">Toggle Mobile Navigation</button>
                        </div>
                    </div>
                </header>
            )
        }
    }
}

export default Header;

