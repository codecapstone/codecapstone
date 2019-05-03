import React from 'react'
import {getParameters} from 'codesandbox/lib/api/define'
import {test} from '../sandboxFiles/index.test'
import {sandboxHtml} from '../sandboxFiles/sandboxIndexHtml'
import {connect} from 'react-redux'

const challenge = 'hammingDistance'

export const Sandbox = props => {
  const ourContent = `export default function ${props.problem.functionName} {
    // Your code here!

  }`

  const parameters = getParameters({
    files: {
      'index.js': {
        content: ourContent
      },

      'index.test.js': {
        content: props.problem.tests
      },
      'index.html': {
        content: sandboxHtml
      },

      'package.json': {
        content: {dependencies: {}, main: 'index.js'}
      }
    }
  })
  const url = `https://codesandbox.io/api/v1/sandboxes/define?view=editor&parameters=${parameters}`

  return (
    <div id="main">
      <embed src={url} style={{width: 1200, height: 600}} />
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

export const ConnectedSandbox = connect(mapState, null)(Sandbox)
