import React from 'react'
import { Button } from 'reactstrap';

const btnStyle = {
  //width: '40px',
  fontSize: '20px',
  background:'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
}

const form = {
  width: '60%',
  margin: '0 auto',
  marginTop: 40,
  fontSize: '25px',
}

const select = {
  width:'20%', 
  display:'inline-block',
  marginLeft: 20,
  marginRight: 20,
}

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={(event) => {
        event.preventDefault()
        this.props.castVote(this.candidateId.value)
      }} style={form}>
        <div>
          <label>Select your favorate movies: </label>
          <select ref={(input) => this.candidateId = input} style={select} className='form-control' >
            {this.props.candidates.map((candidate) => {
              return <option key={candidate.id} value={candidate.id}>{candidate.name}</option>
            })}
          </select>
          <Button style={{fontSize: '18px', color: '#ffffff'}} color="warning"> Star it  <i className="fas fa-star" style={{color:'#ffffff'}}></i></Button>
        </div>
      </form>
    )
  }
}

export default Form;
