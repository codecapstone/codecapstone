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
      solution: '',
      solutions: [],
      keyword: '',
      keywords: [],
      examples: '',
      topic: '',
      creditTo: '',
      email: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.addKeyword = this.addKeyword.bind(this)
    this.handleEmailSubmit = this.handleEmailSubmit.bind(this)
    this.addSolution = this.addSolution.bind(this)
  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value})
    console.log(this.state)
  }
  addKeyword(evt) {
    evt.preventDefault()
    const arr = this.state.keywords
    arr.push(this.state.keyword)
    this.setState({keywords: arr, keyword: ''})
  }
  addSolution(evt) {
    evt.preventDefault()
    const arr = this.state.solutions
    arr.push(this.state.solution)
    this.setState({solutions: arr, solution: ''})
    console.log('state', this.state)
  }
  handleSubmit() {
    event.preventDefault()
    this.props.postProblem(this.state)
  }
  handleEmailSubmit() {
    this.props.makeAdmin({email: this.state.email})
  }

  render() {
    const {user} = this.props

    if (!user.isAdmin) return <div>Only admins may access this page</div>

    return (
      <div className="content">
        <h3>Congratulations you have special powers!</h3>
        <p>Enter your challenge/problem details here:</p>
        <form onSubmit={this.addKeyword}>
          <label>
            Keyword
            <input
              type="text"
              name="keyword"
              required={true}
              value={this.state.keyword}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Add" />
        </form>
        <p>Your keywords are:</p>
        {this.state.keywords.map((keyword, idx) => <p key={idx}>{keyword}</p>)}
        <form onSubmit={this.addSolution}>
          <label>
            Solution
            <textarea
              rows="10"
              cols="100"
              type="text"
              name="solution"
              value={this.state.solution}
              required={true}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Add" />
        </form>
        <p>Your solutions are:</p>
        {this.state.solutions.map((solution, idx) => (
          <p key={idx}>{solution}</p>
        ))}
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" required={true} />
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
            <select name="level" onChange={this.handleChange}>
              <option defautvalue="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </label>
          <label>
            Topic:
            <select name="topic" onChange={this.handleChange}>
              <option defautvalue="none">None</option>
              <option value="dynamic arrays">Dynamic Arrays</option>
              <option value="linked lists">Linked Lists</option>
              <option value="trees">Trees</option>
            </select>
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
          <button onClick={this.handleEmailSubmit}>Submit</button>
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
