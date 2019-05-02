import React from 'react'
import annyang from 'annyang'

class Annyang extends React.Component {
  constructor() {
    super()
    this.state = {hello: false}
  }
  componentDidMount() {
    if (annyang) {
      // Let's define a command.
      var commands = {
        hello: () => this.setState({hello: true}),
        Binary: () => this.state({keyword1: true})
      }

      // Add our commands to annyang
      annyang.addCommands(commands)
      annyang.addCallback('result', function(phrases) {
        console.log(phrases[0])
      })

      // Start listening.
      annyang.start()
    }
  }
  render() {
    return this.state.hello ? (
      <p>Now say how you'd solve the problem!</p>
    ) : (
      <p>Say hello!</p>
    )
    //   this.state.keyword1 ? (
    //     <p> You said the keyword! </p>
    //   ) : (
    //     <p>You missed the keyword. It was binary.</p>
    //   )
  }
}

export default Annyang
