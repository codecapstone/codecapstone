import React from 'react'
import {connect} from 'react-redux'
import {singleLesson} from '../store/lesson'

class Help extends React.Component {
  constructor() {
    super()
    this.state = {
      examples: '',
      userPrompt: '',
      lesson: ''
    }
  }

  componentDidMount() {
    this.props.singleLesson(this.props.challenge.topicId)
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
  }

  render() {
    return (
      <div className="largeViewCard">
        <h3>Could I get a little help?</h3>
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
          Show me the lesson for this problem.
        </button>
        <p>{this.state.lesson}</p>
      </div>
    )
  }
}

const mapState = state => ({
  challenge: state.problems.selected,
  userPrompt: state.userInput.userPrompt,
  lesson: state.lesson.selected
})

const mapDispatch = {singleLesson}

export default connect(mapState, mapDispatch)(Help)
