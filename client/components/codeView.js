import React from 'react'
import {ConnectedSandbox} from './codeSandbox'
import {PromiseProvider} from 'mongoose'
import {connect} from 'react-redux'

export const CodeView = props => {
  return (
    <div id="code" className="content">
      <div className="challengeDetails">
        <div>Your Challenge: {props.problem.name}</div>
        <br />
        <div>Prompt: {props.problem.prompt}</div>
      </div>
      <div id="sandbox">
        <ConnectedSandbox />
      </div>
      <div className="btnContainer">
        <div className="nextBtn" onClick={() => props.history.push('/stats')}>
          Next Step - Check Your Stats!
        </div>
      </div>
    </div>
  )
}

const mapState = state => {
  return {
    problem: state.problems.selected
  }
}

// const mapDispatch = dispatch => {

// }

export const Code = connect(mapState, null)(CodeView)

export default Code
