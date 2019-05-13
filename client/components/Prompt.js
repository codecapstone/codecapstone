import React from 'react'
import {connect} from 'react-redux'
import annyang from 'annyang'
import {Link} from 'react-router-dom'
import {setApproach} from '../store/userInput'

class Prompt extends React.Component {
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
    this.props.setApproach(this.state.said)
    this.setState({
      said: '',
      buttonClass: 'notRec'
    })
    this.props.history.push('/examples')
  }
  render() {
    const {name, prompt} = this.props.challenge

    if (!prompt) return <div>Loading your challenge...</div>

    return (
      <div className="borderCard">
        <div className="content">
          <div className="userHomeCard">
            <h3>Your challenge is {name}</h3>
            <p>The prompt is: </p>
            <p id="prompt">{prompt}</p>
          </div>
        </div>

        <div className="content">
          <div className="userHomeCard">
            <h3>Now show you understand the example.</h3>
            <p>Re-state the prompt in your own words.</p>
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
                <button
                  id="pauseBtn"
                  type="button"
                  onClick={this.annyangStop}
                />
                <p>Stop</p>
              </div>
            </div>
            <form onSubmit={this.handleSubmit}>
              <label>You said:</label>
              <textarea
                rows="3"
                cols="25"
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
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  challenge: state.problems.selected
})

const mapDispatch = {setApproach}

export default connect(mapState, mapDispatch)(Prompt)
