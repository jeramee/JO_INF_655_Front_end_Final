// views/places.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'
import Header from '../components/header' // Import the Header component
import Header3 from '../components/header3'
import GalleryCard1 from '../components/gallery-card1';
import Footer from '../components/footer'
import './places.css'

const Places = (props) => {
  return (
    <div className="places-container">
      <Helmet>
        <title>Places - I Want Food</title>
        <meta property="og:title" content="Places - I Want Food" />
      </Helmet>
      <div className="places-header">
      <Header></Header>
      <Header3></Header3>
      <div className="home-hero heroContainer">
        <div className="home-container1">
          <div className="home-container2">
            <span className="home-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>
                    Your one-stop destination for all things food-related
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
            <h1 className="home-hero-heading">
              <span className="home-text14">
                Think about time when arrive cave. Have few things: fire, meat,
                plant. But no know how to start! Confused like mammoth in
                snowstorm. What do?
              </span>
              <span> 🤔</span>
            </h1>
            <span className="home-text16">
              What caveman is saying: &quot;Sometimes when I get home, I look at
              the few ingredients I’ve got and just can’t figure out where to
              start with cooking. It’s like my brain just goes blank&quot;
            </span>
            <img
              alt="pastedImage"
              src="/external/pastedimage-8qme-1100w.png"
              className="home-pasted-image"
            />
            <Link to="/create-recipe-view" className="home-start-here button">
              Start here
            </Link>
          </div>
        </div>
      </div>
      <div className="home-hero1"></div>
      <div className="home-features">
        <div className="featuresContainer">
          <video
            src="https://youtu.be/6KiZ_u_CkzU?feature=shared"
            loop="true"
            poster="https://youtu.be/6KiZ_u_CkzU?feature=shared"
            preload="none"
            autoPlay="true"
            className="home-video"
          ></video>
          <div className="home-features1">
            <div className="home-container3">
              <span className="home-text17">
                <span className="home-text18">All we have to offer</span>
                <br className="Heading"></br>
              </span>
              <h2 className="home-features-heading heading1">
                So go out of the cave and start to dig
              </h2>
              <span className="home-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Discover a world of culinary delights at your fingertips
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
            <div className="home-container4">
              <div className="home-steps">
                <div className="home-gallery">
                  <GalleryCard1
                    title="USA"
                    imageAlt=" "
                    imageSrc="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGZvb2R8ZW58MHx8fHwxNzEyODk4MzkwfDA&amp;ixlib=rb-4.0.3&amp;h=1500"
                    subtitle="Barbecue"
                    rootClassName="rootClassName"
                  ></GalleryCard1>
                  <GalleryCard1
                    title="USA"
                    imageSrc="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxmb29kfGVufDB8fHx8MTcxMjg5ODM5MHww&amp;ixlib=rb-4.0.3&amp;h=1500"
                    subtitle="Hamburguer"
                    rootClassName="rootClassName1"
                  ></GalleryCard1>
                  <GalleryCard1
                    title="USA"
                    imageSrc="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGZvb2R8ZW58MHx8fHwxNzEyODk4MzkwfDA&amp;ixlib=rb-4.0.3&amp;h=1500"
                    subtitle="Waffles"
                    rootClassName="rootClassName2"
                  ></GalleryCard1>
                  <GalleryCard1
                    title="India"
                    imageSrc="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGZvb2R8ZW58MHx8fHwxNzEyODk4MzkwfDA&amp;ixlib=rb-4.0.3&amp;h=1500"
                    subtitle="Salad with mango"
                    rootClassName="rootClassName3"
                  ></GalleryCard1>
                  <GalleryCard1
                    title="Brazil"
                    imageSrc="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fGZvb2R8ZW58MHx8fHwxNzEyODk4MzkwfDA&amp;ixlib=rb-4.0.3&amp;h=1500"
                    subtitle="Strawberry cake"
                    rootClassName="rootClassName4"
                  ></GalleryCard1>
                  <GalleryCard1
                    title="USA"
                    imageSrc="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxmb29kfGVufDB8fHx8MTcxMjg5ODM5MHww&amp;ixlib=rb-4.0.3&amp;h=1500"
                    subtitle="Bread banana and blueberries"
                    rootClassName="rootClassName5"
                  ></GalleryCard1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
    </div>
  )
}

export default Places
