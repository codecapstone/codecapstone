import React from 'react'
import {connect} from 'react-redux'
import {selectProblem} from '../store/problems'

export class Challenges extends React.Component {
  constructor() {
    super()
    this.chooseProblem = this.chooseProblem.bind(this)
  }

  chooseProblem(id) {
    this.props.setProblem(id)
    this.props.history.push('/prompt')
  }

  render() {
    return (
      <div className="content">
        <div>
          <div>Pick Your Challenge</div>
          <br />
          <div>
            {this.props.problems.all.map(problem => (
              <div onClick={() => this.chooseProblem(this.props.problem.id)}>
                {this.props.problem.name}
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
    setProblem: dispatch(id => selectProblem(id))
  }
}

export const ChallengesView = connect(mapState, mapDispatch)(Challenges)

export default ChallengesView
