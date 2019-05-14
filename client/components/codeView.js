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
          <p>
            Now you can code out your problem. Type your code into the code-box
            below and check to see if it passes our tests. If you need help,
            click on one of the buttons in the help section. When you are done,
            click on submit.
          </p>
          <Link to="/optimization" id="linkText">
            <i className="far fa-comments" /> Submit
          </Link>
        </div>
        <Help />
        <ConnectedSandbox />
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
