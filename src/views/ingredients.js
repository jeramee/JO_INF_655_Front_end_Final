import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Header3 from '../components/header3';
import Footer from '../components/footer';
import './ingredients-ok.css';

const Ingredients = (props) => {
  return (
    <div className="ingredients-container">
      <Helmet>
        <title>Ingredients</title>
        <meta property="og:title" content="Ingredients" />
      </Helmet>
      <Header />
      <Header3 />
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
                Click in the fridge: Do you know we didn’t have that machine
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
            placeholder={props.inputPlaceholder || "AI Answer"} // Using props if provided, otherwise fallback to default
            className="ingredients-ok-textinput"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ingredients;
