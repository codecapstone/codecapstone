import React from 'react'
import {connect} from 'react-redux'
import {Solution} from './Solution'

class Solutions extends React.Component {
  render() {
    const {solutions, name} = this.props.challenge

    if (!solutions) return <div>Loading the solution...</div>

    return (
      <div className="solutionsBorderCard">
        <h3>Solutions for {name}</h3>
        {solutions.map((solution, idx) => {
          return <Solution key={idx} idx={idx} solution={solution} />
        })}
        <div
          className="bigONextBtn"
          onClick={() => this.props.history.push('/challenges')}
        >
          Click here to search for a new challenge!
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  challenge: state.problems.selected
})

export default connect(mapState)(Solutions)
