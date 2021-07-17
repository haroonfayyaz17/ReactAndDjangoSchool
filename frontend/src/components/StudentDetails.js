import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Container, Button } from 'reactstrap'
import Home from './Home'

class StudentDetails extends Component {
  clickBtn () {
    ReactDOM.render(
        <Home type='list' />,
        document.getElementById('root')
      )
  }

  detailsContainer (student) {
      var obj=this
    return (
      <Container  className="row h-100" >
        <div> <b>First Name:</b> {student.firstName}</div>
        <div> <b>Last Name:</b> {student.lastName}</div>
        <div> <b>Registration Date:</b> {student.registrationDate}</div>
        <Button
          onClick={function () {
            obj.clickBtn()
          }}
          color='info'
          style={{ margin: '10px' }}
        >
          Back
        </Button>
      </Container>
    )
  }

  render () {
    const student = this.props.student
    return (
      <React.Fragment>
          <h1 style={{ minWidth: '100%', textAlign:'center' }}>Student Details</h1>
        {student == null ? <div></div> : this.detailsContainer(student)}
      </React.Fragment>
    )
  }
}

export default StudentDetails
