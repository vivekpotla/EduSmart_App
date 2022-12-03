import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Row,Col,Button} from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

const TestCard = ({ testId }) => {

    const navigate = useNavigate();
    const [test, setTest] = useState({});
console.log(testId)
    const userType = localStorage.getItem("userType");
    async function getTest(id) {
        const { data } = await axios.get(
            `http://localhost:5000/api/test/${id}`
        );
        setTest(data.test)
        console.log(data)
    }


    useEffect(() => {
        getTest(testId);
    }, [])

    return (
        <div className='border rounded m-2'>
            <div className='display-6'>
                Title: <span className='display-7'>{test.title}</span>
            </div>
            <div className='display-6'>
                Description: <span className='display-7 text-truncate'>{test.description}</span>
            </div>
            <Row className='m-2'>
               {userType === "faculty" && 
               <>
                <Col sm={12} md={6}> <Button variant = "outline-primary" onClick={()=>navigate(`/addquestion/${testId}`)}>Add Question</Button></Col>
                <Col sm={12} md={6}>View Scores</Col>
               </>} 
               {userType === "student" && 
               <>
                <Col sm={12} md={6}> <Button variant = "outline-primary" onClick={()=>navigate(`/addquestion/${testId}`)}>Start Test</Button></Col>
                <Col sm={12} md={6}>LeaderBoard</Col>
               </>} 
            </Row>
        </div>
    )
}

export default TestCard