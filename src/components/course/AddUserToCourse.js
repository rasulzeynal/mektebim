import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import { useState,useEffect } from 'react';
import {config} from "../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import { Button,UncontrolledTooltip } from 'reactstrap';
import {connect} from "react-redux";

const AddUserToCourse = ({auth}) => {
    const [data,setData] = useState([]);
 

    const fetchData = () => {
        axios(config.apiURL + "users").then(res => {
            setData(res.data)
        } )
    }
  useEffect(() => {
      fetchData();
  },[]);

  const sendToGroup = (index) => {
    const user = data && data.filter(user => (user.id === index))[0]
    console.log("gfg",user)
    axios.post(config.apiURL + `courses/${auth.course.id}/members `,user)
  }

    const columns = [
        {
            dataField: "name",
            text: "Ad Soyad",
            headerStyle: () => {
              return { width: '200px'};
            }
        },
        {
          dataField: "fatherName",
          text: "Ata adı",
          headerStyle: (colum, colIndex) => {
            return { width: '150px'};
          }
      },
        {
            dataField: "position",
            text: "Pozisiya",
            sort: true,
            headerStyle: (colum, colIndex) => {
              return { width: '150px'};
            }
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
            style={{width:"60px"}}
            onClick = {() => sendToGroup(index)}
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
    <div style={{margin:"10px 0 0 40px"}}>
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

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(AddUserToCourse);