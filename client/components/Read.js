import React from 'react'
import {connect} from 'react-redux'
import {Annyang} from './Annyang'
import Help from './Help'
import {setPrompt} from '../store/userInput'
import Prompt from './Prompt'

class Read extends React.Component {
  constructor() {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(said) {
    event.preventDefault()
    this.props.setPrompt(said)
    this.props.history.push('/examples')
  }
  render() {
    const {prompt} = this.props.challenge

    if (!prompt) return <div>Loading your challenge...</div>

    return (
      <div className="largeViewBorderCard">
        <Prompt />
        <div className="largeViewCard" id="promptAnnyang">
          <h3>
            Demonstrate your understanding: re-state the prompt in your own
            words.
          </h3>

          <Annyang handleSubmit={this.handleSubmit} />
        </div>

        <Help />
      </div>
    )
  }
}

const mapState = state => ({
  challenge: state.problems.selected
})

const mapDispatch = {setPrompt}

export default connect(mapState, mapDispatch)(Read)
