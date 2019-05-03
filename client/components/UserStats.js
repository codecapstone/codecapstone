import React from 'react'

import {connect} from 'react-redux'

export class UserStats extends React.Component {
  constructor() {
    super()

    this.state = {
      completed: false,
      testsPassed: false
    }
  }

  render() {
    const {email, problem, keywordsGot, keywordsNotGot} = this.props

    return (
      <div>
        <h3>Welcome, {email}</h3>
        <p>Your problem was: {problem}</p>
        <p>In your approach you got the following keywords:</p>
        {keywordsGot.map((word, idx) => <p key={idx}>{word}</p>)}
        <p>
          Other keywords you should consider are:{' '}
          {keywordsNotGot.map((word, idx) => <p key={idx}>{word}</p>)}
        </p>
        <p>Did you pass the test specs?</p>
        <button onClick={() => this.setState({testsPassed: true})}>Yes</button>
        <button>No</button>
        <p>Do you want to mark this challenge as complete?</p>
        <button onClick={() => this.setState({completed: true})}>Yes</button>
        <button>No</button>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    problem: state.problems.selected.name,
    keywordsGot: state.userStats.keywords.gotKeywords,
    keywordsNotGot: state.userStats.keywords.notGotKeywords
  }
}

export default connect(mapState)(UserStats)
