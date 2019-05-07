import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export const DashboardStats = props => {
  return (
    <div id="dashboardStats" className="userHomeCard">
      <h3>Your Stats</h3>
      <div>
        This is a placeholder for user stats. Should include # of challenges
        completed, time since last login
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

export default connect(mapState, null)(DashboardStats)
