import React from 'react'
import {ConnectedSandbox} from './codeSandbox'

import {connect} from 'react-redux'
import {getAgent} from '../store/chatbot'

class CodeView extends React.Component {
  componentDidMount() {
    this.props.getAgent()
  }

  render() {
    const {agent, problem} = this.props
    return (
      <div id="code" className="content">
        <div className="borderCard">
          <div className="userHomeCard">
            <div>Your Challenge: {problem.name}</div>
            <br />
            <div>Prompt: {problem.prompt}</div>
          </div>
          {this.props.agent.example ? (
            <p>Your example was: {agent.example}</p>
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
        <ConnectedSandbox />
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
