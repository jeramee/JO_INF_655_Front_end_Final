import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './ingredients-ok.css'

const IngredientsOk = (props) => {
  return (
    <div className="ingredients-ok-container">
      <Helmet>
        <title>Ingredients-ok - I Want Food</title>
        <meta
          property="og:title"
          content="Ingredients-ok - I Want Food"
        />
      </Helmet>
      <div className="ingredients-ok-header">
        <header
          data-thq="thq-navbar"
          className="ingredients-ok-navbar-interactive"
        >
          <div
            data-thq="thq-navbar-nav"
            className="ingredients-ok-desktop-menu"
          >
            <nav className="ingredients-ok-links">
              <Link to="/" className="ingredients-ok-navlink">
                Home
              </Link>
              <Link to="/ingredients-ok" className="ingredients-ok-navlink1">
                Ingredients
              </Link>
              <Link to="/recipe-ok" className="ingredients-ok-navlink2">
                Recipe
              </Link>
              <span className="ingredients-ok-text">Restaurants</span>
              <Link to="/places-ok" className="ingredients-ok-navlink3">
                Places
              </Link>
              <img
                alt="pastedImage"
                src="/external/pastedimage-65oj-200w.png"
                className="ingredients-ok-pasted-image"
              />
            </nav>
            <div className="ingredients-ok-buttons">
              <button className="ingredients-ok-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div
            data-thq="thq-burger-menu"
            className="ingredients-ok-burger-menu"
          >
            <svg viewBox="0 0 1024 1024" className="ingredients-ok-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="ingredients-ok-mobile-menu"
          >
            <div className="ingredients-ok-nav">
              <div className="ingredients-ok-top">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="ingredients-ok-logo"
                />
                <div
                  data-thq="thq-close-menu"
                  className="ingredients-ok-close-menu"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="ingredients-ok-icon02"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="ingredients-ok-links1">
                <span className="ingredients-ok-text01">About</span>
                <span className="ingredients-ok-text02">Features</span>
                <span className="ingredients-ok-text03">Pricing</span>
                <span className="ingredients-ok-text04">Team</span>
                <span className="ingredients-ok-text05">Blog</span>
              </nav>
              <div className="ingredients-ok-buttons1">
                <button className="ingredients-ok-login1 button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="ingredients-ok-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="ingredients-ok-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="ingredients-ok-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="ingredients-ok-hero">
        <div className="ingredients-ok-hero1 heroContainer">
          <div className="ingredients-ok-container1">
            <h1 className="ingredients-ok-hero-heading">
              <span className="ingredients-ok-text06">
                What ingredients do you have?
              </span>
              <br className="ingredients-ok-text07"></br>
              <br className="ingredients-ok-text08"></br>
              <span className="ingredients-ok-text09">
                01
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="ingredients-ok-text10">
                Click in the fridge: Do you know we did’nt have that machine
                that makes things colder in our time? Amazing how things are
                better now!
              </span>
              <br className="ingredients-ok-text11"></br>
              <span className="ingredients-ok-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="ingredients-ok-text13"></br>
              <span className="ingredients-ok-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="ingredients-ok-text15">02 </span>
              <span className="ingredients-ok-text16">
                Talk with AI: Talking about things are better now, you have your
                own AI. Type on the refrigerator: “I want a recipe with ...”
              </span>
              <br className="ingredients-ok-text17"></br>
              <br className="ingredients-ok-text18"></br>
              <span className="ingredients-ok-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="ingredients-ok-text20">03 </span>
              <span className="ingredients-ok-text21">
                Choose your ingredients: In my time, i needed to go out and
                hunt...now you will type what ingredients you want to cook:
              </span>
              <span className="ingredients-ok-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="ingredients-ok-text23">
                “&quot;eggs, bacon, onion” for example
              </span>
              <span className="ingredients-ok-text24">.</span>
              <br className="ingredients-ok-text25"></br>
            </h1>
          </div>
          <a
            href="https://copilot.microsoft.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              alt="pastedImage"
              src="https://images.unsplash.com/photo-1536181211993-cf4b2c100475?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fG9wZW4lMjBmcmlkZ2V8ZW58MHx8fHwxNzEyOTQ3MjU1fDA&amp;ixlib=rb-4.0.3&amp;w=700"
              className="ingredients-ok-pasted-image1"
            />
          </a>
          <input
            type="text"
            rows="AI Answser"
            placeholder="AI Answer"
            className="ingredients-ok-textinput"
          />
        </div>
      </div>
      <div className="ingredients-ok-footer">
        <footer className="ingredients-ok-footer1 footerContainer">
          <div className="ingredients-ok-container2">
            <span className="bodySmall ingredients-ok-text26">
              © 2023 myCompany, All Rights Reserved.
            </span>
            <div className="ingredients-ok-icon-group1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="ingredients-ok-icon10 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="ingredients-ok-icon12 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="ingredients-ok-icon14 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default IngredientsOk
