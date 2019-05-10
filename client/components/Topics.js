import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchTopics} from '../store/topic'

class Topics extends Component {
  componentDidMount() {
    this.props.getTopics()
  }
  render() {
    const topics = this.props.topics
    return (
      
        <div className="userHomeCard">
          <h3>Topics</h3>
          <div>
            {topics.map(topic => (
              <div className="topicLink"
                key={topic.id}>
                <Link to={`topics/${topic.id}`}>{topic.name}</Link>
              </div>
            ))}
          </div>
        </div>
      
    )
  }
}
const mapState = state => {
  //console.log('state: ', state)
  return {
    topics: state.topic.all
  }
}

const mapDispatch = dispatch => {
  return {
    getTopics: () => dispatch(fetchTopics())
  }
}
export default connect(mapState, mapDispatch)(Topics)