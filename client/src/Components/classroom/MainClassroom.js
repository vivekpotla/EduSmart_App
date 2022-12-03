import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import CardClassroom from './CardClassroom'
import axios from 'axios';

const MainClassroom = () => {
  const [userDetails, setUserDetails] = useState();
  const userId = localStorage.getItem("userId");
  const userType = localStorage.getItem("userType");

  async function getUserDetails() {
    const { data } = await axios.get(
      `http://localhost:5000/api/${userType}/${userId}`
    );
    setUserDetails(data.user)
    console.log(data);
  }
  
  useEffect(() => {
    getUserDetails();
  }, []);

  console.log(userDetails)
  return (
    <div className='container'>
      <Row>
        {userDetails && userDetails.classrooms.map((item,index) => (
          <Col xs={12} md={6} lg={4} key={index} >
            <CardClassroom classroomId={item} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default MainClassroom