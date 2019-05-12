import React from 'react'
import {getAgent} from '../store/chatbot'
import {connect} from 'react-redux'
import checkers from '../checkerFunctions'

class CodeView extends React.Component {
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
    this.props.getAgent()

    setTimeout(
      this.props.agent.example
        ? this.setState({
            input: this.props.agent.input,
            output: this.props.agent.output,
            correct: false
          })
        : null,
      1000
    )
  }
  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value})
  }
  handleSubmit() {
    if (checkers[this.props.problem.functionName]) {
      const calculated = checkers[this.props.problem.functionName](
        this.state.input
      )
      if (
        calculated ===
        `Ooops.  There's an error.  Check your input is of the correct type!`
      ) {
        this.setState({correct: calculated})
      } else if (calculated.toString() === this.state.output.toString()) {
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
    const {agent, problem} = this.props

    return (
      <div id="code">
        <div className="container">
          <div>
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
              <button type="button" onClick={this.handleSubmit}>
                Check
              </button>
            </form>
            <p>{this.state.correct}</p>
          </div>
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

export const Code = connect(mapState, mapDispatch)(CodeView)

export default Code
