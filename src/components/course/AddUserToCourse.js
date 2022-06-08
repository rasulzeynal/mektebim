import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import { useState,useEffect } from 'react';
import {config} from "../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faKey,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { Button,UncontrolledTooltip } from 'reactstrap';

const AddUserToCourse = () => {
    const [data,setData] = useState([]);

    const fetchData = () => {
        axios(config.apiURL + "users").then(res => {
            setData(res.data)
        } )
    }
   useEffect(() => {
      fetchData();
       },[])

    const columns = [
        {
            dataField: "name",
            text: "Ad Soyad"
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
            color="light ml-2"
            size="sm"
            id={"status" + index}
            onClick={() => this.toggleStatus(row.id, index, row.status)}
          >
            <FontAwesomeIcon
              icon={cell === 1 ? faEye : faEyeSlash}
              className="c-pointer"
            />
          </Button>
          <Button
            color="light ml-2"
            size="sm"
            id={"reset" + index}
            onClick={() => this.toggleResetModal(row.id)}
          >
            <FontAwesomeIcon
              icon={faKey}
              className="c-pointer"
            />
          </Button>
          <Button
            color="danger ml-2"
            size="sm"
            id={"delete" + index}
            onClick={() => this.removeData(row.id, index)}
          >
            <FontAwesomeIcon
              icon={faTimes}
              className="c-pointer"
            />
          </Button>

          <UncontrolledTooltip placement="top" target={"status" + index}>
            İstifadəçini {cell === 1 ? "deaktivləşdir" : "aktivləşdir"}
          </UncontrolledTooltip>
          <UncontrolledTooltip placement="top" target={"reset" + index}>
            Şifrəni sıfırla
          </UncontrolledTooltip>
          <UncontrolledTooltip placement="top" target={"delete" + index}>
            İstifadəçini sil
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