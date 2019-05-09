import React, {Component} from 'react'
import { connect } from 'react-redux'
import {SingleLessonForGuest, SingleLessonForUser} from '../store/lesson'

class Topic extends Component {

  componentDidMount() {
    this.props.singleLesson()
  }
  render() {
    console.log('props in topic', this.props)
    return (
      <div>
        Hello
      </div>
    )
  }
}

const mapState = state => {
  return {
    topic: state.lesson.selected,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    singleLesson: user => {
      if (!user) dispatch(SingleLessonForGuest())
      else dispatchEvent(SingleLessonForUser())
}
  }
}

export default connect(mapState, mapDispatch)(Topic)