import React from 'react'
import {connect} from 'react-redux'
import {Solution} from './Solution'
import Prompt from './Prompt'

class Solutions extends React.Component {
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

const mapState = state => ({
  challenge: state.problems.selected
})

export default connect(mapState)(Solutions)
