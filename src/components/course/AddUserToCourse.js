import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import axios from "axios";
import { useState, useEffect } from "react";
import { config } from "../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button, UncontrolledTooltip } from "reactstrap";
import { connect } from "react-redux";

const AddUserToCourse = ({ auth }) => {
  const [users, setUsers] = useState([]);
  const [checkedUsers,setCheckedUsers] = useState([]);
  const fetchData = () => {
    axios(config.apiURL + "users").then((res) => {
      setUsers(res.data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const sendToGroup = (id) => {
    const user = users && users.filter((user) => user.id === id)[0];
    console.log("secilmis user:", user.name);
    console.log("secilmis kurs id:", auth.course.id);
    axios
      .post(config.apiURL + `members`, {
        courseId: auth.course.id,
        user: user.name,
        checked: true,
      })
      .then((res) => {
        if (res.status === 201) {
          axios.get(config.apiURL + "members").then(
            res => {
              setCheckedUsers(res.data);
            }
          )
        }
      });
  };

  const columns = [
    {
      dataField: "name",
      text: "Ad Soyad",
      headerStyle: () => {
        return { width: "200px" };
      },
    },
    {
      dataField: "fatherName",
      text: "Ata adı",
      headerStyle: () => {
        return { width: "150px" };
      },
    },
    {
      dataField: "position",
      text: "Pozisiya",
      sort: true,
      headerStyle: () => {
        return { width: "150px" };
      },
    },
    {
      dataField: "",
      text: "Seç",
      formatter: (cell, row, index) => {
        return (
          <div style={{ minWidth: "80px" }}>
           <Button
            color="warning ml-2"
            size="sm"
            id={"add" + index}
            style={{ width: "60px" }}
            onClick={() => sendToGroup(row.id)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </Button>
            <UncontrolledTooltip placement="top" target={"add" + index}>
              İstifadəçini kursa əlavə et
            </UncontrolledTooltip>
          </div>
        );
      },
    },
  ];

  return (
    <div style={{ margin: "10px 0 0 40px" }}>
      <BootstrapTable
        keyField="id"
        data={users}
        columns={columns}
        striped
        hover
        condensed
        /*  rowEvents={rowEvents}  */
      />
    </div>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(AddUserToCourse);
