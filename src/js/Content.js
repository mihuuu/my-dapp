import React from 'react';
import List from './List';
import Form from './Form';
import MovieList from './ItemList';

class Content extends React.Component {
  render() {
    return (
      <div>
        {/* <List candidates={this.props.candidates} /> */}
        <MovieList movies={this.props.movies}/>
        <br />
        { (this.props.starNum > 0) ?
          <Form movies={this.props.movies} castStar={this.props.castStar} />
          : null
        }
        <hr />
        <div>
          <p>
            Now you have <strong style={{color: '#ffc107'}}>{this.props.starNum}</strong> stars !  
          </p>
          <i style={{color: '#757575'}}>Your account: {this.props.account}</i>
        </div>
      </div>
    )
  }
}

export default Content
