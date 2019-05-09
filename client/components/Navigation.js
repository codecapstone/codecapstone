import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Login, Signup} from './AuthForm'

const Navigation = ({handleClick, isLoggedIn, email}) => (
  <nav id="navigation">
    <i className="far fa-comments" />
    <div id="codeAloudNameDiv">
      <img id="logo" src="./CAlogo.png" />
    </div>
    {isLoggedIn ? (
      <div className="navLinks">
        {/* The navbar will show these links after you log in */}
        <div>Welcome, {email}!</div>
        <Link to="/home">Home</Link>
        <Link to="/challenges">Challenges</Link>
        <Link to="/lessons">Lessons</Link>
        <a href="#" onClick={handleClick}>
          Logout
        </a>
      </div>
    ) : (
      <div className="navLinks">
        {/* The navbar will show these links before you log in */}
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    )}
  </nav>
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
