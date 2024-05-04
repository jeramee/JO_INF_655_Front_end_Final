import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import NavigationLinks1 from './navigation-links1'
import './header.css'

const Header = (props) => {
  return (
    <header data-role="Header" className="header-header">
      <div className="header-nav">
        <nav className="header-nav1">
          <Link to="/profile" className="header-navlink">
            {props.text}
          </Link>
          <Link to="/" className="header-navlink01">
            {props.text1}
          </Link>
          <Link to="/recipes" className="header-navlink02">
            {props.text2}
          </Link>
          <Link to="/places" className="header-navlink03">
            {props.text3}
          </Link>
          <Link to="/restaurants" className="header-navlink04">
            {props.text4}
          </Link>
          <Link to="/places" className="header-navlink05">
            {props.text5}
          </Link>
          <Link to="/ingredients" className="header-navlink06">
            {props.text6}
          </Link>
          <Link to="/videos" className="header-navlink07">
            {props.text7}
          </Link>
          <Link to="/login" className="header-navlink08">
            {props.text8}
          </Link>
          <Link to="/register" className="header-navlink09">
            {props.text9}
          </Link>
        </nav>
      </div>
      <div className="header-container">
        <div data-role="BurgerMenu" className="header-burger-menu">
          <Link to="/burger-menu">
            <div className="header-container1">
              <svg viewBox="0 0 1024 1024" className="header-icon">
                <path d="M768 512c0-70.699-28.672-134.699-74.965-181.035-46.336-46.293-110.336-74.965-181.035-74.965-70.656 0-134.656 28.672-180.992 74.965-46.336 46.336-75.008 110.336-75.008 181.035 0 70.656 28.672 134.656 75.008 180.992s110.336 75.008 180.992 75.008c70.699 0 134.699-28.672 181.035-75.008 46.293-46.336 74.965-110.336 74.965-180.992z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="header-icon2">
                <path d="M768 512c0-70.699-28.672-134.699-74.965-181.035-46.336-46.293-110.336-74.965-181.035-74.965-70.656 0-134.656 28.672-180.992 74.965-46.336 46.336-75.008 110.336-75.008 181.035 0 70.656 28.672 134.656 75.008 180.992s110.336 75.008 180.992 75.008c70.699 0 134.699-28.672 181.035-75.008 46.293-46.336 74.965-110.336 74.965-180.992z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="header-icon4">
                <path d="M768 512c0-70.699-28.672-134.699-74.965-181.035-46.336-46.293-110.336-74.965-181.035-74.965-70.656 0-134.656 28.672-180.992 74.965-46.336 46.336-75.008 110.336-75.008 181.035 0 70.656 28.672 134.656 75.008 180.992s110.336 75.008 180.992 75.008c70.699 0 134.699-28.672 181.035-75.008 46.293-46.336 74.965-110.336 74.965-180.992z"></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <div data-role="MobileMenu" className="header-mobile-menu">
        <div className="header-nav2">
          <div className="header-container2">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="header-image"
            />
            <div data-role="CloseMobileMenu" className="header-menu-close">
              <svg viewBox="0 0 1024 1024" className="header-icon6">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <NavigationLinks1 rootClassName="rootClassName9"></NavigationLinks1>
        </div>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text9: 'Sign-up ',
  text: 'Profile',
  imageAlt: 'image',
  text3: 'Places',
  text5: 'Places',
  text1: 'Home',
  text6: 'Ingredient Search',
  text7: 'Upload',
  text2: 'Recipe search',
  text4: 'Restraunts',
  text8: 'Login',
  imageSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
}

Header.propTypes = {
  text9: PropTypes.string,
  text: PropTypes.string,
  imageAlt: PropTypes.string,
  text3: PropTypes.string,
  text5: PropTypes.string,
  text1: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
  text8: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Header
