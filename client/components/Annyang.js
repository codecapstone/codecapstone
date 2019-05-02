import React from 'react'
import annyang from 'annyang'
import {keywordCheck} from '../utilFunctions'

import {connect} from 'react-redux'

export class Annyang extends React.Component {
  constructor() {
    super()
    this.state = {wordsGot: [], said: ''}
    this.handleChange = this.handleChange.bind(this)
    this.annyangStart = this.annyangStart.bind(this)
    this.annyangStop = this.annyangStop.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    if (!annyang) {
      alert(
        'Speech recognition is not yet working on some browsers. Try using the site in Chrome or you can type your answers.'
      )
    } else {
      // Let's define a command.
      var commands = {}

      // Add our commands to annyang
      annyang.addCommands(commands)

      // Start listening.

      annyang.addCallback('result', phrases => {
        console.log('listening and heard:', phrases[0])
        this.setState({said: this.state.said + phrases[0]})
      })
    }
  }
  handleChange() {
    this.setState({said: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault()
    console.log(this.props.challenge.Keywords)
    let wordsGot = keywordCheck(this.state.said, this.props.challenge.Keywords)
    console.log('Keywords said:', wordsGot)
    this.setState({wordsGot: wordsGot})
  }
  annyangStart() {
    annyang.start()
  }
  annyangStop() {
    annyang.abort()
  }
  render() {
    console.log('state:', this.state, 'props:', this.props)
    const {name, Prompt} = this.props.challenge
    return (
      <div>
        <h3>Your challenge is {name}</h3>
        <p>As a reminder, the prompt is: </p>
        <p id="prompt">{Prompt}</p>
        <p>Now say how you'd solve the problem!</p>
        <button onClick={this.annyangStart}>Start Recording</button>
        <button onClick={this.annyangStop}>Stop Recording</button>
        <form
          style={{
            width: 500,
            height: 80
          }}
          onSubmit={this.handleSubmit}
        >
          <label>You said:</label>
          <textarea
            rows="10"
            cols="100"
            type="text"
            name="said"
            value={this.state.said}
            onChange={this.handleChange}
            id="Annyang"
          />

          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapState = state => ({
  challenge: state.problems.selected
})

export default connect(mapState)(Annyang)
