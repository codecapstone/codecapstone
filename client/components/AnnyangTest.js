import annyang from 'annyang'
import React from 'react'

class AnnyangTest extends React.Component {
  constructor() {
    super()
    this.state = {said: ''}
    this.resultCallback = this.resultCallback.bind(this)
  }
  componentDidMount() {
    if (annyang) {
      // Let's define a command.
    }

    // Add our commands to annyang

    annyang.setLanguage('en - US')
    // Start listening.
    annyang.start()

    annyang.addCallback(this.resultCallback)
  }

  resultCallback(phrases) {
    this.setState({said: phrases[0]})
  }

  render() {
    // let phrasesArr = []
    // annyang.addCallback('result', function(phrases) {
    //   console.log('I think the user said: ', phrases[0])
    //   console.log('But then again, it could be any of the following: ', phrases)
    //   phrasesArr.push(phrases[0])
    // })
    // console.log(phrasesArr)
    return (
      <div>
        <button onClick={() => annyang.start()}>Start Recording </button>
        <button onClick={() => annyang.pause()}>Pause</button>
        {/* <button onClick={this.showText()}>Show Text </button>
        {annyang.addCallback('result', function(phrases) {
          return <p>'I think the user said: ', {phrases[0]}</p>
        })} */}
        <p>{this.state.said}</p>
      </div>
    )
  }
}

export default AnnyangTest
