import React from 'react'
import annyang from 'annyang'
import {keywordCheck} from '../utilFunctions'
import {getKeyWords} from '../store/userStats'
import {connect} from 'react-redux'

export class Annyang extends React.Component {
  constructor() {
    super()
    this.state = {
      wordsGot: [],
      said: '',
      buttonClass: 'notRec'
    }
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
        this.setState({said: this.state.said + phrases[0]})
      })
    }
  }
  handleChange() {
    this.setState({said: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault()

    let [wordsGot, wordsNotGot] = keywordCheck(
      this.state.said,
      this.props.challenge.keywords
    )

    this.props.getKeyWords({
      gotKeywords: wordsGot,
      notGotKeywords: wordsNotGot
    })
    this.props.history.push('/code')
  }
  annyangStart() {
    this.setState({
      buttonClass: 'Rec'
    })
    annyang.start()
  }
  annyangStop() {
    this.setState({
      buttonClass: 'notRec'
    })
    annyang.abort()
  }
  render() {
    const {name, prompt} = this.props.challenge
    return (
      <div id="approachDiv" className="content">
        <div id="promptAnnyang" className="userHomeCard">
          <h3>Your challenge is {name}</h3>
          <p>As a reminder, the prompt is: </p>
          <p id="prompt">{prompt}</p>

          <p>Now say how you'd solve the problem!</p>
          <div id="recording">
            <button
              className={this.state.buttonClass}
              type="button"
              onClick={this.annyangStart}
            >
              Start Recording
            </button>
            <button id="stopRec" type="button" onClick={this.annyangStop}>
              Stop Recording
            </button>
          </div>
          <div id="submitApproach">
            <form
              style={{
                width: 500,
                height: 80
              }}
              onSubmit={this.handleSubmit}
            >
              <label>You said:</label>
              <textarea
                rows="7"
                cols="75"
                type="text"
                name="said"
                value={this.state.said}
                onChange={this.handleChange}
                id="Annyang"
              />
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  challenge: state.problems.selected
})

const mapDispatch = {getKeyWords}

export default connect(mapState, mapDispatch)(Annyang)
