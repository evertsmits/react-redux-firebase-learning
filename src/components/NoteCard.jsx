import React, { Component } from 'react'

export default class NoteCard extends Component {
  render () {
    return (
      <div className='jumbotron'>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

// THIS MAY ALSO BE USED IN ORDER TO CREATE COMPONENTS

// import React from 'react'
//
// const NoteCard = props => (
//   <div className='jumbotron'>
//     <div>{props.children}</div>
//   </div>
// )
//
// export default NoteCard

// THIS ASWELL

// import React from 'react'
//
// const NoteCard = props => {
//   return (
//    <div className='jumbotron'>
//     <div>{props.children}</div>
//    </div>
//   )
// }
//
// export default NoteCard
