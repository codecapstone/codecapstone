import React from 'react'
import {connect} from 'react-redux'

const formatDate = lastLogin => {
  const shortDate = lastLogin.slice(0, 10)
  const year = shortDate.slice(0, 4)

  const monthDay = shortDate.slice(6).concat('-')

  return monthDay.concat(year)
}

const completedCheck = (all, startedOrCompleted) => {
  let probNamesIds = {}
  all.forEach(el => {
    probNamesIds[el.id] = el.name
  })

  let started = startedOrCompleted.map(el => {
    if (!el.isCompleted) {
      return probNamesIds[el.challengeId]
    }
  })
  return started
}

export const DashboardStats = props => {
  let {lastLogin} = props.lastLoggedIn
  if (!lastLogin) {
    lastLogin = 'Today'
  } else lastLogin = formatDate(lastLogin)

  let startedOrCompleted = props.stats.challenges
  let started = completedCheck(props.problems, startedOrCompleted)

  return (
    <div className="userHomeCard" id="dashboardStats">
      <h3>Your Stats</h3>
      <h5 id="lastLogin">Last Login: {lastLogin}</h5>
      <div>{started.map(el => <div>{el.name}</div>)}</div>
    </div>
  )
}

const mapState = state => {
  return {
    problems: state.problems.all,
    stats: state.userStats.userStats,
    lastLogin: state.user.lastLoginDate
  }
}

// const mapDispatch = dispatch => {

// }

export default connect(mapState, null)(DashboardStats)
