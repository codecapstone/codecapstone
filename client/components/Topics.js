import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {fetchLessonsForGuest, fetchLessonsForUser} from '../store/lesson'

class Topics extends Component {
  
  componentDidMount() {
    this.props.getLessons()
  }
  render() {
    //console.log('props:', this.props)
    const topics = this.props.topics
    return <div id="topics" className="userHomeCard">
        <h3>Topics</h3>
        <div>
          {topics.map(topic => <div key={topic.id}>
              
            <Link to={`lessons/${topic.id}`}>
                {topic.title}
              </Link>
            </div>)}
        </div>
      </div>
  }
}

const mapState = state => {
  //console.log('state: ', state)
  return {
    topics: state.lesson.all,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    getLessons: user => {
      if (!user) dispatch(fetchLessonsForGuest())
      else dispatchEvent(fetchLessonsForUser())
    }
  }
}

export default connect(mapState, mapDispatch)(Topics)
