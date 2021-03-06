import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Topics, DashboardStats, Challenges, Lessons} from './index'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <div className="bodyComponent content" id="userHome">
      <Challenges />
      <DashboardStats />
      <Topics />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
