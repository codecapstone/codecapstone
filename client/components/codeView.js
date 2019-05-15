import React from 'react'
import {ConnectedSandbox} from './codeSandbox'
import Prompt from './Prompt'
import Help from './Help'
import {connect} from 'react-redux'
import {getAgent} from '../store/chatbot'
import {Link} from 'react-router-dom'

class CodeView extends React.Component {
  componentDidMount() {
    this.props.getAgent()
  }

  render() {
    return (
      <div className="largeViewBorderCard">
        <Prompt />
        <div className="largeViewCard" id="promptAnnyang">
          <h3>Time to code. Use our sandbox to test your ideas.</h3>
          <p>
            The built-in tests will let you know if your code passes. If you
            need help, scroll down to the help section. When you are done, click
            on submit.
          </p>
          <Link to="/optimization" id="linkText">
            <i className="far fa-comments" /> I'm Finished
          </Link>
        </div>

        <ConnectedSandbox />
        <Help />
      </div>
    )
  }
}

const mapState = state => {
  return {
    problem: state.problems.selected
  }
}

const mapDispatch = {getAgent}

export const Code = connect(mapState, mapDispatch)(CodeView)

export default Code
