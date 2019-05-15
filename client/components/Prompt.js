import React from 'react'
import {connect} from 'react-redux'
import {getCurrentProblem} from '../store/problems'

class Prompt extends React.Component {
  componentDidMount() {
    this.props.getCurrentProblem()
  }

  render() {
    const {name, prompt} = this.props.challenge

    if (!prompt) return <div>Loading your challenge...</div>

    return (
      <div className="largeViewCard">
        <h3>Your challenge is {name}</h3>
        {/* <p>The prompt is: </p> */}
        <div id="prompt">{prompt}</div>
        {/* </div> */}
      </div>
    )
  }
}

const mapDispatch = {getCurrentProblem}

const mapState = state => ({
  challenge: state.problems.selected
})

export default connect(mapState, mapDispatch)(Prompt)
