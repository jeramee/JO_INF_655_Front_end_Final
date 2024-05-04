import React, { useEffect } from 'react';

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Header3 from '../components/header3'
import FeatureCard3 from '../components/feature-card3'
import Question13 from '../components/question13'
import Footer from '../components/footer'
import './videos.css'

const Videos = (props) => {
  return (
    <div className="videos-container">
      <Helmet>
        <title>Videos - I Want Food</title>
        <meta
          property="og:title"
          content="Videos - I Want Food"
        />
      </Helmet>
      <Header></Header>
      <Header3></Header3>
      <div className="videos-hero">
        <div className="heroContainer videos-hero1">
          <div className="videos-container01">
            <h1 className="videos-hero-heading heading1">
              Discover Delicious Recipes
            </h1>
            <span className="videos-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>From Traditional to Fusion Creations</span>
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
            <div className="videos-btn-group">
              <button className="buttonFilled">Get Started</button>
              <button className="buttonFlat">Learn More →</button>
            </div>
          </div>
        </div>
      </div>
      <div className="videos-gallery">
        <div className="videos-gallery1">
          <div className="videos-container02">
            <div className="videos-container03"></div>
          </div>
          <div className="videos-container04">
            <div className="videos-container05"></div>
          </div>
          <div className="videos-container06"></div>
          <div className="videos-container07"></div>
          <div className="videos-container08"></div>
          <div className="videos-container09"></div>
        </div>
      </div>
      <div className="videos-features">
        <div className="featuresContainer">
          <div className="videos-features1">
            <div className="videos-container10">
              <span className="overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="videos-features-heading heading2">
                Exciting Features Await You
              </h2>
              <span className="videos-features-sub-heading bodyLarge">
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
            <div className="videos-container11">
              <FeatureCard3
                heading="Exclusive Content"
                subHeading="Access a wide range of exclusive recipes and cooking tips only available to members."
              ></FeatureCard3>
              <FeatureCard3
                heading="Cooking Videos"
                subHeading="Watch step-by-step cooking videos to guide you through the recipe creation process."
              ></FeatureCard3>
              <FeatureCard3
                heading="Alphabetical Recipe Viewing"
                subHeading="Easily browse through recipes alphabetically to find your favorite dishes quickly."
              ></FeatureCard3>
              <FeatureCard3
                heading="Restaurant Information"
                subHeading="Discover restaurant recommendations and reviews to enhance your dining experience."
              ></FeatureCard3>
            </div>
          </div>
        </div>
      </div>
      <div className="videos-banner">
        <div className="bannerContainer videos-banner1">
          <h1 className="videos-banner-heading heading2">
            Discover a World of Flavorful Recipes
          </h1>
          <span className="videos-banner-sub-heading bodySmall">
            <span>
              <span>
                <span>
                  Welcome to our culinary haven where you can explore a diverse
                  range of delectable recipes suited for every palate. Whether
                  you&apos;re a seasoned chef or just starting your cooking
                  journey, we have something for everyone. From classic dishes
                  to innovative fusion creations, our platform is your gateway
                  to culinary delight.
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
          <button className="buttonFilled">Explore Now</button>
        </div>
      </div>
      <div className="videos-faq">
        <div className="faqContainer">
          <div className="videos-faq1">
            <div className="videos-container12">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="videos-text48 heading2">Common questions</h2>
              <span className="videos-text49 bodyLarge">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
              </span>
            </div>
            <div className="videos-container13">
              <Question13
                answer="You can choose from different plans available on the website to access exclusive content."
                question="How can I access exclusive content on the website?"
              ></Question13>
              <Question13
                answer="The website offers a variety of delicious recipes ranging from traditional to fusion creations."
                question="What kind of recipes are available on the website?"
              ></Question13>
              <Question13
                answer="Yes, you can view recipes alphabetically on the website for easy navigation."
                question="Is there a feature to view recipes alphabetically?"
              ></Question13>
              <Question13
                answer="Yes, ingredient lists are provided for each recipe to help you prepare in advance."
                question="Can I find ingredient lists for the recipes?"
              ></Question13>
              <Question13
                answer="Yes, you can find restaurant information on the website to explore more dining options."
                question="Is restaurant information available on the website?"
              ></Question13>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Videos
