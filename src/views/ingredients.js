import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Header3 from '../components/header3';
import Footer from '../components/footer';
import './ingredients.css';

const Ingredients = (props) => {
  return (
    <div className="ingredients-container">
      <Helmet>
        <title>Ingredients</title>
        <meta property="og:title" content="Ingredients" />
      </Helmet>
      <Header></Header>
      <Header3></Header3>
      <div className="ingredients-hero">
        <div className="ingredients-hero1 heroContainer">
          <div className="ingredients-container1">
            <h1 className="ingredients-hero-heading">
              <span className="ingredients-text06">
                What ingredients do you have?
              </span>
              <br className="ingredients-text07"></br>
              <br className="ingredients-text08"></br>
              <span className="ingredients-text09">
                01
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="ingredients-text10">
                Click in the fridge: Do you know we didn’t have that machine
                that makes things colder in our time? Amazing how things are
                better now!
              </span>
              <br className="ingredients-text11"></br>
              <span className="ingredients-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="ingredients-text13"></br>
              <span className="ingredients-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="ingredients-text15">02 </span>
              <span className="ingredients-text16">
                Talk with AI: Talking about things are better now, you have your
                own AI. Type on the refrigerator: “I want a recipe with ...”
              </span>
              <br className="ingredients-text17"></br>
              <br className="ingredients-text18"></br>
              <span className="ingredients-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="ingredients-text20">03 </span>
              <span className="ingredients-text21">
                Choose your ingredients: In my time, i needed to go out and
                hunt...now you will type what ingredients you want to cook:
              </span>
              <span className="ingredients-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="ingredients-text23">
                “&quot;eggs, bacon, onion” for example
              </span>
              <span className="ingredients-text24">.</span>
              <br className="ingredients-text25"></br>
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
              className="ingredients-pasted-image1"
            />
          </a>
          <input
            type="text"
            rows="AI Answser"
            placeholder={props.inputPlaceholder || "AI Answer"} // Using props if provided, otherwise fallback to default
            className="ingredients-textinput"
          />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Ingredients;
