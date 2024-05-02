import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './upload.css'

const Upload = (props) => {
  return (
    <div className="upload-container">
      <Link to="/videos" className="upload-upload button">
        {props.upload}
      </Link>
    </div>
  )
}

Upload.defaultProps = {
  upload: 'Upload',
}

Upload.propTypes = {
  upload: PropTypes.string,
}

export default Upload
