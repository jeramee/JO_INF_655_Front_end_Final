import React from 'react'

import PropTypes from 'prop-types'

import './feature-card.css'

const FeatureCard = (props) => {
  return (
    <div
      className={`feature-card-feature-card featuresCard ${props.rootClassName} `}
    >
      <div className="feature-card-container">
        <div className="feature-card-container1">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="feature-card-image"
          />
          <h3 className="feature-card-heading Heading">{props.heading}</h3>
        </div>
        <span className="feature-card-text bodyLarge">{props.subHeading}</span>
      </div>
    </div>
  )
}

FeatureCard.defaultProps = {
  imageAlt: 'image',
  subHeading:
    "Apple pie, Mac n' cheese, Texas Barbecue , Fried Chicken, and much more tipical tastes",
  heading: 'United State of America',
  rootClassName: '',
  imageSrc:
    'https://images.unsplash.com/photo-1467912407355-245f30185020?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHx1c2F8ZW58MHx8fHwxNzEyOTAwMzE3fDA&ixlib=rb-4.0.3&q=80&w=200',
}

FeatureCard.propTypes = {
  imageAlt: PropTypes.string,
  subHeading: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default FeatureCard
