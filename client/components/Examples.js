import React from 'react'
import {connect} from 'react-redux'
import {ExampleCheck} from '../components'
import Help from './Help'

class Examples extends React.Component {
  render() {
    const {name, prompt} = this.props.challenge

    if (!prompt) return <div>Loading your challenge...</div>

    return (
      <div className="borderCard">
        <div className="userHomeCard">
          <h3>Your challenge is {name}</h3>
          <p>The prompt is: </p>
          <p id="prompt">{prompt}</p>
        </div>
        <div className="userHomeCard">
          <ExampleCheck />
        </div>
        <Help />
      </div>
    )
  }
}

const mapState = state => ({
  challenge: state.problems.selected
})

export default connect(mapState)(Examples)
