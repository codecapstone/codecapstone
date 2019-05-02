import React from 'react'
import {getParameters} from 'codesandbox/lib/api/define'
import {test} from '../sandboxFiles/index.test'
import {sandboxHtml} from '../sandboxFiles/sandboxIndexHtml'

const challenge = 'hammingDistance'

export const Sandbox = () => {
  // once the store is set up, ourContent will refer to props.currentChallenge.name
  const ourContent = `export default function ${challenge}() {
    // Your code here!

  }`

  const parameters = getParameters({
    files: {
      'index.js': {
        content: ourContent
      },

      // once the store is set up, test will refer to props.currentChallenge.tests
      'index.test.js': {
        content: test
      },
      'index.html': {
        content: sandboxHtml
      },

      'package.json': {
        content: {dependencies: {}, main: 'index.js'}
      }
    }
  })

  const url = `https://codesandbox.io/api/v1/sandboxes/define?previewwindow=tests&hidenavigation=1&parameters=${parameters}`

  console.log(url)

  return (
    <div id="main">
      <embed src={url} style={{width: 1200, height: 600}} />
    </div>
  )
}
