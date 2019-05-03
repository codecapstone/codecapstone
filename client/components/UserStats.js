import React from 'react'

import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserStats = props => {
  const {email, problem, keywordsGot, keywordsNotGot} = props

  return (
    <div>
      <h3>Welcome, {email}</h3>
      <p>Your problem was: {problem}</p>
      <p>In your approach you got the following keywords: {keywordsGot}</p>
      <p>Other keywords you should consider are: {keywordsNotGot}</p>
      <p>Did you pass the test specs?</p>
      <button>Yes</button>
      <button>No</button>
      <p>Do you want to mark this challenge as complete?</p>
      <button>Yes</button>
      <button>No</button>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    problem: state.problems.selected.name,
    keywordsGot: state.userStats.keywordsGot,
    keywordsNotGot: state.userStats.keywordsNotGot
  }
}

export default connect(mapState)(UserStats)
