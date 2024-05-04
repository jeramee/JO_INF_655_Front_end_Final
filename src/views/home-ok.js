import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Header from '../components/header';
import Header3 from '../components/header3';
import Footer from '../components/footer';
import GalleryCard1 from '../components/gallery-card1';
import './home-ok.css';

const Home = (props) => {
  useEffect(() => {
    // Check if a font is being applied
    const startHereLink = document.querySelector('.home-ok-start-here');
    if (startHereLink) {
      // Log a message indicating that the element is found
      console.log('Start here link found:', startHereLink);

      // Add a temporary style to change the font
      startHereLink.style.fontFamily = 'Arial, sans-serif'; // Change the font to Arial

      // Check if the font has changed
      const computedFontFamily = window.getComputedStyle(startHereLink).fontFamily;
      console.log('Computed font family:', computedFontFamily);
    } else {
      // Log a message indicating that the element is not found
      console.log('Start here link not found');
    }
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts
  
  return (
    <div className="home-ok-container">
      <Helmet>
        <title>Home - I Want Food</title>
        <meta property="og:title" content="Home - I Want Food" />
      </Helmet>
      <Header></Header>
      <Header3></Header3>
      
      <div className="home-container">
        <div className="home-ok-container1">
          <div className="home-ok-container2">
            <span className="home-ok-hero-sub-heading bodyLarge">
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
            <h1 className="home-ok-hero-heading">
              <span className="home-ok-text14">
                Think about time when arrive cave. Have few things: fire, meat,
                plant. But no know how to start! Confused like mammoth in
                snowstorm. What do?
              </span>
              <span> 🤔</span>
            </h1>
            <span className="home-ok-text16">
              What caveman is saying: &quot;Sometimes when I get home, I look at
              the few ingredients I’ve got and just can’t figure out where to
              start with cooking. It’s like my brain just goes blank&quot;
            </span>
            <img
              alt="pastedImage"
              src="/external/pastedimage-8qme-1100w.png"
              className="home-ok-pasted-image"
            />
            <Link to="/ingredients-ok" className="home-ok-start-here">
              <div className="home-ok-btn-group">
                <button className="home-ok-hero-button buttonFilled">
                  Start here
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="home-ok-hero1"></div>
      <div className="home-ok-features">
        <div className="featuresContainer">
          <video
            src
            poster="https://play.teleporthq.io/static/svg/videoposter.svg"
            className="home-ok-video"
          ></video>
          <div className="home-ok-features1">
            <div className="home-ok-container3">
              <span className="home-ok-text17">
                <span className="home-ok-text18">All we have to offer</span>
                <br className="Heading"></br>
              </span>
              <h2 className="home-ok-features-heading heading1">
                So go out of the cave and start to dig
              </h2>
              <span className="home-ok-features-sub-heading bodyLarge">
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
            <div className="home-ok-container4">
              <div className="home-ok-steps">
                <div className="home-ok-gallery">
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
  );
};

export default Home;
