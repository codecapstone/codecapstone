import React from 'react'
import {connect} from 'react-redux'
import {getCurrentProblem} from '../store/problems'

class Sandbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sandboxId: null
    }
  }
  async componentDidMount() {
    await this.props.getProblem()
    this.setState({sandboxId: this.props.problem.sandboxId})
  }

  render() {
    const url = `https://codesandbox.io/embed/${
      this.state.sandboxId
    }?fontsize=14&previewwindow=tests&codemirror=1&verticallayout=1&editorsize=50`

    return (
      this.state.sandboxId && (
        <div id="main">
          <embed src={url} id="sandbox" />
        </div>
      )
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
