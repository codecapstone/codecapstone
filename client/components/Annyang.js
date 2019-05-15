import React from 'react'
import annyang from 'annyang'
import {keywordCheck} from '../utilFunctions'
import {getKeyWords} from '../store/userStats'
import {connect} from 'react-redux'
import Prompt from './Prompt'
import Help from './Help'

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
    return (
      <div className="largeViewBorderCard">
        <Prompt />
        <div className="largeViewCard" id="promptAnnyang">
          <h3>
            Now say how you'd solve the problem! You can record your approach or
            type it, and you can edit your approach before hitting submit.
          </h3>
          <div id="rec-stopDiv">
            <div id="recBtn">
              <button
                className={this.state.buttonClass}
                type="button"
                onClick={this.annyangStart}
              />
              <p>Rec.</p>
            </div>
            <div id="stopBtn">
              <button id="pauseBtn" type="button" onClick={this.annyangStop} />
              <p>Stop</p>
            </div>
          </div>

          <form onSubmit={this.handleSubmit} className="form">
            <label>You said:</label>

            <textarea
              className="textBox"
              rows="5"
              type="text"
              name="said"
              value={this.state.said}
              onChange={this.handleChange}
              id="Annyang"
            />

            <i className="far fa-comments" />
            <input id="submitBtn" type="submit" />
          </form>
        </div>
        <Help />
      </div>
    )
  }
}

const mapState = state => ({
  challenge: state.problems.selected
})

const mapDispatch = {getKeyWords}

export default connect(mapState, mapDispatch)(Annyang)
