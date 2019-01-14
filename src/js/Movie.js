import React from 'react';
import { Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button } from 'reactstrap';
import movieData from '../items.json';

const card = {
	boxShadow: '5px 5px 10px 1px rgba(0, 0, 255, .2)',
}

function getObj(id) {
	return movieData.filter(
		function(movie) {return movie.id == id}
	);
}

class Movie extends React.Component {
  render() {
		const {movieId, voteCount} = this.props;
		const movie = getObj(movieId);

    return (
			<Card style={{boxShadow: '5px 5px 15px 1px rgba(200, 200, 200, .6)'}}>
				<CardImg top width="100%" height='260px' src={movie[0].img} alt={movie[0].name}/>
				<CardBody>
				<CardTitle style={{textAlign: 'left', fontSize: '18px'}}>#{movie[0].id} {movie[0].name}</CardTitle>
				<CardText style={{textAlign: 'left'}}>Rate: {movie[0].rating}</CardText>
				<CardSubtitle style={{textAlign: 'left', color: '#ffc107'}}><i className="fas fa-star" style={{color:'#ffc107'}}></i> Star: {voteCount} </CardSubtitle>
				</CardBody>
			</Card>
		)
			
    //   <Table striped>
    //     <thead>
    //       <tr>
    //         <th>#</th>
    //         <th>Name</th>
    //         <th>Votes</th>
    //       </tr>
    //     </thead>
    //     <tbody >
    //       {this.props.candidates.map((candidate) => {
    //         return(
    //           <tr key={candidate.id}>
    //             <th>{candidate.id.toNumber()}</th>
    //             <td>{candidate.name}</td>
    //             <td>{candidate.voteCount.toNumber()}</td>
    //           </tr>
    //         )
    //       })}
    //     </tbody>
    //   </Table>
  
  }
}

export default Movie;