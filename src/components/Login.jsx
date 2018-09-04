import React, { Component } from 'react'
import { connect } from 'react-redux'
import { googleLogin } from '../actions/userAction'

class Login extends Component {
  componentWillMount () {
    if (this.props.user !== null) {
      this.props.history.push('/')
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.user !== null) {
      nextProps.history.push('/')
    }
  }

  render () {
    console.log('render the login page')
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12 jumbotron' style={{marginTop: '-20px'}}>
            <h1>DIARY | {new Date().getFullYear()}</h1>
            <h2><i>Login with your favourite <b>Social Network</b></i></h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='col-sm-6 text-center'>
              <button onClick={this.props.googleLogin} className='btn btn-danger btn-lg col-sm-6'>
                Login with Google
              </button>
            </div>
          </div>
          <br />
        </div>
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { googleLogin })(Login)
