import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Examples extends React.Component {
  constructor() {
    super()
    this.state = {
      examples: ''
    }
  }

  render() {
    const {name, prompt} = this.props.challenge

    if (!prompt) return <div>Loading your challenge...</div>

    return (
      <div className="content">
        <div>
          <h3>Your challenge is {name}</h3>
          <p>The prompt is: </p>
          <p id="prompt">{prompt}</p>
          <div>
            {/* <form onSubmit={this.handleSubmit}>
              <label htmlFor="examples" />
              <input
                onChange={this.handleChange}
                name="examples"
                type="text"
                value={this.state.examples}
              />
              <button type="submit">Submit</button>
            </form> */}

            <p>
              Type your examples into Interview-Bot making sure you use the key
              word "example" before you write your actual example. E.g. "example
              my example is ....."{' '}
            </p>
          </div>
        </div>

        <div />

        <Link to="/approach">Next: Approach</Link>
      </div>
    )
  }
}

const mapState = state => ({
  challenge: state.problems.selected
})

export default connect(mapState)(Examples)
