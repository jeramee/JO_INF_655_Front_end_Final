import React, { useEffect } from 'react';

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './code-embed.css'

const CodeEmbed = (props) => {
  return (
    <div className={`code-embed-container ${props.rootClassName} `}>
      <div className="code-embed-container1">
        <div className="code-embed-container2">
          <Script
            html={`<div className="Container w-96 h-96 relative">
        <div className="Container h-60 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
          <div className="Container w-56 h-60 relative">
            <div className="Margin h-64 left-[-35.94px] top-[-17.48px] absolute flex-col justify-start items-start inline-flex">
              <div className="MaskGroup w-64 h-64 relative">
                <div className="Mask pl-9 pt-4 left-0 top-0 absolute flex-col justify-end items-center inline-flex" />
                <div className="Container w-64 left-0 top-0 absolute justify-center items-center inline-flex">
                  <div className="Container grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
                    <div className="Link self-stretch justify-center items-start inline-flex">
                      <div className="Container justify-end items-center flex">
                        <div className="Container w-96 self-stretch pb-32 flex-col justify-center items-start inline-flex">
                          <img className="Bfbd242c8594263512817f5c9dd03Png w-96 h-64 relative" src="https://via.placeholder.com/395x263" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Container h-7 left-[15.23px] top-[144.22px] absolute flex-col justify-center items-start inline-flex">
              <div className="Container h-7 flex-col justify-start items-start flex">
                <div className="Container self-stretch h-7 px-12 flex-col justify-start items-center flex">
                  <div className="LinkProfile self-stretch text-center text-black text-2xl font-normal font-['Inter'] underline leading-relaxed">Profile</div>
                </div>
              </div>
            </div>
          </div>
        </div>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

CodeEmbed.defaultProps = {
  rootClassName: '',
}

CodeEmbed.propTypes = {
  rootClassName: PropTypes.string,
}

export default CodeEmbed
