import React from 'react'
import {getAgent} from '../store/chatbot'
import {connect} from 'react-redux'
import checkers from '../checkerFunctions'

class exampleCheck extends React.Component {
  constructor() {
    super()
    this.state = {
      input: '',
      output: '',
      correct: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    if (this.props.agent.example) {
      this.setState({
        input: this.props.agent.input,
        output: this.props.agent.output,
        correct: false
      })
    }
  }
  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value})
  }
  handleSubmit() {
    if (checkers[this.props.problem.functionName]) {
      const calculated = checkers[this.props.problem.functionName](
        this.state.input
      )
      if (calculated === `Error`) {
        this.setState({
          correct: `Ooops.  There's an error.  Check your input is of the correct type!`
        })
      } else if (
        calculated.toString() === this.state.output.toString().toLowerCase()
      ) {
        this.setState({correct: 'Your examples pass our tests'})
      } else {
        this.setState({
          correct: 'Check your examples again.  They do not pass our tests.'
        })
      }
    } else {
      this.setState({
        correct: 'Sorry we do not have a checker for this problem yet.'
      })
    }
  }

  render() {
    const {functionName} = this.props.problem

    return (
      <div id="code">
        <div className="container">
          <br />
          <div>
            Please enter your example by giving a sample input and output.
          </div>
          <br />
          <form>
            {/* <div> */}
            <label>
              Input
              <input
                name="input"
                type="text"
                value={this.state.input}
                onChange={this.handleChange}
              />
            </label>

            <label>
              Output
              <input
                name="output"
                type="text"
                value={this.state.output}
                onChange={this.handleChange}
              />
            </label>
          </form>
          {checkers[functionName] ? (
            <div>
              <button type="button" onClick={this.handleSubmit}>
                Check
              </button>

              <p>{this.state.correct}</p>
            </div>
          ) : (
            <button type="button">Submit</button>
          )}
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    problem: state.problems.selected,
    agent: state.agent
  }
}

const mapDispatch = {getAgent}

export const Code = connect(mapState, mapDispatch)(exampleCheck)

export default Code
