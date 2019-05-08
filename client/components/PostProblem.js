import React from 'react'
import {connect} from 'react-redux'
import {postProblem} from '../store/problems'
import {makeAdmin} from '../store/admin'

class PostProblem extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      sandBoxId: '',
      prompt: '',
      functionName: '',
      tests: '',
      solutions: [],
      keywords: [],
      examples: '',
      topic: '',
      creditTo: '',
      email: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit3 = this.handleSubmit3.bind(this)
    this.handleSubmit2 = this.handleSubmit2.bind(this)
  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value})
  }
  handleSubmit3(evt) {}
  handleSubmit() {
    this.props.postProblem(this.state)
  }
  handleSubmit2() {
    this.props.makeAdmin({email: this.state.email})
  }
  render() {
    const {user} = this.props

    if (!user.isAdmin) return <div>Only admins may access this page</div>

    return (
      <div className="content">
        <h3>Congratulations you have special powers!</h3>
        <p>Enter your challenge/problem details here:</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              required={true}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Sandbox Id:
            <input
              type="text"
              name="sandboxId"
              required={true}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Prompt:
            <input
              type="text"
              name="prompt"
              required={true}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Function Name:
            <input
              type="text"
              name="functionName"
              required={true}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Tests
            <input
              type="text"
              name="tests"
              required={true}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Solution 1
            <input
              type="array"
              name="solutions"
              required={true}
              onChange={this.handleChange2}
            />
          </label>
          <label>
            Keyword 1
            <input type="array" name="keyword" required={true} />
            <button onClick={this.handleSubmit2}>Add</button>
          </label>

          <label>
            Examples:
            <input
              type="text"
              name="examples"
              required={true}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Level:
            <input type="text" name="level" required={true} />
          </label>
          <label>
            Topic:
            <input
              type="text"
              name="topic"
              required={true}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Creator (who should credit be given to):
            <input
              type="text"
              name="creditTo"
              required={true}
              onChange={this.handleChange}
            />
          </label>
          <div className="bottomInfo">
            <input type="submit" value="Submit" />
          </div>
        </form>

        <h3>You can also add other admin users:</h3>
        <form>
          <label>
            New Admin's Email (they must already be a signed-up user):
            <input
              type="email"
              name="email"
              required={true}
              onChange={this.handleChange}
            />
          </label>
          <button onClick={this.handleSubmit2}>Submit</button>
        </form>
      </div>
    )
  }
}

const mapState = state => ({
  user: state.user,
  newAdmin: state.admin
})
const mapDispatch = {
  postProblem,
  makeAdmin
}

export default connect(mapState, mapDispatch)(PostProblem)
