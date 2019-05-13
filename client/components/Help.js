import React from 'react'
import {connect} from 'react-redux'

class Help extends React.Component {
  constructor() {
    super()
    this.state = {
      examples: null,
      userPrompt: null
    }
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
    } else {
      this.setState({examples: this.props.challenge.examples})
    }
  }

  render() {
    return (
      <div className="userHomeCard">
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
      </div>
    )
  }
}

const mapState = state => ({
  challenge: state.problems.selected,
  userPrompt: state.userInput.userPrompt
})

export default connect(mapState)(Help)
