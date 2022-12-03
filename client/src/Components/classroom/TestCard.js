import React, { useEffect, useState } from 'react'
import axios from 'axios'

const TestCard = ({ testId }) => {
    const [test, setTest] = useState({});
console.log(testId)
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
        </div>
    )
}

export default TestCard