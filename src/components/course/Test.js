import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { config } from '../../config';

const Test = () => {
    const [data,setData] = useState([]);
    const fetchData = () => {
        axios.get(config.apiURL + "members").then(res => {
            console.log("test",res.data)
            setData(res.data)
        }
        )
    }
    data.filter(data => (data.course.name === "TOEFL"));
    console.log("filter",data)

    useEffect(() => {
        fetchData();
    },[])
  return (
    <div>
      test
    </div>
  )
}

export default Test
