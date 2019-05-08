import React from 'react'
import {connect} from 'react-redux'
import {fetchProblems, selectProblem} from '../store/problems'
import {Link} from 'react-router-dom'

export class Challenges extends React.Component {
  componentDidMount() {
    this.props.getProblems()
  }

  render() {
    return (
      <div className="content">
        <div className="userHomeCard">
          <h3>Pick Your Challenge!</h3>
          <br />
          <div>
            {this.props.problems.map(problem => (
              <div
                className="challengeLink"
                key={problem.id}
                onClick={() => this.props.setProblem(problem.id)}
              >
                <Link to="/prompt">{problem.name}</Link>
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
    problems: state.problems.all
  }
}

const mapDispatch = dispatch => {
  return {
    getProblems: () => dispatch(fetchProblems()),
    setProblem: id => dispatch(selectProblem(id))
  }
}

export const ChallengesView = connect(mapState, mapDispatch)(Challenges)

export default ChallengesView
