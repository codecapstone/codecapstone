import React from 'react'
import {connect} from 'react-redux'
import {ExampleCheck} from '../components'
import Help from './Help'

class Examples extends React.Component {
  render() {
    const {name, prompt} = this.props.challenge

    if (!prompt) return <div>Loading your challenge...</div>

    return (
      <div className="largeViewBorderCard">
        <div className="largeViewCard">
          <h3>Your challenge is {name}</h3>
          <p id="prompt">{prompt}</p>
        </div>

        <ExampleCheck />

        <Help />
      </div>
    )
  }
}

const mapState = state => ({
  challenge: state.problems.selected
})

export default connect(mapState)(Examples)
