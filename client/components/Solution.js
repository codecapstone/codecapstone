import React from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router-dom'

class Solution extends React.Component {
  constructor() {
    super()
    this.structure = this.structure.bind(this)
  }

  structure = sol => {
    let formatted = ''
    const endOfLine = '{};'

    for (let i = 0; i < sol.length; i++) {
      let cur = sol[i]
      if (endOfLine.includes(cur)) {
        cur += '\n'
      }
      formatted += cur
    }
    return formatted
  }

  render() {
    const {solutions} = this.props.challenge

    if (!solutions) return <div>Loading the solution...</div>

    const formattedSol = this.structure(solutions[0])
    console.log('formattedSol', formattedSol)
    console.log('SOLUTION', solutions[0])

    return (
      <div className="content">
        <div id="solutionFormat">
          <h3>Solution</h3>
          <code>{formattedSol}</code>
        </div>

        <div />
        <Link to="/challenges">Click here to search for a new challenge!</Link>
      </div>
    )
  }
}

const mapState = state => ({
  challenge: state.problems.selected
})

export default connect(mapState)(Solution)
