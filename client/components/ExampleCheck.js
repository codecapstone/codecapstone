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
    const {agent, problem} = this.props

    return (
      <div id="code" className="borderCard">
        <div className="container">
          <div className="userHomeCard">
            <div>Your Challenge: {problem.name}</div>
            <br />
            <div>
              {agent.input ? (
                <p>
                  Please check the entries in the form below and edit them if
                  necessary. (Sorry if there's an error - interviewBot is still
                  learning!) Then press 'Check' .
                </p>
              ) : (
                <p>
                  Our bot is still learning so please enter your example's input
                  and output into the form below. Then press 'Check'
                </p>
              )}
            </div>
            <form>
              {/* <div> */}
              <label>
                function {problem.functionName} ({' '}
                <input
                  name="input"
                  type="text"
                  value={this.state.input}
                  onChange={this.handleChange}
                />)
              </label>

              <label>returns</label>
              <input
                name="output"
                type="text"
                value={this.state.output}
                onChange={this.handleChange}
              />
              <button type="button" onClick={this.handleSubmit}>
                Check
              </button>
            </form>
            <p>{this.state.correct}</p>
          </div>

          <div
            className="nextBtn"
            onClick={() => this.props.history.push('/approach')}
          >
            Next: approach
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
