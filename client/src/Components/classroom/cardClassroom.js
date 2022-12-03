import React, { useEffect, useState } from 'react'
import './CardClassroom.css'
import axios from "axios";
import { FaEllipsisV } from 'react-icons/fa'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCirclePlay,faStar,faInfinity,faIndianRupeeSign,faCircleInfo,faStarHalf} from '@fortawesome/free-solid-svg-icons'

const CardClassroom = ({ classroomId }) => {
  const [classroom, setClassroom] = useState();
  const [faculty, setFaculty] = useState();
  const [isLoading, setIsLoading] = useState(true);

  async function getFaculty(id) {
    const { data } = await axios.get(
      `http://localhost:5000/api/faculty/${id}`
    );
    setFaculty(data.user)
  }

  async function getClassroom(id) {
    const { data } = await axios.get(
      `http://localhost:5000/api/class/${id}`
    );
    setClassroom(data.class)
    setIsLoading(false)
  }

  useEffect(() => {
    getClassroom(classroomId);
  }, [])

  useEffect(() => {
    if (!isLoading) {
      getFaculty(classroom.faculties[0]);
    }
  },[isLoading])

return (
  <div className='container'>
    {faculty && (classroom &&
      <div className="card">
        <div className="card-header display-7">
          {classroom.title}
        </div>
        <div className="card-body">
          <h5 className="card-title">{classroom.subject}</h5>
          <p className="card-text">Start Date: {classroom.startDate}</p>
          <div className='d-flex justify-content-between align-items-center'><div href="#" className="btn btn-primary">Open</div>
            <div className='text-end '>{faculty.name}</div></div>
        </div>
      </div>)}
      {/* <div className="mt-2 w-100">
        <div className="row p-3">
            <div className="col-md-4">
                <img src={classroom.imageurl} className="w-100 border" alt=""/>
            </div>
            <div className="col-md-5">
            <h6 className="fw-bold">{classroom.title}</h6>
            <p>{classroom.description}</p>
            <p>4.9 <FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar}  className="text-warning"/><FontAwesomeIcon icon={faStar} className="text-warning"  /><FontAwesomeIcon icon={faStar} className="text-warning" />(44,123) </p>
            <p className="text-secondary"> 13009 total hours. 119 lectures. All levels </p>
            </div>
            <div className='col-md-3'><h4 className='fw-bold'><FontAwesomeIcon icon={faIndianRupeeSign} /> {classroom.price}</h4></div>
        </div>
        <hr></hr>
    </div> */}
  </div>
)
}

export default CardClassroom