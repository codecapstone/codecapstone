import React from 'react'
import {connect} from 'react-redux'
import {getCurrentProblem} from '../store/problems'

class Sandbox extends React.component {
  componentDidMount() {
    this.props.getProblem()
  }

  render() {
    const sandboxId = this.props.problem.sandboxId

    const url = `https://codesandbox.io/embed/${sandboxId}?fontsize=14&previewwindow=tests&codemirror=1&verticallayout=1&editorsize=50`

    return (
      <div id="main">
        <embed src={url} id="sandbox" />
      </div>
    )
  }
}

const mapState = state => {
  return {
    problem: state.problems.selected
  }
}

const mapDispatch = dispatch => {
  return {
    getProblem: () => dispatch(getCurrentProblem())
  }
}

export const ConnectedSandbox = connect(mapState, mapDispatch)(Sandbox)
