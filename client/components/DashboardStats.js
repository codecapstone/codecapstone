import React from 'react'
import {connect} from 'react-redux'

const formatDate = lastLogin => {
  const shortDate = lastLogin.slice(0, 10)
  const year = shortDate.slice(0, 4)

  const monthDay = shortDate.slice(6).concat('-')

  return monthDay.concat(year)
}

export const DashboardStats = props => {
  const {lastLogin} = props

  return (
    <div className="userHomeCard" id="dashboardStats">
      <h3>Your Stats</h3>
      <h5 id="lastLogin">Last Login: {formatDate(lastLogin)}</h5>
    </div>
  )
}

const mapState = state => {
  return {
    problems: state.problems.all,
    lastLogin: state.user.lastLoginDate
  }
}

// const mapDispatch = dispatch => {

// }

export default connect(mapState, null)(DashboardStats)
