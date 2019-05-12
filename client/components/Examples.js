import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {ExampleCheck} from '../components'

class Examples extends React.Component {
  constructor() {
    super()
    this.state = {
      examples: null
    }
  }

  handleClick(examples) {
    this.setState({
      examples: examples
    })
  }

  render() {
    const {name, prompt, examples} = this.props.challenge

    if (!prompt) return <div>Loading your challenge...</div>

    return (
      <div className="borderCard">
        <div className="userHomeCard">
          <h3>Your challenge is {name}</h3>
          <p>The prompt is: </p>
          <p id="prompt">{prompt}</p>
          {examples ? this.state.examples : null}

          <ExampleCheck />
        </div>

        <div />

        <div id="exmplPgBtns">
          <Link to="/approach" className="nextBtn">
            Next: Approach
          </Link>

          <button
            type="button"
            className="nextBtn"
            onClick={() => this.handleClick(examples)}
          >
            Click here to see our example!
          </button>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  challenge: state.problems.selected
})

export default connect(mapState)(Examples)
