import React from 'react';
import List from './List';
import Form from './Form';
import MovieList from './ItemList';

class Content extends React.Component {

  componentDidMount() {
    console.log("In <content> voteNum: " + this.props.voteNum);
  }

  render() {
    return (
      <div>
        {/* <List candidates={this.props.candidates} /> */}
        <MovieList candidates={this.props.candidates}/>
        <br />
        { (this.props.voteNum > 0) ?
          <Form candidates={this.props.candidates} castVote={this.props.castVote} />
          : null
        }
        <hr />
        <div>
          <p>
            Now you have <strong style={{color: '#ffc107'}}>{this.props.voteNum}</strong> stars !  
          </p>
          <i style={{color: '#757575'}}>Your account: {this.props.account}</i>
        </div>
      </div>
    )
  }
}

export default Content
