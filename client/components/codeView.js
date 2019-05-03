import React from 'react'
import {ConnectedSandbox} from './codeSandbox'
import {PromiseProvider} from 'mongoose'

export const CodeView = props => {
  return (
    <div id="sandbox">
      <div>CODEVIEW RENDER</div>
      <ConnectedSandbox />
      <button onClick={() => props.history.push('/stats')}>
        Next Step - Check Your Stats!
      </button>
    </div>
  )
}

export default CodeView
