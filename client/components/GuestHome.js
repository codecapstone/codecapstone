import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Login, Signup, AboutUs} from './index'

export const GuestHome = props => {
  return (
    <div className="container">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/" component={Login} />
      </Switch>
      <AboutUs />
    </div>
  )
}
