import React, { Component } from 'react'
import {connect} from 'react-redux'
import { saveComment } from '../actions/notesAction'

class SubmitComment extends Component {
  constructor (props) {
    super(props)
    this.state = {
      commentBody: ''
    }
  }

  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
      // ook mogelijk is
      // commentBody: event.target.value
      // maar bovenstaande oplossing is meer dynamisch
    })
  }

  // handle Submit
  handleSubmit (event) {
    event.preventDefault() // prevent reloading browser on form submit
    console.log('submit')
    const comment = {
      commentBody: this.state.commentBody,
      uid: this.props.uid
    }
    console.log('the comment to submit: ', comment, 'on id: ', this.props.id)
    this.props.saveComment(this.props.id, comment)
    this.setState({
      commentBody: ''
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div className='form-group'>
            <textarea
              type='text'
              name='commentBody'
              value={this.state.commentBody}
              className='form-control no-border'
              placeholder='write comment'
              required
              onChange={(event) => this.handleChange(event)}
            />
          </div>
          <div classNam='form-group'>
            <button className='btn btn-success'>Add comment</button>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    uid: state.user.uid
  }
}

export default connect(mapStateToProps, {saveComment})(SubmitComment)
