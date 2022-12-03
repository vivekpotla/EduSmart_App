import React, { useEffect } from 'react'
import axios from 'axios'

const AddTest = () => {

  async function getAllTests() {
    const { data } = await axios.get(
      `http://localhost:5000/api/test/addtest`
    );
    console.log(data);
  }

  useEffect(() => {
    
  },[])

  return (
    <div>AddTest</div>
  )
}

export default AddTest