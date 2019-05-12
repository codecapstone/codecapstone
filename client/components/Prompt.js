import React from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router-dom'

class Prompt extends React.Component {
  render() {
    const {name, prompt} = this.props.challenge

    if (!prompt) return <div>Loading your challenge...</div>

    return (
      <div className="borderCard">
        <div className="content">
          <div className="userHomeCard">
            <h3>Your challenge is {name}</h3>
            <p>The prompt is: </p>
            <p id="prompt">{prompt}</p>
          </div>

          <div />
          <Link to="/examples" className="nextBtn">
            Create an example
          </Link>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  challenge: state.problems.selected
})

export default connect(mapState)(Prompt)
