import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {markChallengeDone} from '../store/userStats'

export class UserStats extends React.Component {
  constructor() {
    super()

    this.state = {
      completed: 'No',
      testsPassed: 'No',
      className: ''
    }
    this.markComplete = this.markComplete.bind(this)
  }

  markComplete(userId, challengeId) {
    this.setState({...this.state, completed: 'Yes'})
    this.props.markDone(userId, challengeId)
  }

  render() {
    const {problem, keywordsGot, keywordsNotGot} = this.props

    return (
      <div className="borderCard" id="stats">
        <div className="userHomeCard">
          <p>Your problem was: {problem}</p>
          <p>In your approach you got the following keywords:</p>
          {keywordsGot.map((word, idx) => (
            <p key={idx} id="keywordsGot">
              {word}
            </p>
          ))}
          <p>Other keywords you should consider are: </p>
          <div className="keywords">
            {keywordsNotGot.map((word, idx) => (
              <p key={idx} id="keywordsNotGot">
                {word}
              </p>
            ))}
          </div>
          <hr />
          <p>Did you pass the test specs?</p>
          <div className="container">
            <p>{this.state.testsPassed}</p>
            <button
              className="ynbutton"
              style={{backgroundColor: 'red'}}
              type="button"
              onClick={() => this.setState({testsPassed: 'Yes'})}
            >
              Yes
            </button>
            <button
              className="ynButton"
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
              className="ynButton"
              type="button"
              onClick={() =>
                this.markComplete(this.props.userId, this.props.problemId)
              }
            >
              Yes
            </button>
            <button
              className="ynButton"
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
    userId: state.user.id,
    email: state.user.email,
    problem: state.problems.selected.name,
    keywordsGot: state.userStats.keywords.gotKeywords,
    keywordsNotGot: state.userStats.keywords.notGotKeywords,
    problemId: state.problems.selected.id
  }
}

const mapDispatch = dispatch => {
  return {
    markDone: (userId, challengeId) =>
      dispatch(markChallengeDone(userId, challengeId))
  }
}

export default connect(mapState, mapDispatch)(UserStats)
