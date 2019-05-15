import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import checkers from '../checkerFunctions'
import {setExamples} from '../store/userInput'

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
    this.handleCheck = this.handleCheck.bind(this)
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
  handleCheck() {
    if (checkers[this.props.problem.functionName]) {
      const calculated = checkers[this.props.problem.functionName](
        this.state.input
      )
      console.log('calculated:', calculated)
      if (calculated === `Error`) {
        this.setState({
          correct: `Ooops.  There's an error.  Check your input is of the correct type!`
        })
      } else if (
        calculated.toString() === this.state.output.toString()
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
  handleSubmit() {
    this.props.setExamples(this.state)
  }

  render() {
    const {functionName} = this.props.problem
   // console.log(functionName)
    return (
      <div className="largeViewCard">
        <h3>Please enter your example by giving a sample input and output. </h3>

        <form id="exampleCheck" className="form">
          <label>
            {/* Input(s) */}
            <input
              name="input"
              type="text"
              value={this.state.input}
              onChange={this.handleChange}
              placeholder="Input(s) here"
            />
          </label>

          <label>
            {/* Output{' '} */}
            <input
              name="output"
              type="text"
              value={this.state.output}
              onChange={this.handleChange}
              placeholder="Expected output here"
            />
          </label>
        </form>
        <div className="exampleBtns">
          {checkers[functionName] ? (
            <div>
              <button
                className="nextBtn"
                type="button"
                onClick={this.handleCheck}
              >
                Check My Example
              </button>

              <div>{this.state.correct}</div>
            </div>
          ) : null}
          <div>
            <Link to="/approach" onClick={this.handleSubmit} id="linkText">
              <i className="far fa-comments" /> Submit
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => {
 // console.log('state:', state)
  return {
    problem: state.problems.selected,
    agent: state.agent
  }
}

const mapDispatch = {setExamples}

export const Code = connect(mapState, mapDispatch)(exampleCheck)

export default Code
