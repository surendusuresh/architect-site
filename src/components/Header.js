import React from 'react'
import { NavHashLink } from 'react-router-hash-link'

const Header = () => (
    <div>

        <div className='header'>
            <NavHashLink
                to="/#home"
            >
                <div>
                    <img src='\images\logo.jpg' alt='logo' className='header__logo'></img>
                </div>
            </NavHashLink>
            <div>
                <NavHashLink
                    to="/#home"
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
                    to="/#awards"
                    className="header__link"
                    activeClassName="header__link--active"
                >Awards</NavHashLink>
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