import React from 'react'
import {connect} from 'react-redux'

function Prompt(props) {
  const {name, prompt} = props.challenge

  if (!prompt) return <div>Loading your challenge...</div>

  return (
    <div className="largeViewCard">
      <h3>Challenge: {name}</h3>
      <div id="prompt">{prompt}</div>
    </div>
  )
}

const mapState = state => ({
  challenge: state.problems.selected
})

export default connect(mapState)(Prompt)
