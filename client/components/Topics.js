import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export const Topics = props => {
  // const duplicatedTopics = props.problems.map(problem => problem.topic)
  // const topics = duplicatedTopics.reduce((arr, topic) => {
  //   if (!arr.includes(topic)) {
  //     arr.push(topic)
  //   }
  // }, [])

  const topics = ['binary search', 'big O', 'stacks & queues']

  return (
    <div className="userHomeCard">
      <h3>Topics</h3>
      <div>
        {topics.map(topic => (
          <Link to={topic}>
            <div>{topic}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

const mapState = state => {
  return {
    problems: state.problems.all
  }
}

// const mapDispatch = dispatch => {

// }

export default connect(mapState, null)(Topics)
