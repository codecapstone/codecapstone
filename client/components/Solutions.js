import React from 'react'
import {connect} from 'react-redux'
import {Solution} from './Solution'

class Solutions extends React.Component {
  render() {
    const {solutions, name} = this.props.challenge

    if (!solutions) return <div>Loading the solution...</div>

    return (
      <div id="solutionsContainer">
        <h3>Solutions for {name}</h3>
        <div id="solutionsDiv">
          {solutions.map((solution, idx) => {
            return <Solution key={idx} idx={idx} solution={solution} />
          })}
        </div>
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
