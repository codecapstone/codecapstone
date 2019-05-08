import React from 'react'
import {connect} from 'react-redux'
import {postProblem} from '../store/problems'
import {makeAdmin} from '../store/admin'

class PostProblem extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      sandboxId: '',
      prompt: '',
      functionName: '',
      tests: ``,
      solution: '',
      solutions: [],
      keyword: '',
      keywords: [],
      examples: '',
      topic: 'Dynamic Programming',
      creditTo: 'Stephen Grider',
      email: '',
      level: 'Easy'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.addKeyword = this.addKeyword.bind(this)
    this.handleEmailSubmit = this.handleEmailSubmit.bind(this)
    this.addSolution = this.addSolution.bind(this)
  }

  handleChange(evt) {
    let str = evt.target.value.replace(/\//g, '')
    this.setState({[evt.target.name]: str})
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
    let functionName = this.state.functionName
    this.props.postProblem({
      ...this.state,
      tests: `import ${functionName} from './index' ${this.state.tests}`
    })
    this.setState({
      name: '',
      sandboxId: '',
      prompt: '',
      functionName: '',
      tests: '',
      solution: '',
      solutions: [],
      keyword: '',
      keywords: [],
      examples: '',
      topic: '',
      creditTo: 'Stephen Grider',
      email: '',
      level: ''
    })
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
        <p>Enter your challenge/problem details here.</p>
        <h5>Instructions</h5>

        <a
          href="https://github.com/codecapstone/AlgoCasts/tree/master/completed_exercises"
          target="_blank"
          rel="noopener noreferrer"
        >
          The git repo is here
        </a>
        <p>You can get all the info from the completed exercises folder.</p>
        <a
          href="https://codesandbox.io/s/4x86845n37"
          target="_blank"
          rel="noopener noreferrer"
        >
          The code sandbox template is here.
        </a>

        <form onSubmit={this.addKeyword}>
          <label>
            Keyword (remember to click on add after each entry)
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
            Solution (remember to click on add after entry)
            <textarea
              rows="5"
              cols="80"
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
            <input
              type="text"
              name="name"
              required={true}
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Sandbox Id:
            <input
              type="text"
              name="sandboxId"
              required={true}
              value={this.state.sandboxId}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Prompt:
            <textarea
              rows="10"
              cols="80"
              type="text"
              name="prompt"
              required={true}
              value={this.state.prompt}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Function Name:
            <input
              type="text"
              name="functionName"
              required={true}
              value={this.state.functionName}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Tests:
            <textarea
              rows="10"
              cols="80"
              type="text"
              name="tests"
              required={true}
              value={this.state.tests}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Examples:
            <textarea
              rows="10"
              cols="80"
              type="text"
              name="examples"
              required={true}
              value={this.state.examples}
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
              <option defautvalue="None">None</option>
              <option value="Dynamic Programming">Dynamic</option>
              <option value="Arrays">Arrays</option>
              <option value="Linked Lists">Linked Lists</option>
              <option value="Hash Tables">Hash Tables</option>
              <option value="Trees">Trees</option>
            </select>
          </label>

          <label>
            Creator (who should credit be given to):
            <input
              type="text"
              name="creditTo"
              required={true}
              value={this.state.creditTo}
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
