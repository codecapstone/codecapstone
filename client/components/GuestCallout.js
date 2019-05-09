import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export const GuestCallout = props => {
  return (
    <div className="bodyComponent userHomeCard" id="guestCard">
      <h1>Hello programmers!</h1>
      <p>
        Code Aloud is here to help you improve your algorithm and technical
        interviewing skills. <br /> <br />
        Our approach encourages users to talk through the problem and their
        thinking before getting into the coding details.
      </p>
      <Link to="./prompt" className="container">
        <i className="far fa-comments" />
        <h2>Get Started!</h2>
      </Link>
    </div>
  )
}

const mapState = state => {
  return {
    problems: state.problems.all
  }
}

export default connect(mapState, null)(GuestCallout)
