import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { config } from '../../config';
import Test from './Test';

const CourseUserList = () => {
/*   const [data,setData] = useState([]);

  const fetchData = () => {
    axios.get(config.apiURL + "members").then(res => {
      setData(res);
    })
  };
  useEffect(() => {
    fetchData();
  },[])
 */
  return (
    <div>
      <Test/>
    </div>
  )
}

export default CourseUserList
