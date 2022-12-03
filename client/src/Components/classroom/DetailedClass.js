import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import detailpng from "../../images/detailpng.jpeg"
import { Row, Col } from 'react-bootstrap'
import ReactPlayer from 'react-player';

function DetailedClass() {
    const navigate = useNavigate();
  const id = useParams().id;
  console.log(id);
  const [classs, setClass] = useState([]);
  const sendRequest = async () => {
    const res = await axios.get(`http://localhost:5000/api/class/${id}`)
      .catch(err => console.log(err))
    const data = res.data;
    console.log(data.class);
    setClass(data.class);
  }
  useEffect(() => {
    sendRequest();
  },[])
  console.log(classs);
  return (
    <div classs='display-6' style={{ color: "#324e8f" }}>
      <Row>
        <Col md={12} lg={3}></Col>
        <Col md={12} lg={6}>
        <h1 className='text-center'>{classs.title}</h1>
      <hr />
      <h1 className='text-center'>VIDEO-LECTURE</h1>
      <hr  className='w-50 text-center'/>
      <div >
        <ReactPlayer url={classs.classurl} controls={true} />
      </div>
      <Row>
        <Col xs={12} md={6}> <img src={classs.imageurl} alt="" className='w-100' /> </Col>
        <Col xs={12} md={6}>
          <p className='m-5'> CAPACITY : {classs.capacity}</p>
          <p className='m-5' >SUBJECT : {classs.subject}</p>
          <p className='m-5'>START DATE-TIME :{classs.startDate}  {classs.startTime}</p>
        </Col>
      </Row>
        </Col>
        <Col md={12} lg={3}> <div onClick={() => { navigate('addtest') }} className="btn btn-primary m-3">Add Test</div></Col>
      </Row>
      

    </div>
  )
}

export default DetailedClass