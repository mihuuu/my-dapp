import React from 'react'
import List from './List'
import Form from './Form'

class Content extends React.Component {
  render() {
    return (
      <div>
        <List candidates={this.props.candidates} />
        <hr/>
        { !this.props.hasVoted ?
          <Form candidates={this.props.candidates} castVote={this.props.castVote} />
          : null
        }
        <p>Your account: {this.props.account}</p>
      </div>
    )
  }
}

export default Content
