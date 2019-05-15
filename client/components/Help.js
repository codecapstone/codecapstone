import React from 'react'
import {connect} from 'react-redux'
import {singleLesson, getUserInput, setLoading} from '../store'

class Help extends React.Component {
  constructor() {
    super()
    this.state = {
      examples: '',
      userPrompt: '',
      lesson: '',
      approach: ''
    }
  }
  componentDidMount() {
    this.props.getUserInput()
  }

  handleClick(evt) {
    if (evt === 'prompt') {
      let userPrompt = `You haven't restated the question yet. Look for key phrases (for
            example what is the title?) and look up words you aren't sure of.
            You could also look at the related lesson.`
      if (this.props.userPrompt) {
        userPrompt = this.props.userPrompt
      }
      this.setState({
        userPrompt: userPrompt
      })
    }
    if (evt === 'examples') {
      this.setState({examples: this.props.challenge.examples})
    }
    if (evt === 'lessons') {
      this.setState({lesson: this.props.lesson.description})
    }
    if (evt === 'approach') {
      let userApproach = `You haven't set out your approach yet. Think about what a brute-force solution might look like (don't worry about optimization yet!)  Consider a simple or base case for your challenge to help get you started. You could also take a look at the lesson.`
      if (this.props.approach) {
        userApproach = this.props.approach
      }
      this.setState({approach: userApproach})
    }
  }

  render() {
    return (
      <div className="largeViewCard">
        <div>
          <h3>Could I get a little help?</h3>
        </div>
        <div>
          <button
            type="button"
            className="nextBtn"
            onClick={() => this.handleClick('prompt')}
          >
            Remind me how I restated this problem.
          </button>
          <p>{this.state.userPrompt}</p>

          <button
            type="button"
            className="nextBtn"
            onClick={() => this.handleClick('examples')}
          >
            Show me a working example for this problem.
          </button>
          <p>{this.state.examples}</p>
          <button
            type="button"
            className="nextBtn"
            name="lesson"
            onClick={() => this.handleClick('lessons')}
          >
            Show me the lesson for this challenge.
          </button>
          <p>{this.state.lesson}</p>
          <button
            type="button"
            className="nextBtn"
            name="approach"
            onClick={() => this.handleClick('approach')}
          >
            Remind me how I would approach this challenge.
          </button>
          <p>{this.state.approach}</p>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  challenge: state.problems.selected,
  userPrompt: state.userInput.userPrompt,
  approach: state.userInput.approach,
  lesson: state.lesson.selected
})

const mapDispatch = {singleLesson, getUserInput, setLoading}

export default connect(mapState, mapDispatch)(Help)
