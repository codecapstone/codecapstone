import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Login, Signup, AboutUs} from './index'

export const GuestHome = props => {
  return (
    <div>
      <div id="homescreen" className="homeBorderCard">
        <div className="homeLeft">
          <iframe
            id="slides"
            src="https://docs.google.com/presentation/d/e/2PACX-1vQI_iHXVuo4SpwUE5GafZX2YuAQMA-oQdK8VWkq4D2R_vITz-i9PfXPhswi59QgkSAVbMsA2Kk0Fhor/embed?start=true&loop=true&delayms=2000&rm=minimal"
            width="532"
            height="300"
            margin="20"
          />
          <div id="getStarted">
            <div>
              <h2>Sign up for full access</h2>
            </div>
            <i className="fas fa-comments" />
            <div>
              <a href="/prompt">
                <h2>...or check out our example challenge!</h2>
              </a>
            </div>
          </div>
        </div>
        <AboutUs />
      </div>
    </div>
  )
}
