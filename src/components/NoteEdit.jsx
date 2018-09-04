import React, {Component} from 'react'
import {connect} from 'react-redux'
import { editNote } from '../actions/notesAction'

class NoteEdit extends Component {
  constructor (props) {
    super(props)
    // state
    this.state = {
      title: this.props.note.title,
      body: this.props.note.body
    }
  }

  // handle change of input fields
  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state.title, this.state.body)
  }

  // handle Submit
  handleSubmit (event) {
    event.preventDefault() // prevent reloading browser on form submit
    console.log('submit')
    const note = {
      title: this.state.title,
      body: this.state.body,
      uid: this.props.uid
    }
    this.props.editNote(this.props.match.params.id, note)
    this.setState({
      title: '',
      body: ''
    })
    this.props.history.push('/')
  }

  render () {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-6 col-sm-offset-3'>
            <form onSubmit={(event) => this.handleSubmit(event)}>
              <div className='form-group'>
                <input type='text'
                  onChange={(event) => this.handleChange(event)}
                  value={this.state.title}
                  name='title'
                  className='form-control no-border'
                  placeholder='Enter an title'
                  required
                />
              </div>
              <div className='form-group'>
                <textarea type='text'
                  onChange={(event) => this.handleChange(event)}
                  value={this.state.body}
                  name='body'
                  className='form-control no-border'
                  placeholder='Enter an message'
                  required
                />
              </div>
              <div className='form-group'>
                <button className='btn btn-primary col-sm-12'>Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    note: state.notes[ownProps.match.params.id],
    uid: state.user.uid
  }
}

export default connect(mapStateToProps, {editNote})(NoteEdit)
