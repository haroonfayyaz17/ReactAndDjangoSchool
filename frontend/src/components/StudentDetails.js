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
      <Container>
        <div> First Name: {student.firstName}</div>
        <div> Last Name: {student.lastName}</div>
        <div> Registration Date: {student.registrationDate}</div>
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
        {student == null ? <div></div> : this.detailsContainer(student)}
      </React.Fragment>
    )
  }
}

export default StudentDetails
