import React from 'react'
import {connect} from 'react-redux'
import {postLesson} from '../store/lesson'
import {makeAdmin} from '../store/admin'

class PostLesson extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      description: '',
      complexities: '',
      singleRef: '',
      reference: [],
      topicId: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.addReference = this.addReference.bind(this)
    this.handleEmailSubmit = this.handleEmailSubmit.bind(this)
  }

  handleChange(evt) {
    // let str = evt.target.value.replace(/\//g, '')
    this.setState({[evt.target.name]: evt.target.value})
  }

  addReference(evt) {
    evt.preventDefault()
    const arr = this.state.reference
    arr.push(this.state.singleRef)
    this.setState({reference: arr, singleRef: ''})
  }

  handleSubmit() {
    event.preventDefault()

    this.props.postLesson(this.state)

    this.setState({
      name: '',
      description: '',
      complexities: '',
      reference: []
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
        <p>Enter your lesson details here.</p>
        <h5>Instructions</h5>

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
            Complexities:
            <input
              type="text"
              name="complexities"
              required={true}
              value={this.state.complexities}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Description:
            <textarea
              rows="10"
              cols="80"
              type="text"
              name="description"
              required={true}
              value={this.state.description}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Topic:
            <select name="topic" onChange={this.handleChange}>
              <option defaultvalue="Dynamic Programming">Dynamic</option>
              <option value="None">None</option>
              <option value="Arrays">Arrays</option>
              <option value="Linked Lists">Linked Lists</option>
              <option value="Hash Tables">Hash Tables</option>
              <option value="Trees">Trees</option>
            </select>
          </label>

          <div className="bottomInfo">
            <input type="submit" value="Submit" />
          </div>
        </form>

        <form onSubmit={this.addReference}>
          <label>
            Reference (remember to click on add after each entry)
            <input
              type="text"
              name="singleRef"
              required={true}
              value={this.state.singleRef}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Add" />
        </form>
        <p>Your references are:</p>
        {this.state.reference.map((ref, idx) => <p key={idx}>{ref}</p>)}
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
          <button type="button" onClick={this.handleEmailSubmit}>
            Submit
          </button>
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
  postLesson,
  makeAdmin
}

export default connect(mapState, mapDispatch)(PostLesson)
