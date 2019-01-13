import React from 'react'
import { Button } from 'reactstrap';

const btnStyle = {
  //width: '40px',
  fontSize: '20px',
  background:'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
}

class from extends React.Component {
  render() {
    return (
      <form onSubmit={(event) => {
        event.preventDefault()
        this.props.castVote(this.candidateId.value)
      }}>
        <div class='form-group'>
          <label>Select Candidate</label>
          <select ref={(input) => this.candidateId = input} class='form-control'>
            {this.props.candidates.map((candidate) => {
              return <option value={candidate.id}>{candidate.name}</option>
            })}
          </select>
        </div>
        <Button type='submit' class='btn btn-primary' color="primary"> Vote </Button>
        <hr />
      </form>
    )
  }
}

export default from
