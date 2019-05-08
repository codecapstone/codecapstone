import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {InterviewBot} from './interviewBot'
import {Login, Signup} from './AuthForm'

const Navigation = ({handleClick, isLoggedIn, email}) => (
  <div id="navigation">
    <nav>
      <div>
        <h1>{`Code { Aloud }`}</h1>
      </div>
      {isLoggedIn ? (
        <div className="navLinks">
          {/* The navbar will show these links after you log in */}
          {/* <div>
            Welcome, <br />
            {email}!
          </div> */}
          <Link to="/home">Home</Link>
          <Link to="/challenges">Challenges</Link>
          <Link to="/lessons">Lessons</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
          {/* <InterviewBot /> */}
        </div>
      ) : (
        <div className="navLinks">
          {/* The navbar will show these links before you log in */}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    email: state.user.email
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navigation)

/**
 * PROP TYPES
 */
Navigation.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
