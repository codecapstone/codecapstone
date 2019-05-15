import React, {Component} from 'react'
import {connect} from 'react-redux'
import {singleLesson} from '../store/lesson'

class Detail extends Component {
  componentDidMount() {
    this.props.selectedLesson()
  }
  render() {
    //    console.log('props', this.props)
    const lesson = this.props.lesson
    const topic = lesson.topic
    return topic ? (
      <div className="largeViewBorderCard">
        <div className="largeViewCard">
          <h3>{lesson.name}</h3>
          <div>{lesson.description}</div>
          <h4>
            Reference:
            {lesson.reference.map((refer, idx) => (
              <div key={idx}>
                <a href={refer} target="_blank" rel="noopener noreferrer">
                  {lesson.name}
                </a>
              </div>
            ))}
          </h4>
        </div>
      </div>
    ) : null
  }
}
const mapState = state => {
  //console.log('state: ', state)
  return {
    lesson: state.lesson.selected
  }
}

const mapDispatch = (dispatch, ownProps) => {
  const lessonId = Number(ownProps.match.params.lessonId)
  return {
    selectedLesson: () => dispatch(singleLesson(lessonId))
  }
}
export default connect(mapState, mapDispatch)(Detail)
