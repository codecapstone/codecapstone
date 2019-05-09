import React from 'react'
import {Link} from 'react-router-dom'
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
    const {problem, keywordsGot, keywordsNotGot, problemId} = this.props
    console.log('problemId', problemId)

    return (
      <div className="content" id="stats">
        <div className="userHomeCard">
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
          <hr />
          <p>Did you pass the test specs?</p>
          <div className="container">
            <p>{this.state.testsPassed}</p>
            <button
              type="button"
              onClick={() => this.setState({testsPassed: 'Yes'})}
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => this.setState({testsPassed: 'No'})}
            >
              No
            </button>
          </div>
          <hr />
          <p>Do you want to mark this challenge as complete?</p>
          <div className="container">
            <p>{this.state.completed}</p>
            <button
              type="button"
              onClick={() => this.setState({completed: 'Yes'})}
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => this.setState({completed: 'No'})}
            >
              No
            </button>
          </div>

          <Link to="/solutions" id="solutionBtn">
            <h2>Click here to see the solution</h2>
          </Link>
        </div>
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
    keywordsNotGot: state.userStats.keywords.notGotKeywords,
    problemId: state.problems.selected.id
  }
}

export default connect(mapState)(UserStats)
