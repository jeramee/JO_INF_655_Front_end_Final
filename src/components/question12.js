import React from 'react'

import PropTypes from 'prop-types'

import './question12.css'

const Question12 = (props) => {
  return (
    <div className="question12-container">
      <span className="question12-text heading3">{props.question}</span>
      <span className="bodySmall">{props.answer}</span>
    </div>
  )
}

Question12.defaultProps = {
  answer:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
  question: 'What types of cars do you sell?',
}

Question12.propTypes = {
  answer: PropTypes.string,
  question: PropTypes.string,
}

export default Question12
