import React from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router-dom'

class Prompt extends React.Component {
  render() {
    const {name, prompt} = this.props.challenge

    if (!prompt) return <div>Loading your challenge...</div>

    return (
      <div className="content">
        <div className="userHomeCard">
          <h3>Your challenge is {name}</h3>
          <p>The prompt is: </p>
          <p id="prompt">{prompt}</p>
          <h3>Say/type 'start' to your InterviewBot to get started!</h3>
        </div>

        <div />
        <Link to="/examples" className="nextBtn">
          Next: Examples
        </Link>
      </div>
    )
  }
}

const mapState = state => ({
  challenge: state.problems.selected
})

export default connect(mapState)(Prompt)
