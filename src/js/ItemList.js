import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import movieData from '../items.json';
import Movie from './Movie';

const list = {
	width: '90%',
	margin: '0 auto',
}

class ItemList extends React.Component {
	state = {
		index: 0,
	}

  render() {
		const {candidates} = this.props;
		//console.log(candidates[0].voteCount.toNumber());
    return (
    <div style={list}>
			<Row>
			{
				candidates.map( (candidate, index) => {
						return(
							<Col key={candidate.id}>
								<Movie movieId={candidate.id.toNumber()} voteCount={candidate.voteCount.toNumber()}/>
							</Col>
						)
					})
			}
			</Row>
    </div>
    )
  }
}

export default ItemList;