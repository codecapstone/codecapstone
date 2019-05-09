import React from 'react'
import {ConnectedSandbox} from './codeSandbox'

import {connect} from 'react-redux'
import {getAgent} from '../store/chatbot'

class CodeView extends React.Component {
  componentDidMount() {
    this.props.getAgent()
  }
  render() {
    return (
      <div id="code" className="content">
        <div className="container">
          <div className="userHomeCard">
            <div>Your Challenge: {this.props.problem.name}</div>
            <br />
            <div>Prompt: {this.props.problem.prompt}</div>
          </div>
          {this.props.agent.example ? (
            <p>Your example was: {this.props.agent.example}</p>
          ) : (
            <p />
          )}
          <div
            className="nextBtn"
            onClick={() => this.props.history.push('/stats')}
          >
            Next Step - Check Your Stats!
          </div>
        </div>
        <div id="sandbox">
          <ConnectedSandbox />
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    problem: state.problems.selected,
    agent: state.agent
  }
}

const mapDispatch = {getAgent}

export const Code = connect(mapState, mapDispatch)(CodeView)

export default Code
