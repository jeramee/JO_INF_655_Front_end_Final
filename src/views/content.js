import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Header3 from '../components/header3'
import Component1 from '../components/component1'
import Footer from '../components/footer'
import './content.css'

const Content = (props) => {
  return (
    <div className="content-container">
      <Helmet>
        <title>Content - I Want Food</title>
        <meta
          property="og:title"
          content="Content - I Want Food"
        />
      </Helmet>
      <Header></Header>
      <Header3></Header3>
      <Component1></Component1>
      <Footer></Footer>
    </div>
  )
}

export default Content
