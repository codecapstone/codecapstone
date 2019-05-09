import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {singleTopic} from '../store/topic'

class Topics extends Component {
  componentDidMount() {
    this.props.getTopic()
  }
  render() {
    const topic = this.props.topic
    console.log('topic', topic)
    return (
      <div id="topics" className="userHomeCard">
        <div>
          {/* {topics.map(topic => (
            <div key={topic.id}>
              <Link to={`topics/${topic.id}`}>{topic.name}</Link>
            </div>
          ))} */}
        </div>
      </div>
    )
  }
}
const mapState = state => {
  //console.log('state: ', state)
  return {
    topic: state.topic.selected
  }
}

const mapDispatch = dispatch => {
  return {
    getTopic: () => dispatch(singleTopic())
  }
}
export default connect(mapState, mapDispatch)(Topics)
