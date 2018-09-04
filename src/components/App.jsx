import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import {getNotes, saveNote, deleteNote} from '../actions/notesAction'
import NoteCard from './NoteCard'
import { getUser } from '../actions/userAction'
import { Link } from 'react-router-dom'

class App extends Component {
  constructor (props) {
    super(props)
    // state
    this.state = {
      title: '',
      body: ''
    }
    this.renderNotes = this.renderNotes.bind(this)
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
      uid: this.props.user.uid
    }
    this.props.saveNote(note)
    this.setState({
      title: '',
      body: ''
    })
  }

  // render posts
  renderNotes () {
    console.log('renderNotes triggerd')
    return _.map(this.props.notes, (note, key) => {
      console.log('note', note)
      return (
        <NoteCard key={key}>
          <Link to={`/${key}`}>
            <h2>{note.title}</h2>
          </Link>
          <p>{note.body}</p>
          {note.uid === this.props.user.uid && (
            <div>
              <button className='btn btn-danger btn-s' onClick={() => { this.props.deleteNote(key) }}>X</button>
              <button className='btn btn-info btn-s pull-right'><Link to={`/${key}/edit`}>Update</Link></button>
            </div>
          )}
        </NoteCard>
      )
    })
  }

  render () {
    console.log('user', this.props.user)
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-2 text-center'>
            <img
              src={this.props.user.photoURL}
              height='100px'
              className='img img-responsive circle'
              style={{padding: '20px'}}
            />
            <h4 className='username'>
              Welcome back {this.props.user.displayName}
            </h4>
          </div>
          <div className='col-sm-10'>
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
                <button className='btn btn-primary col-sm-12'>Submit</button>
              </div>
            </form>
            <br />
            <br />
            <br />
            {this.renderNotes()}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    notes: state.notes,
    user: state.user
  }
}

export default connect(mapStateToProps, {getNotes, saveNote, deleteNote, getUser})(App)
