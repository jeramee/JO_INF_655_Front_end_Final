import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/header';
import Header3 from '../components/header3';
import './ingredients.css';
import ChatComponent from '../components/ChatComponent'; // Import the ChatComponent

const Ingredients = () => {
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
              <br />
              <br />
              <span className="ingredients-text10">
                Click in the fridge: Do you know we didn’t have that machine
                that makes things colder in our time? Amazing how things are
                better now!
              </span>
              <br />
              <br />
              <span className="ingredients-text16">
                Talk with AI: Talking about things are better now, you have your
                own AI. Type on the refrigerator: “I want a recipe with ...”
              </span>
              <br />
              <br />
              <span className="ingredients-text21">
                Choose your ingredients: In my time, I needed to go out and
                hunt...now you will type what ingredients you want to cook:
              </span>
              <span className="ingredients-text23">
                “&quot;eggs, bacon, onion” for example
              </span>
              <br />
              {/* Message about AI */}
              <br></br>
              <span className="ingredients-text24">Coming Soon: Your personal AI assistant!</span>
            </h1>
          </div>
          {/* Render the image */}
          <img
            alt="pastedImage"
            src="/external/photo-1536181211993-cf4b2c100475.jpg"
            className="ingredients-pasted-image1"
          />
        </div>
      </div>
      {/* Integrate the ChatComponent outside the hero section */}
      <ChatComponent />
    </div>
  );
};

export default Ingredients;
