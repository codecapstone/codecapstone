import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import checkers from '../checkerFunctions'

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
    const {name, prompt, examples, functionName} = this.props.challenge

    if (!prompt) return <div>Loading your challenge...</div>

    return (
      <div className="content">
        <div className="userHomeCard">
          <h3>Your challenge is {name}</h3>
          <p>The prompt is: </p>
          <p id="prompt">{prompt}</p>
          <div>
            <p>
              Type your examples into InterviewBot making sure you use the key
              word "example" before you write your actual example. E.g. "example
              my example is ..."
            </p>
          </div>
          {examples ? this.state.examples : null}
        </div>

        <div />

        <div id="exmplPgBtns">
          <Link to="/approach" className="nextBtn">
            Next: Approach
          </Link>
          {checkers[functionName] ? (
            <button
              type="button"
              className="nextBtn"
              onClick={() => this.handleClick(examples)}
            >
              Click here to see our example!
            </button>
          ) : (
            <p />
          )}
        </div>
        <div id="exmplPgBtns">
          <Link to="/example-check" className="nextBtn">
            Check Your Examples
          </Link>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  challenge: state.problems.selected
})

export default connect(mapState)(Examples)
