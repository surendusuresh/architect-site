import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <div>
        <div className='header__banner'>
            <p>contact@greensquare.com</p>
            <p>+91 9035112512</p>
            <p>www.greensquare.com</p>
        </div>
        <div className='header'>

            <div>
                <img src='\images\logo.jpg' alt='logo' className='header__logo'></img>
            </div>
            <div>
                <NavLink
                    to="/"
                    exact
                    className="header__link"
                    activeClassName="header__link--active"
                >Home</NavLink>
                <NavLink
                    to="/#about"                
                    className="header__link"
                    activeClassName="header__link--active"
                >About</NavLink>
                <NavLink
                    to="/#portfolio"
                    className="header__link"
                    activeClassName="header__link--active"
                >Portfolio</NavLink>                
                <NavLink
                    to="/#contact"
                    className="header__link"
                    activeClassName="header__link--active"
                >Contact</NavLink>
            </div>
        </div>
    </div>
)

export default Header