import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'
import Header from '../components/header'
import Header3 from '../components/header3'
import Footer from '../components/footer'
import FeatureCard from '../components/feature-card'
import './places.css'

const Places = (props) => {
  return (
    <div className="places-container">
      <Helmet>
        <title>Places - I Want Food</title>
        <meta property="og:title" content="Places - I Want Food" />
      </Helmet>
      <Header />
      <Header3 />          
        <div className="places-hero">
        <div className="places-hero1 heroContainer">
          <div className="places-container1">
            <div className="places-container2">
              <span className="places-hero-sub-heading bodyLarge">
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
              <h1 className="places-hero-heading">
                Discover a World of Culinary Delights
              </h1>
            </div>
            <Link
                to="/dynamic-recipe-view"
                className="recipes-navlink4 button"
              >
                Choose the place
              </Link>
          </div>
          <img
            alt="pastedImage"
            src="/external/pastedimage-8qme-1100w.png"
            className="places-pasted-image1"
          />
        </div>
      </div>
      <div className="places-features">
        <div className="featuresContainer">
          <div className="places-features1">
            <div className="places-container3">
              <span className="places-text20">
                <span className="places-text21">Travel around the world</span>
                <br className="Heading"></br>
              </span>
              <h2 className="places-features-heading">
                Explore Exciting Tastes
              </h2>
              <span className="places-features-sub-heading bodyLarge">
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
            <div className="places-container4">
              <FeatureCard
                heading="United State of America"
                subHeading="Apple pie, Mac n' cheese, Texas Barbecue , Fried Chicken, and much more tipical tastes"
                rootClassName="feature-card-root-class-name28"
              ></FeatureCard>
              <FeatureCard
                heading="Japan"
                imageSrc="https://images.unsplash.com/photo-1676286155316-b6098c4fd35a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ4fHxqYXBhbiUyMGZsYWd8ZW58MHx8fHwxNzEyOTAxOTc0fDA&amp;ixlib=rb-4.0.3&amp;h=200"
                subHeading="Sushi, Sashimi, Tempura, Tsukemono and Tonkotsu  Ramen"
                rootClassName="feature-card-root-class-name29"
              ></FeatureCard>
              <FeatureCard
                heading="Brazil"
                imageSrc="https://images.unsplash.com/photo-1527374071603-76de89807336?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fEJyYXppbHxlbnwwfHx8fDE3MTI5MDEyMjh8MA&amp;ixlib=rb-4.0.3&amp;h=200"
                subHeading="Feijoada, Vatapá, Pão de queijo, Moqueca e Coxinha"
                rootClassName="feature-card-root-class-name30"
              ></FeatureCard>
              <FeatureCard
                heading="France"
                imageSrc="https://images.unsplash.com/photo-1675855508131-798d42b6f1ee?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDYwfHxmcmFuY2UlMjBmbGFnfGVufDB8fHx8MTcxMjkwMjU4N3ww&amp;ixlib=rb-4.0.3&amp;h=200"
                subHeading="Baguette, Madeleines, Macarons, Crepes and Choux a la creme"
                rootClassName="feature-card-root-class-name31"
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Places
