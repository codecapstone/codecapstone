import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link } from 'reaimport { fetchLessonsForUser } from '../store/lesson';
ct-router-dom'
import {fetchLessonsForGuest, fetchLessonsForUser} from '../store/lesson'

export class Topics extends Component {
  // const duplicatedTopics = props.problems.map(problem => problem.topic)
  // const topics = duplicatedTopics.reduce((arr, topic) => {
  //   if (!arr.includes(topic)) {
  //     arr.push(topic)
  //   }
  // }, [])

  // const topics = ['binary search', 'big O', 'stacks & queues']
  componentDidMount() {
    this.props.getLessons()
  }
  render() {
    console.log('props:', this.props)
    const topics = this.props.topics
    return (
      <div id="topics" className="userHomeCard">
        <h3>Topics</h3>
        <div>
        {topics.map(topic => (
          <div key={topic.id}>
            <Link to={topic.title} >
              <div>{topic.title}</div>
            </Link>
          </div>
        ))}
        </div>
      </div>
    )
  }
}

const mapState = state => {
  console.log('state: ', state)
  return {
    topics: state.lesson.all,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    getLessons: (user) => {
      if(!user) dispatch(fetchLessonsForGuest())
      else dispatchEvent(fetchLessonsForUser())
  }
}

export default connect(mapState, mapDispatch)(Topics)
