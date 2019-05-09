import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class DashboardPrompt extends React.Component {
  render() {
    const {name, prompt} = this.props.challenge

    if (!prompt) return <div>Loading your challenge...</div>

    return (
      <div id="dashboardPrompt">
        <div>
          <h2>Welcome, {this.props.email}</h2>
          <h3>Your next challenge is: {name}</h3>
          <p className="prompt">{prompt}</p>
        </div>
        <div />
        <div className="promptButtons">
          <div className="dashBtn">
            <Link to="/prompt">
              <h4>Let's Go!</h4>
            </Link>
          </div>
          <br />
          <br />
          <div className="dashBtn">
            <Link to="/challenges">
              <h4>Choose a different challenge</h4>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  challenge: state.problems.selected,
  email: state.user.email
})

export default connect(mapState)(DashboardPrompt)
