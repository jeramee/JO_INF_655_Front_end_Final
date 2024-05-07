import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Header3 from '../components/header3'
import FeatureCard3 from '../components/feature-card3'
import FeatureCard5 from '../components/feature-card5'
import FeatureCard4 from '../components/feature-card4'
import Question14 from '../components/question14'
import Footer from '../components/footer'
import './cooking-videos.css'

const CookingVideos = (props) => {
  return (
    <div className="cooking-videos-container">
      <Helmet>
        <title>CookingVideos - I Want Food</title>
        <meta
          property="og:title"
          content="CookingVideos - I Want Food"
        />
      </Helmet>
      <Header></Header>
      <Header3></Header3>
      <div className="cooking-videos-hero">
        <div className="heroContainer cooking-videos-hero1">
          <div className="cooking-videos-container01">
            <h1 className="cooking-videos-hero-heading heading1">
              Discover a World of Culinary Delights
            </h1>
            <span className="cooking-videos-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>
                    Unleash Your Inner Chef with Our Exclusive Recipes
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
            <div className="cooking-videos-btn-group">
              <button className="buttonFilled">Explore Recipes</button>
              <button className="buttonFlat">Learn More →</button>
            </div>
          </div>
        </div>
      </div>
      <div className="cooking-videos-gallery">
        <div className="cooking-videos-gallery1">
          <div className="cooking-videos-container02">
            <div className="cooking-videos-container03"></div>
          </div>
          <div className="cooking-videos-container04">
            <div className="cooking-videos-container05"></div>
          </div>
          <div className="cooking-videos-container06"></div>
          <div className="cooking-videos-container07"></div>
          <div className="cooking-videos-container08"></div>
          <div className="cooking-videos-container09"></div>
        </div>
      </div>
      <div className="cooking-videos-features">
        <div className="cooking-videos-features-container featuresContainer">
          <div className="cooking-videos-features1">
            <div className="cooking-videos-container10">
              <span className="overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="cooking-videos-features-heading heading2">
                Exciting Features Await You
              </h2>
              <span className="cooking-videos-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Explore the unique features that make our website a
                      culinary delight!
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
            <div className="cooking-videos-container11">
              <FeatureCard3
                heading="Cooking Videos"
                subHeading="Watch step-by-step cooking videos to guide you through the recipe creation process."
              ></FeatureCard3>
              <FeatureCard3
                heading="Exclusive Content"
                subHeading="Access a wide range of exclusive recipes and cooking tips only available to members."
              ></FeatureCard3>
              <FeatureCard5></FeatureCard5>
              <FeatureCard3
                heading="Alphabetical Recipe Viewing"
                subHeading="Easily browse through recipes alphabetically to find your favorite dishes quickly."
              ></FeatureCard3>
              <FeatureCard3
                heading="Restaurant Information"
                subHeading="Discover restaurant recommendations and reviews to enhance your dining experience."
              ></FeatureCard3>
              <FeatureCard4
                heading="Enhanced Search Functionality"
                subHeading="Find recipes quickly and easily with advanced search options"
              ></FeatureCard4>
            </div>
          </div>
        </div>
      </div>
      <div className="cooking-videos-gallery2">
        <div className="cooking-videos-gallery3">
          <div className="cooking-videos-container12">
            <div className="cooking-videos-container13">
              <div className="cooking-videos-container14">
                <video
                  src
                  /* poster="https://play.teleporthq.io/static/svg/videoposter.svg" */
                  className="cooking-videos-video"
                ></video>
                <Link to="/videos" className="cooking-videos-navlink">
                  <span>Cooking Video 1</span>
                  <br></br>
                </Link>
              </div>
              <div className="cooking-videos-container15">
                <video
                  src
                  /* poster="https://play.teleporthq.io/static/svg/videoposter.svg" */
                  className="cooking-videos-video1"
                ></video>
                <Link to="/videos" className="cooking-videos-navlink1">
                  <span>Cooking Video 2</span>
                  <br></br>
                </Link>
              </div>
            </div>
            <div className="cooking-videos-container16">
              <div className="cooking-videos-container17">
                <video
                  src
                  /* poster="https://play.teleporthq.io/static/svg/videoposter.svg" */
                  className="cooking-videos-video2"
                ></video>
                <Link to="/videos" className="cooking-videos-navlink2">
                  <span>Cooking Video 3</span>
                  <br></br>
                </Link>
              </div>
              <div className="cooking-videos-container18">
                <video
                  src
                  /* poster="https://play.teleporthq.io/static/svg/videoposter.svg" */
                  className="cooking-videos-video3"
                ></video>
                <Link to="/videos" className="cooking-videos-navlink3">
                  <span>Cooking Video 4</span>
                  <br></br>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cooking-videos-banner">
        <div className="cooking-videos-banner1 bannerContainer">
          <h1 className="cooking-videos-banner-heading heading2">
            Discover a World of Culinary Delights
          </h1>
          <span className="cooking-videos-banner-sub-heading bodySmall">
            <span>
              <span>
                <span>
                  Explore a wide range of recipes from traditional to fusion
                  dishes with our exclusive subscription plans. Whether
                  you&apos;re a beginner or a seasoned chef, our platform offers
                  something for everyone. Enhance your cooking skills with our
                  step-by-step videos and find inspiration for your next meal.
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
          <button className="cooking-videos-banner-button buttonFilled">
            Get Started
          </button>
        </div>
      </div>
      <div className="cooking-videos-faq">
        <div className="faqContainer">
          <div className="cooking-videos-faq1">
            <div className="cooking-videos-container19">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="cooking-videos-text56 heading2">
                Common questions
              </h2>
              <span className="cooking-videos-text57 bodyLarge">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
              </span>
            </div>
            <div className="cooking-videos-container20">
              <Question14
                answer="We offer a wide range of recipes including traditional, fusion, and international dishes to cater to all tastes."
                question="What types of recipes are available on your website?"
              ></Question14>
              <Question14
                answer="Yes, we have recipes for all levels of chefs, including beginners. Each recipe comes with clear instructions to help you create delicious meals."
                question="Are the recipes suitable for beginners?"
              ></Question14>
              <Question14
                answer="Subscribing gives you access to exclusive content, features, and cooking videos that will enhance your culinary experience."
                question="What are the benefits of subscribing to your website?"
              ></Question14>
              <Question14
                answer="Yes, our website has enhanced search functionality that allows you to easily find recipes based on ingredients, cuisine, or dietary preferences."
                question="Can I search for specific recipes on your website?"
              ></Question14>
              <Question14
                answer="We regularly update our recipe collection with new and exciting dishes for you to explore and enjoy."
                question="How often do you add new recipes to your collection?"
              ></Question14>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default CookingVideos
