import React from 'react'
import {connect} from 'react-redux'
import {ExampleCheck, Prompt} from '../components'
import Help from './Help'

class Examples extends React.Component {
  render() {
    return (
      <div className="largeViewBorderCard">
        <Prompt />
        <ExampleCheck />
        <Help />
      </div>
    )
  }
}

const mapState = state => ({
  challenge: state.problems.selected
})

export default connect(mapState)(Examples)
