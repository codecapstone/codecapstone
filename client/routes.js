import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  Signup,
  UserHome,
  Annyang,
  UserStats,
  Code,
  Challenges,
  Solutions,
  PostProblem,
  Topics,
  Lessons,
  SingleTopic,
  LessonDetail,
  ExampleCheck,
  Page404
} from './components'
import Prompt from './components/Prompt'
import Examples from './components/Examples'
import {me} from './store'
//import {InterviewBot} from './components/interviewBot'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/prompt" component={Prompt} />
        <Route path="/approach" component={Annyang} />
        <Route path="/examples" component={Examples} />
        <Route path="/stats" component={UserStats} />
        <Route path="/code" component={Code} />
        <Route path="/solutions" component={Solutions} />
        <Route path="/example-check" component={ExampleCheck} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route exact path="/" component={UserHome} />
            <Route path="/home" component={UserHome} />
            <Route path="/challenges" component={Challenges} />
            <Route path="/admin" component={PostProblem} />
            <Route exact path="/topics" component={Topics} />
            <Route exact path="/topics/:topicId" component={SingleTopic} />
            <Route exact path="/lessons" component={Lessons} />
            <Route exact path="/lessons/:lessonId" component={LessonDetail} />
            <Route component={Page404} />
          </Switch>
        )}

        {/* Displays our Login component as a fallback */}
        <Route component={Page404} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
