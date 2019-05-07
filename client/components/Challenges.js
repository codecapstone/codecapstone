import React from 'react'
import {connect} from 'react-redux'
import {fetchProblems, selectProblem} from '../store/problems'

export class Challenges extends React.Component {
  constructor(props) {
    super(props)
    this.chooseProblem = this.chooseProblem.bind(this)
  }

  componentDidMount() {
    this.props.getProblems()
  }

  chooseProblem(id) {
    this.props.setProblem(id)
    this.props.history.push('/prompt')
  }

  render() {
    console.log('PROPS', this.props)
    return (
      <div className="content">
        <div className="userHomeCard">
          <h3>Pick Your Challenge</h3>
          <br />
          <div>
            {this.props.problems.map(problem => (
              <div
                key={problem.id}
                onClick={() => this.chooseProblem(problem.id)}
              >
                {problem.name}
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
