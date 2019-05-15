import React from 'react'
import {connect} from 'react-redux'
import annyang from 'annyang'
import Help from './Help'
import {setPrompt} from '../store/userInput'
import Prompt from './Prompt'

class Read extends React.Component {
  constructor() {
    super()
    this.state = {
      said: '',
      buttonClass: 'notRec'
    }

    this.annyangStart = this.annyangStart.bind(this)
    this.annyangStop = this.annyangStop.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    if (!annyang) {
      alert(
        'Speech recognition is not yet working on some browsers. Try using the site in Chrome or you can type your answers.'
      )
    } else {
      // Start listening.
      annyang.addCallback('result', phrases => {
        this.setState({said: this.state.said + phrases[0]})
      })
    }
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
  handleChange() {
    this.setState({said: event.target.value})
  }
  handleSubmit() {
    event.preventDefault()
    this.props.setPrompt(this.state.said)
    this.setState({
      said: '',
      buttonClass: 'notRec'
    })
    this.props.history.push('/examples')
  }
  render() {
    const {prompt} = this.props.challenge

    if (!prompt) return <div>Loading your challenge...</div>

    return (
      <div className="largeViewBorderCard">
        {/* <div className="content"> */}
        <Prompt />
        <div className="largeViewCard" id="promptAnnyang">
          <h3>
            Demonstrate your understanding: re-state the prompt in your own
            words.
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
            {/* <label>You said:</label> */}
            <textarea
              className="textBox"
              rows="5"
              type="text"
              name="said"
              value={this.state.said}
              onChange={this.handleChange}
              id="Annyang"
              placeholder="Hit the record button to say the problem in your own words, or type it here."
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

const mapDispatch = {setPrompt}

export default connect(mapState, mapDispatch)(Read)
