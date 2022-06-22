import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { config } from '../../config';

const Test = (props) => {
    const [data,setData] = useState([]);
    const fetchData = () => {
        axios.get(config.apiURL + "members").then(res => {
            console.log("test",res.data)
            setData(res.data)
        }
        )
    }
     const datas = data.filter(data => data.course === props.auth.course.id); 
     console.log("filter",datas)  

    useEffect(() => {
        fetchData();
    },[])
    console.log('state',props.auth.course.id)
  return (
    <div>
      test
    </div>
  )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Test); 
