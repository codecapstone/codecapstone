import React from 'react'
import {connect} from 'react-redux'

export const Sandbox = props => {
  const sandboxId = props.problem.sandboxId

  const url = `https://codesandbox.io/embed/${sandboxId}?fontsize=14&previewwindow=tests&codemirror=1&verticallayout=1&editorsize=50`

  // const url = `https://codesandbox.io/api/v1/sandboxes/define?json=1`

  return (
    <div id="main">
      <embed src={url} style={{width: 800, height: 1000}} />
    </div>
  )
}

const mapState = state => {
  return {
    problem: state.problems.selected
  }
}

export const ConnectedSandbox = connect(mapState, null)(Sandbox)
