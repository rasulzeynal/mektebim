import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import { useState,useEffect } from 'react';
import {config} from "../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import { Button,UncontrolledTooltip } from 'reactstrap';
import { useLocation } from 'react-router-dom';
/* import { config } from '../../config'; */

const AddUserToCourse = () => {
    const [data,setData] = useState([]);
    let {state} = useLocation();



    const fetchData = () => {
        axios(config.apiURL + "users").then(res => {
          console.log("dfgdf",data)
            setData(res.data)
        } )
    }
   useEffect(() => {
      fetchData();
       },[]);
    const addUser = (id) => {
      axios.post(config.apiURL + `courses/${state.course.id}/members`, id)
    } 

    const columns = [
        {
            dataField: "name",
            text: "Ad Soyad"
        },
        {
          dataField: "fatherName",
          text: "Ata adı"
      },
        {
            dataField: "position",
            text: "Pozisiya",
            sort: true
        },
        {
            dataField:"",
            text: "Seç",
            formatter: (cell,row,index) => {
                return <div style={{minWidth: '80px'}}>
          <Button
            color="warning ml-2"
            size="sm"
            id={"add" + index}
            onClick={() => addUser(row.id)} 
            style={{width:"60px"}}
          >
            <FontAwesomeIcon
              icon={faPlus}
            />
          </Button>


          <UncontrolledTooltip placement="top" target={"add" + index}>
            İstifadəçini kursa əlavə et
          </UncontrolledTooltip>
        </div>;
            }

        }
    ]
  return (
    <div>
        <BootstrapTable 
        keyField='id'
        data={data} 
        columns={columns}
        striped
        hover
        condensed/>
    </div>
  )
}

export default AddUserToCourse