import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'
import StudentList from './StudentList'
import NewStudentModal from './NewStudentModal'

import axios from 'axios'

import { API_URL } from '../constants'
import StudentDetails from './StudentDetails'

class Home extends Component {
  state = {
    students: []
  }

  componentDidMount () {
    this.resetState()
  }

  getStudents = () => {
    axios.get(API_URL).then(res => this.setState({ students: res.data }))
  }

  resetState = () => {
    this.getStudents()
  }

  render () {
    const type = this.props.type
    var row1, row2
    if (type === 'list') {
      row1 = (
        <Row>
          <Col>
            <StudentList
              students={this.state.students}
              resetState={this.resetState}
            />
          </Col>
        </Row>
      )

      row2 = (
        <Row>
          <Col>
            <NewStudentModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      )
    } else {
      row1 = <StudentDetails student={this.props.student} />
    }

    return (
      <Container style={{ marginTop: '20px' }}>
        {row1}
        {row2}
      </Container>
    )
  }
}

export default Home
