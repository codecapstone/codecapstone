/* eslint-disable no-alert */
import React from 'react'
import annyang from 'annyang'

export class Annyang extends React.Component {
  constructor() {
    super()
    this.state = {
      said: '',
      buttonClass: 'notRec'
    }
    this.handleChange = this.handleChange.bind(this)
    this.annyangStart = this.annyangStart.bind(this)
    this.annyangStop = this.annyangStop.bind(this)
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
  handleChange() {
    this.setState({said: event.target.value})
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
      <div>
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
        <form
          onSubmit={() => this.props.handleSubmit(this.state.said)}
          className="form"
        >
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

<<<<<<< HEAD
            <i className="far fa-comments" />
            <input id="submitBtn" type="submit" />
          </form>
        </div>

        <Help />
=======
          <i className="far fa-comments" />
          <input id="submitBtn" type="submit" />
        </form>
>>>>>>> 397bcc72c487c9fbc5939328607836acdf6bb269
      </div>
    )
  }
}

export default Annyang
