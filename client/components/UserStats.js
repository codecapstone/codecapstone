import React from 'react'

import {connect} from 'react-redux'

export class UserStats extends React.Component {
  constructor() {
    super()

    this.state = {
      completed: 'No',
      testsPassed: 'No'
    }
  }

  render() {
    const {email, problem, keywordsGot, keywordsNotGot} = this.props

    return (
      <div className="content">
        <p>Your problem was: {problem}</p>
        <p>In your approach you got the following keywords:</p>
        {keywordsGot.map((word, idx) => (
          <p key={idx} id="keywordsGot">
            {word}
          </p>
        ))}
        <p>Other keywords you should consider are: </p>
        {keywordsNotGot.map((word, idx) => (
          <p key={idx} id="keywordsNotGot">
            {word}
          </p>
        ))}

        <p>Did you pass the test specs?</p>
        <p>{this.state.testsPassed}</p>
        <button onClick={() => this.setState({testsPassed: 'Yes'})}>Yes</button>
        <button onClick={() => this.setState({testsPassed: 'No'})}>No</button>
        <p>Do you want to mark this challenge as complete?</p>
        <p>{this.state.completed}</p>
        <button onClick={() => this.setState({completed: 'Yes'})}>Yes</button>
        <button onClick={() => this.setState({completed: 'No'})}>No</button>
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
