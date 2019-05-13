import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export const GuestCallout = props => {
  return (
    <div className="userHomeCard">
      <h1>Hello programmers!</h1>
      <h3>
        Code Aloud is here to help you improve your algorithm and technical
        interviewing skills. <br /> <br />
        You can try an example problem by following the link below, or sign up
        for free to access our library of challenges and lessons.
      </h3>
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
