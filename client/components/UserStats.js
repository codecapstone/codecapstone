import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {markChallengeDone} from '../store/userStats'

export class UserStats extends React.Component {
  constructor() {
    super()

    this.state = {
      isCompleted: false
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentDidMount() {
    const {userId, challengeId} = this.props
    // this.handleInputChange(event, userId, challengeId, this.state.isCompleted)
  }

  handleInputChange(event, userId, challengeId, isCompleted) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({[name]: value})
    this.props.markDone(userId, challengeId, isCompleted)
  }

  render() {
    const {
      problem,
      keywordsGot,
      keywordsNotGot,
      userId,
      challengeId
    } = this.props

    console.log('STATE', this.state)
    return (
      <div className="borderCard" id="stats">
        <div className="userHomeCard">
          <h3>Your problem was: {problem}</h3>
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
          <div className="container">
            <input
              id="checkbox"
              name="isCompleted"
              type="checkbox"
              checked={this.state.completed}
              onChange={() =>
                this.handleInputChange(
                  event,
                  userId,
                  challengeId,
                  !this.state.isCompleted
                )
              }
            />
            I've completed this challenge
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
    selected: state.problems.selected,
    challengeId: state.problems.selected.id
  }
}

const mapDispatch = dispatch => {
  return {
    markDone: (userId, challengeId, completed) =>
      dispatch(markChallengeDone(userId, challengeId, completed))
  }
}

export default connect(mapState, mapDispatch)(UserStats)
