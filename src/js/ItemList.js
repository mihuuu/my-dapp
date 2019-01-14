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
		const {movies} = this.props;
		//console.log(movies[0].voteCount.toNumber());
    return (
    <div style={list}>
			<Row>
			{
				movies.map( (movie, index) => {
						return(
							<Col key={movie.id}>
								<Movie movieId={movie.id.toNumber()} starCount={movie.starCount.toNumber()}/>
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