import React from 'react'
import {connect} from 'react-redux'
import {Solution} from './Solution'

import Prompt from './Prompt'

import {getCurrentProblem} from '../store/problems'


class Solutions extends React.Component {
  componentDidMount() {
    this.props.getCurrentProblem()
  }

  render() {
    const {solutions, name} = this.props.challenge

    if (!solutions) return <div>Loading the solution...</div>

    return (
      <div className="largeViewBorderCard">
        <Prompt />

        {solutions.map((solution, idx) => {
          return <Solution key={idx} idx={idx} solution={solution} />
        })}

        <div
          className="solutionsNextBtn"
          onClick={() => this.props.history.push('/stats')}
        >
          Check your stats!
        </div>
      </div>
    )
  }
}

const mapDispatch = {getCurrentProblem}

const mapState = state => ({
  challenge: state.problems.selected
})

export default connect(mapState, mapDispatch)(Solutions)
