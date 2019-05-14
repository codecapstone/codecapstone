import React from 'react'
import {Route, Switch, Link} from 'react-router-dom'
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
            frameBorder="0"
          />
          <div id="getStarted">
            <div className="serifFont">
              Sign up, or check out our example challenge!
              <div id="goButton">
                <Link to="/instructions">
                  <h3>Let's Go!</h3>
                </Link>
              </div>
              <i className="far fa-comments" />
            </div>
          </div>
        </div>
        <AboutUs />
      </div>
    </div>
  )
}
