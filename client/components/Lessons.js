import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {fetchLessons} from '../store/lesson'

class Lessons extends Component {
  componentDidMount() {
    this.props.getLessons()
  }
  render() {
    //console.log('props:', this.props)
    const lessons = this.props.lessons
    return (
      <div id="topics" className="borderCard">
        <div className="userHomeCard">
          <h3>Lessons</h3>
          <div>
            {lessons.map(lesson => (
              <div className="lessonLink" key={lesson.id}>
                <Link to={`lessons/${lesson.id}`}>{lesson.name}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  //console.log('state: ', state)
  return {
    lessons: state.lesson.all
  }
}

const mapDispatch = dispatch => {
  return {
    getLessons: () => dispatch(fetchLessons())
  }
}

export default connect(mapState, mapDispatch)(Lessons)
