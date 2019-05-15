import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {singleTopic} from '../store/topic'
import {selectProblem} from '../store/problems'

class SingleTopic extends Component {
  componentDidMount() {
    this.props.getTopic()
  }
  render() {
    const topic = this.props.topic
    const challenges = topic.challenges
    console.log('topic', this.props)
    return challenges ? (
      <div id="topic" className="largeViewBorderCard">
        <div className="largeViewCard">
          <h3>{topic.name}</h3>
          {challenges.map(challenge => (
            <div key={challenge.id}>
              <div
                className="challengeLink"
                key={challenge.id}
                onClick={() => this.props.setProblem(challenge.id)}
              >
                <Link to="/prompt">{challenge.name}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    ) : null
  }
}
const mapState = state => {
  //console.log('state: ', state)
  return {
    topic: state.topic.selected
  }
}

const mapDispatch = (dispatch, ownProps) => {
  const topicId = Number(ownProps.match.params.topicId)
  //console.log('id in dispatch', id)
  return {
    getTopic: () => dispatch(singleTopic(topicId)),
    setProblem: challengeId => dispatch(selectProblem(challengeId))
  }
}
export default connect(mapState, mapDispatch)(SingleTopic)
