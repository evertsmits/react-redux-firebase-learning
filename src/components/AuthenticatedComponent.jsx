import React, { Component } from 'react'
import { connect } from 'react-redux'
// with withRouter you can get access to the history object's property
import { withRouter } from 'react-router-dom'

class AuthenticatedComponent extends Component {
  componentDidUpdate () {
    // make sure the loading is done then if no user push the login page
    const {userLoading, user} = this.props
    if (userLoading === false && !user) {
      // history is available because we wrap this component inside browserrouter in index.js
      this.props.history.push('/login')
    }
  }

  render () {
    const {user, userLoading, children} = this.props
    return (userLoading === false && user) ? <div>{children}</div> : null
  }
}

function mapStateToProps (state) {
  return {
    user: state.user,
    userLoading: state.loading.user
  }
}

export default withRouter(connect(mapStateToProps)(AuthenticatedComponent))
