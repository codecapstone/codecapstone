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
    return topic ? <div className="userHomeCard">
        <h3>{lesson.name}</h3>
        <h4>{lesson.topic.name}</h4>
        <p>{lesson.description}</p>
        <h4>
          Reference:
          {lesson.reference.map(refer => <div key={refer.id}>
              <a>{refer}</a>
            </div>)}
        </h4>
      </div> : null
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
