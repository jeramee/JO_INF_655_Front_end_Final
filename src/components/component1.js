import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

import PropTypes from 'prop-types'

import FeatureCard from './feature-card'
import Question1 from './question1'
import './component1.css'

const Component1 = (props) => {
  return (
    <div className="component1-container">
    <div className="component1-hero">
      <div className="component1-hero1 heroContainer">
        <div className="component1-container01">
          <h1 className="component1-hero-heading heading1">
            {props.heroHeading}
          </h1>
          <span className="component1-hero-sub-heading bodyLarge">
            {/* Sub-heading content */}
          </span>
          <div className="component1-btn-group">
            <div>
              {/* Link to create-recipe-view.js */}
              <Link to="/create-recipe-view" className="buttonFilled">
                {props.heroButton1}
              </Link>
              {/* Link to recipes.js */}
              <Link to="/recipes" className="buttonFlat">
                {props.heroButton2}
              </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="component1-features">
        <div className="featuresContainer">
          <div className="component1-features1">
            <div className="component1-container02">
              <span className="overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="component1-features-heading heading2">
                {props.featuresHeading}
              </h2>
              <span className="component1-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Discover a world of culinary delights with our unique
                      features
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="component1-container03">
              <FeatureCard
                heading="Alphabetical Organization"
                subHeading="Easily find recipes by browsing alphabetically"
              ></FeatureCard>
              <FeatureCard
                heading="Ingredient Links"
                subHeading="Quick access to ingredients used in each recipe"
              ></FeatureCard>
              <FeatureCard
                heading="Restaurant Connections"
                subHeading="Discover recipes from your favorite restaurants"
              ></FeatureCard>
              <FeatureCard
                heading="Locality Information"
                subHeading="Explore recipes based on their origin or locality"
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="component1-pricing">
        <div className="pricingContainer">
          <div className="component1-container04">
            <span className="overline">
              <span>Pricing</span>
              <br></br>
            </span>
            <h2 className="heading2">{props.pricingHeading}</h2>
            <span className="component1-pricing-sub-heading bodyLarge">
              <span>
                <span>
                  Unlock a world of culinary delights with our flexible plans
                </span>
              </span>
            </span>
          </div>
          <div className="component1-container05">
            <div className="freePricingCard component1-pricing-card">
              <div className="component1-container06">
                <span className="component1-text36 heading3">{props.text}</span>
                <span className="bodySmall">{props.freePlanDescription}</span>
              </div>
              <div className="component1-container07">
                <span className="component1-text37">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="component1-free-plan-price">
                  {props.freePlanPrice}
                </span>
              </div>
              <div className="component1-container08">
                <div className="component1-container09">
                  <span className="component1-text40">{props.text4}</span>
                  <span className="bodySmall">{props.freePlanFeatures}</span>
                </div>
                <div className="component1-container10">
                  <span className="component1-text41">{props.text5}</span>
                  <span className="bodySmall">{props.freePlanFeatures1}</span>
                </div>
                <div className="component1-container11">
                  <span className="component1-text42">{props.text6}</span>
                  <span className="bodySmall">{props.freePlanFeatures2}</span>
                </div>
                <div className="component1-container12">
                  <span className="component1-text43">{props.text7}</span>
                  <span className="bodySmall">{props.freePlanFeatures3}</span>
                </div>
              </div>
              <button className="component1-button buttonOutline">
                {props.button}
              </button>
            </div>
            <div className="basicPricingCard component1-pricing-card1">
              <div className="component1-container13">
                <span className="component1-text44 heading3">
                  {props.text1}
                </span>
                <span className="bodySmall">{props.basicPlanDescription}</span>
              </div>
              <div className="component1-container14">
                <span className="component1-text45">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="component1-basic-plan-pricing">
                  {props.basicPlanPricing}
                </span>
                <span className="component1-text48">{props.text2}</span>
              </div>
              <div className="component1-container15">
                <div className="component1-container16">
                  <span className="component1-text49">{props.text8}</span>
                  <span className="bodySmall">{props.text9}</span>
                </div>
                <div className="component1-container17">
                  <span className="component1-text51">{props.text10}</span>
                  <span className="bodySmall">{props.freePlanFeatures4}</span>
                </div>
                <div className="component1-container18">
                  <span className="component1-text52">{props.text11}</span>
                  <span className="bodySmall">{props.freePlanFeatures5}</span>
                </div>
                <div className="component1-container19">
                  <span className="component1-text53">{props.text12}</span>
                  <span className="bodySmall">{props.freePlanFeatures6}</span>
                </div>
                <div className="component1-container20">
                  <span className="component1-text54">{props.text13}</span>
                  <span className="bodySmall">{props.freePlanFeatures7}</span>
                </div>
              </div>
              <button className="component1-button1 buttonFilledSecondary">
                {props.button1}
              </button>
            </div>
            <div className="proPricingCard component1-pricing-card2">
              <div className="component1-container21">
                <span className="component1-text55 heading3">
                  <span>PRO</span>
                  <br></br>
                </span>
                <span className="bodySmall">{props.proPlanDescription}</span>
              </div>
              <div className="component1-container22">
                <span className="component1-text58">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="component1-pro-plan-pricing">
                  {props.proPlanPricing}
                </span>
                <span className="component1-text61">{props.text3}</span>
              </div>
              <div className="component1-container23">
                <div className="component1-container24">
                  <span className="component1-text62">{props.text14}</span>
                  <span className="bodySmall">{props.text15}</span>
                </div>
                <div className="component1-container25">
                  <span className="component1-text64">{props.text16}</span>
                  <span className="bodySmall">{props.freePlanFeatures8}</span>
                </div>
                <div className="component1-container26">
                  <span className="component1-text65">{props.text17}</span>
                  <span className="bodySmall">{props.freePlanFeatures9}</span>
                </div>
                <div className="component1-container27">
                  <span className="component1-text66">{props.text18}</span>
                  <span className="bodySmall">{props.freePlanFeatures10}</span>
                </div>
                <div className="component1-container28">
                  <span className="component1-text67">{props.text19}</span>
                  <span className="bodySmall">{props.freePlanFeatures11}</span>
                </div>
              </div>
              <button className="component1-button2 buttonFilledSecondary">
                {props.button2}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="component1-banner">
        <div className="bannerContainer component1-banner1">
          <h1 className="component1-banner-heading heading2">
            {props.bannerHeading}
          </h1>
          <span className="component1-banner-sub-heading bodySmall">
            <span>
              <span>
                <span>
                  Discover a vast collection of recipes from around the globe.
                  Whether you&apos;re a seasoned chef or a beginner in the
                  kitchen, there&apos;s something here for everyone. From
                  traditional dishes to modern fusion creations, let your taste
                  buds be your guide.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
            <span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
          </span>
          <button className="buttonFilled">{props.bannerButton}</button>
        </div>
      </div>
      <div className="component1-faq">
        <div className="faqContainer">
          <div className="component1-faq1">
            <div className="component1-container29">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="component1-text85 heading2">{props.heading}</h2>
              <span className="component1-text86 bodyLarge">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
              </span>
            </div>
            <div className="component1-container30">
              <Question1
                answer="You can submit your recipe by filling out the submission form on our website. Our team will review it and notify you if it gets selected for feature."
                question="How can I submit my own recipe to be featured on the Recipes Page?"
              ></Question1>
              <Question1
                answer="Yes, you can use the search function on the Recipes Page to find recipes that include a specific ingredient. Simply type in the ingredient you are looking for."
                question="Can I search for recipes based on a specific ingredient?"
              ></Question1>
              <Question1
                answer="We strive to provide a diverse range of recipes to cater to different dietary restrictions. You can filter recipes based on dietary preferences such as vegan, gluten-free, etc."
                question="Are the recipes on the page suitable for all dietary restrictions?"
              ></Question1>
              <Question1
                answer="New recipes are added regularly to keep the content fresh and exciting. Check back frequently to discover new culinary delights."
                question="How often are new recipes added to the Recipes Page?"
              ></Question1>
              <Question1
                answer="Yes, you can create an account on our website and save your favorite recipes for easy access later. Simply click on the 'Save Recipe' button."
                question="Can I save my favorite recipes for future reference?"
              ></Question1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Component1.defaultProps = {
  freePlanDescription: 'Access a limited selection of recipes',
  button1: 'Try the Basic plan',
  text4: '✔',
  freePlanFeatures4: 'Access to all recipes',
  basicPlanPricing: '9.99',
  heroButton2: 'Learn More →',
  text6: '✔',
  text18: '✔',
  freePlanFeatures5: 'View restaurant information',
  bannerButton: 'Find Your Recipe',
  text3: '/ month',
  text15: ' All features of BASIC plan',
  text1: 'BASIC',
  text12: '✔',
  text10: '✔',
  text8: '✔',
  text17: '✔',
  bannerHeading: 'Welcome to our Recipes Page',
  text14: '✔',
  text11: '✔',
  text: 'Free',
  freePlanFeatures2: 'Access ingredient lists',
  heroHeading: 'Delicious Recipes',
  heroButton1: 'Get Cooking',
  freePlanFeatures: 'View recipes alphabetically',
  freePlanFeatures7: 'Enhanced search functionality',
  proPlanDescription: 'Get exclusive access to premium content',
  text9: 'All features of FREE plan',
  freePlanFeatures11: 'Customized recipe recommendations',
  freePlanFeatures3: 'Locality information',
  text16: '✔',
  text13: '✔',
  freePlanFeatures8: 'Exclusive recipes from top chefs',
  proPlanPricing: '19.99',
  heading: 'Common questions',
  freePlanFeatures9: 'Priority support',
  button2: 'Try the PRO plan',
  text5: '✔',
  featuresHeading: 'Exciting Features of Our Recipes Page',
  button: 'Continue with Free',
  text19: '✔',
  pricingHeading: 'Choose Your Plan',
  freePlanFeatures10: 'Ad-free experience',
  freePlanPrice: '0',
  freePlanFeatures6: 'Watch cooking videos',
  text7: '✔',
  basicPlanDescription: 'Unlock more recipes and features',
  freePlanFeatures1: 'Search recipes by name',
  text2: '/ month',
}

Component1.propTypes = {
  freePlanDescription: PropTypes.string,
  button1: PropTypes.string,
  text4: PropTypes.string,
  freePlanFeatures4: PropTypes.string,
  basicPlanPricing: PropTypes.string,
  heroButton2: PropTypes.string,
  text6: PropTypes.string,
  text18: PropTypes.string,
  freePlanFeatures5: PropTypes.string,
  bannerButton: PropTypes.string,
  text3: PropTypes.string,
  text15: PropTypes.string,
  text1: PropTypes.string,
  text12: PropTypes.string,
  text10: PropTypes.string,
  text8: PropTypes.string,
  text17: PropTypes.string,
  bannerHeading: PropTypes.string,
  text14: PropTypes.string,
  text11: PropTypes.string,
  text: PropTypes.string,
  freePlanFeatures2: PropTypes.string,
  heroHeading: PropTypes.string,
  heroButton1: PropTypes.string,
  freePlanFeatures: PropTypes.string,
  freePlanFeatures7: PropTypes.string,
  proPlanDescription: PropTypes.string,
  text9: PropTypes.string,
  freePlanFeatures11: PropTypes.string,
  freePlanFeatures3: PropTypes.string,
  text16: PropTypes.string,
  text13: PropTypes.string,
  freePlanFeatures8: PropTypes.string,
  proPlanPricing: PropTypes.string,
  heading: PropTypes.string,
  freePlanFeatures9: PropTypes.string,
  button2: PropTypes.string,
  text5: PropTypes.string,
  featuresHeading: PropTypes.string,
  button: PropTypes.string,
  text19: PropTypes.string,
  pricingHeading: PropTypes.string,
  freePlanFeatures10: PropTypes.string,
  freePlanPrice: PropTypes.string,
  freePlanFeatures6: PropTypes.string,
  text7: PropTypes.string,
  basicPlanDescription: PropTypes.string,
  freePlanFeatures1: PropTypes.string,
  text2: PropTypes.string,
}

export default Component1
