import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import { useState,useEffect } from 'react';
import {config} from "../../config";

const AddUserToCourse = () => {
    const [data,setData] = useState(null);
    useEffect(() => {
        getData();
    },[]);

    const getData = () => {
        axios.get(config.apiURL + "users")
        .then((res) => {
            console.log("AddUserToCourse",res.data);
            setData(res.data)
        })
    }

    const columns = [
        {
            dataField: "name",
            text: "Ad Soyad"
        },
        {
            dataField: "position",
            text: "Pozisiya"
        }
    ]
  return (
    <div>
    dhf
    </div>
  )
}

export default AddUserToCourse