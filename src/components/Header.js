import React, { useState, useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";
import { slide as Menu } from "react-burger-menu";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const mobileAndTabletCheck = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!!isMobile) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => mobileAndTabletCheck(), []);

  const menuMobile = () => (
    <div className="header__mobile">
      <NavHashLink to="/#home" smooth>
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/architect-site.appspot.com/o/images%2Flogo.jpg?alt=media&token=0222c649-42a6-42c5-8a42-9f3937e8a37e"
            alt="logo"
            className="header__logo"
          ></img>
        </div>
      </NavHashLink>

      <Menu right pageWrapId={"container"} outerContainerId={"root"}>
        <div>
          <div>
            <NavHashLink
              to="/#home"
              smooth
              className="header__link"
              activeClassName="header__link--active"
            >
              Home
            </NavHashLink>
            <NavHashLink
              smooth
              to="/#about"
              className="header__link"
              activeClassName="header__link--active"
            >
              About
            </NavHashLink>
            <NavHashLink
              smooth
              to="/#portfolio"
              className="header__link"
              activeClassName="header__link--active"
            >
              Portfolio
            </NavHashLink>
            <NavHashLink
              smooth
              to="/#awards"
              className="header__link"
              activeClassName="header__link--active"
            >
              Awards
            </NavHashLink>
            <NavHashLink
              smooth
              to="/#contact"
              className="header__link"
              activeClassName="header__link--active"
            >
              Contact
            </NavHashLink>
          </div>
        </div>
      </Menu>
    </div>
  );

  const menuDesktop = () => (
    <div className="header">
      <NavHashLink to="/#home" smooth>
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/architect-site.appspot.com/o/images%2Flogo.jpg?alt=media&token=0222c649-42a6-42c5-8a42-9f3937e8a37e"
            alt="logo"
            className="header__logo"
          ></img>
        </div>
      </NavHashLink>
      <div>
        <NavHashLink
          to="/#home"
          smooth
          className="header__link"
          activeClassName="header__link--active"
        >
          Home
        </NavHashLink>
        <NavHashLink
          smooth
          to="/#about"
          className="header__link"
          activeClassName="header__link--active"
        >
          About
        </NavHashLink>
        <NavHashLink
          smooth
          to="/#portfolio"
          className="header__link"
          activeClassName="header__link--active"
        >
          Portfolio
        </NavHashLink>
        <NavHashLink
          smooth
          to="/#awards"
          className="header__link"
          activeClassName="header__link--active"
        >
          Awards
        </NavHashLink>
        <NavHashLink
          smooth
          to="/#contact"
          className="header__link"
          activeClassName="header__link--active"
        >
          Contact
        </NavHashLink>
      </div>
    </div>
  );

  return <div>{isMobile ? menuMobile() : menuDesktop()}</div>;
};

export default Header;
