import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Login, Signup, AboutUs} from './index'

export const GuestHome = props => {
  return (
    <div className="container">
      <iframe
        id="slides"
        src="https://docs.google.com/presentation/d/e/2PACX-1vQI_iHXVuo4SpwUE5GafZX2YuAQMA-oQdK8VWkq4D2R_vITz-i9PfXPhswi59QgkSAVbMsA2Kk0Fhor/embed?start=true&loop=true&delayms=2000&rm=minimal"
        frameborder="0"
        width="532"
        height="300"
        allowfullscreen="false"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/" component={Login} />
      </Switch>
      <AboutUs />
    </div>
  )
}
