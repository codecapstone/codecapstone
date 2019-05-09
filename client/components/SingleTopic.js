import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {singleTopic} from '../store/topic'

class SingleTopic extends Component {
  componentDidMount() {
    this.props.getTopic()
  }
  render() {
    const topic = this.props.topic
    const challenges = topic.challenges
    console.log('topic', topic)
    return (
      challenges ? 
      <div id="topic" className="userHomeCard">
        <div>
          <h3>{topic.name}</h3>
          {challenges.map(challenge => (
            <div key={challenge.id}>
              {/* <Link to={`topics/${topic.id}`}>{challenge.name}</Link> */}
              {challenge.name}
            </div>
          ))}
        </div>
        </div>
        : null
    )
  }
}
const mapState = state => {
  //console.log('state: ', state)
  return {
    topic: state.topic.selected
  }
}

const mapDispatch = (dispatch, ownProps) => {
  const id = Number(ownProps.match.params.topicId)
  //console.log('id in dispatch', id)
  return {
    getTopic: () => dispatch(singleTopic(id))
  }
}
export default connect(mapState, mapDispatch)(SingleTopic)
