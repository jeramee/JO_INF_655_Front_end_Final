import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './header1.css'

const Header1 = (props) => {
  return (
    <header data-role="Header" className="header1-header">
      <div className="header1-nav">
        <Link to="/profile" className="header1-navlink">
          <nav className="header1-profile">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="header1-image"
            />
            <span className="header1-text">{props.text}</span>
          </nav>
        </Link>
        <Link to="/" className="header1-navlink01">
          <nav className="header1-home">
            <img
              alt={props.imageAlt1}
              src={props.imageSrc1}
              className="header1-image1"
            />
            <span className="header1-text1">{props.text1}</span>
          </nav>
        </Link>
        <Link to="/ingredients" className="header1-navlink02">
          <nav className="header1-ingredients">
            <img
              alt={props.imageAlt2}
              src={props.imageSrc2}
              className="header1-image2"
            />
            <span className="header1-text2">{props.text2}</span>
          </nav>
        </Link>
        <Link to="/places" className="header1-navlink03">
          <nav className="header1-places">
            <img
              alt={props.imageAlt3}
              src={props.imageSrc3}
              className="header1-image3"
            />
            <span className="header1-text3">{props.text3}</span>
          </nav>
        </Link>
        <Link to="/recipes" className="header1-navlink04">
          <nav className="header1-recipes">
            <img
              alt={props.imageAlt4}
              src={props.imageSrc4}
              className="header1-image4"
            />
            <span className="header1-text4">{props.text4}</span>
          </nav>
        </Link>
        <Link to="/restaurants" className="header1-navlink05">
          <nav className="header1-restaraunts">
            <img
              alt={props.imageAlt5}
              src={props.imageSrc5}
              className="header1-image5"
            />
            <span className="header1-link">{props.link}</span>
          </nav>
        </Link>
        <Link to="/content" className="header1-navlink06">
          <nav className="header1-upload">
            <img
              alt={props.imageAlt6}
              src={props.imageSrc6}
              className="header1-image6"
            />
            <span className="header1-link1">
              <span className="header1-text5">Upload</span>
              <br></br>
              <br></br>
            </span>
          </nav>
        </Link>
      </div>
      <div data-role="BurgerMenu" className="header1-burger-menu">
        <Link to="/burger-menu">
          <svg viewBox="0 0 1024 1024" className="header1-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </Link>
      </div>
      <div data-role="MobileMenu" className="header1-mobile-menu">
        <div className="header1-nav1">
          <div className="header1-container">
            <div data-role="CloseMobileMenu" className="header1-menu-close">
              <svg viewBox="0 0 1024 1024" className="header1-icon02">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <nav className="header1-nav2">
            <Link to="/restaurants" className="header1-text8">
              {props.text5}
            </Link>
            <Link to="/ingredients" className="header1-navlink08">
              {props.text6}
            </Link>
            <Link to="/recipes" className="header1-navlink09">
              {props.text7}
            </Link>
            <Link to="/places" className="header1-navlink10">
              {props.text8}
            </Link>
            <Link to="/content" className="header1-navlink11">
              {props.text9}
            </Link>
          </nav>
        </div>
        <div>
          <svg viewBox="0 0 950.8571428571428 1024" className="header1-icon04">
            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
          </svg>
          <svg viewBox="0 0 877.7142857142857 1024" className="header1-icon06">
            <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
          </svg>
          <svg viewBox="0 0 602.2582857142856 1024" className="header1-icon08">
            <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
          </svg>
        </div>
      </div>
    </header>
  )
}

Header1.defaultProps = {
  imageAlt1: 'image',
  imageSrc: '/external/design_icon_small_final-800w.png',
  text4: 'Recipes',
  imageAlt2: 'image',
  imageSrc6: '/external/upload-200h.png',
  text1: 'Home',
  text6: 'Ingredients',
  imageAlt3: 'image',
  text3: 'Places',
  imageAlt4: 'image',
  text5: 'Restaurants',
  text7: 'Recipes',
  text9: 'Content',
  link: 'Restaurants',
  imageSrc2: '/external/ingredients-200w.png',
  imageSrc4: '/external/recipes-200h.png',
  imageSrc3: '/external/places-200w.png',
  imageAlt: 'image',
  text2: 'Ingredients',
  imageAlt5: 'image',
  text: 'Profile',
  imageSrc1: '/external/home-200h.png',
  text8: 'Places\n',
  imageAlt6: 'image',
  imageSrc5: '/external/restraunt-200h.png',
}

Header1.propTypes = {
  imageAlt1: PropTypes.string,
  imageSrc: PropTypes.string,
  text4: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageSrc6: PropTypes.string,
  text1: PropTypes.string,
  text6: PropTypes.string,
  imageAlt3: PropTypes.string,
  text3: PropTypes.string,
  imageAlt4: PropTypes.string,
  text5: PropTypes.string,
  text7: PropTypes.string,
  text9: PropTypes.string,
  link: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageSrc4: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageAlt: PropTypes.string,
  text2: PropTypes.string,
  imageAlt5: PropTypes.string,
  text: PropTypes.string,
  imageSrc1: PropTypes.string,
  text8: PropTypes.string,
  imageAlt6: PropTypes.string,
  imageSrc5: PropTypes.string,
}

export default Header1
