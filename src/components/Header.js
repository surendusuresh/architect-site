import React from 'react'
import { NavHashLink } from 'react-router-hash-link'


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
                <NavHashLink
                    to="/"
                    exact
                    className="header__link"
                    activeClassName="header__link--active"
                >Home</NavHashLink>
                <NavHashLink
                    smooth 
                    to="/#about"                
                    className="header__link"
                    activeClassName="header__link--active"
                >About</NavHashLink>
                <NavHashLink
                    smooth 
                    to="/#portfolio"
                    className="header__link"
                    activeClassName="header__link--active"
                >Portfolio</NavHashLink>                
                <NavHashLink
                    smooth
                    to="/#contact"
                    className="header__link"
                    activeClassName="header__link--active"
                >Contact</NavHashLink>
            </div>
        </div>
    </div>
)

export default Header