import React from 'react'
import {connect} from 'react-redux'
import {fetchProblems, selectProblem} from '../store/problems'
import {singleLesson} from '../store/lesson'
import {addChallengeToStats} from '../store/userStats'
import {clearInput} from '../store/userInput'
import {Link} from 'react-router-dom'

class Challenges extends React.Component {
  constructor() {
    super()
    this.startProblem = this.startProblem.bind(this)
  }
  componentDidMount() {
    this.props.getProblems()
  }

  startProblem(userId, probId, topicId) {
    this.props.addProblemToStats(userId, probId)
    this.props.setProblem(probId)
    this.props.singleLesson(topicId)
    this.props.clearInput()
  }

  render() {
    return (
      <div className="borderCard">
        <div className="userHomeCard" id="challenges">
          <div>
            <h3>Pick Your Challenge!</h3>
          </div>
          <div className="container">
            {this.props.problems.map(problem => (
              <div
                className="challengeLink"
                key={problem.id}
                onClick={() =>
                  this.startProblem(
                    this.props.userId,
                    problem.id,
                    problem.topicId
                  )
                }
              >
                <Link to="/prompt">
                  {problem.name} - {problem.level}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    userId: state.user.id,
    problems: state.problems.all
  }
}

const mapDispatch = dispatch => {
  return {
    getProblems: () => dispatch(fetchProblems()),
    setProblem: id => dispatch(selectProblem(id)),
    addProblemToStats: (userId, probId) =>
      dispatch(addChallengeToStats(userId, probId)),
    singleLesson: id => dispatch(singleLesson(id)),
    clearInput: () => dispatch(clearInput())
  }
}

export default connect(mapState, mapDispatch)(Challenges)
