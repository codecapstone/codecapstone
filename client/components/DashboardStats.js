import React from 'react'
import {connect} from 'react-redux'
import {getStats} from '../store/userStats'
import {formatDate, completedCheck} from '../utilFunctions'
import {fetchProblems, selectProblem} from '../store'
import {Link} from 'react-router-dom'

class DashboardStats extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    this.props.getProblems()
    this.props.fetchStats()
  }

  render() {
    let {lastLogin} = this.props
    !lastLogin
      ? (lastLogin = 'Today')
      : (lastLogin = this.props.formatDate(lastLogin))

    let challengeStats = this.props.completedCheck(
      this.props.problems,
      this.props.challenges
    )

    console.log(challengeStats)
    return (
      <div className="userHomeCard" id="dashboardStats">
        <h3>Your Stats</h3>
        <div>
          <div id="lastLogin">Last Login: {lastLogin}</div>
        </div>
        <br />
        <div>Completed Challenges: </div>
        {challengeStats[0].length > 0 ? (
          <div>
            {challengeStats[0].map(challenge => (
              <div
                key={challenge.id}
                onClick={id => this.props.setProblem(challenge.id)}
              >
                <Link to="/prompt">{challenge.name}</Link>
              </div>
            ))}
          </div>
        ) : (
          'None yet!'
        )}
        <br />
        <br />
        <div>Challenges You've Started: </div>
        {challengeStats[1].length > 0 ? (
          <div>
            {challengeStats[1].map(challenge => (
              <div
                key={challenge.id}
                onClick={id => this.props.setProblem(challenge.id)}
              >
                <Link to="/prompt">{challenge.name}</Link>
              </div>
            ))}
          </div>
        ) : (
          'None yet!'
        )}
      </div>
    )
  }
}

const mapState = state => {
  return {
    problems: state.problems.all,
    challenges: state.userStats.challenges,
    lastLogin: state.user.lastLoginDate
  }
}

const mapDispatch = dispatch => {
  return {
    fetchStats: () => dispatch(getStats()),
    getProblems: () => dispatch(fetchProblems()),
    setProblem: id => dispatch(selectProblem(id)),
    formatDate: date => formatDate(date),
    completedCheck: (allProbs, userStats) => completedCheck(allProbs, userStats)
  }
}

export default connect(mapState, mapDispatch)(DashboardStats)
