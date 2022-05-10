import React, { useEffect, useState } from 'react';
import { HashRouter, NavLink } from "react-router-dom";
import {
  Row,
  Card,
  CardTitle,
  CardSubtitle,
  Button,
  Modal,
  ModalFooter,
  ModalBody,
  Input,
  Form,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faUserLock,
  faPlus,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import {useHistory} from "react-router-dom";
import {config} from "../../config"




const Users = () => {  
  
const  [data,setData]= useState(null);
const [error,setError] = useState("");
const  [showAddModal,setShowAddModal] = useState(false);
const  [loading,setLoading] = useState(false);
const [name,setName] = useState("");
const [fatherName,serFatherName] = useState("");
const [email,setEmail] = useState("");
const [position,setPosition] = useState("");
const [password,setPassword] = useState("");
let history = useHistory();

const toggle = () => {
  setShowAddModal(!showAddModal)
}

const getData =() => {
  setLoading(true);
  axios.get(config.apiURL + "data").then(res => {
    setLoading(false);
    setData(res.data);
  });
}

const createData = (e) => {
  e.preventDefault();
    axios.post("http://localhost:5000/api/auth/register",{
      name,
      fatherName,
      email,
      position,
      password
    }).then((response) => {
      console.log("response",response);
      localStorage.setItem(
        "register",
        JSON.stringify({
          userLogin: true,
          token: response.data.access_token,
        })
      );
      setError("");
      setName("");
      serFatherName("");
      setEmail("");
      setPosition("");
      setPassword("");
      history.push("/");
    })
    .catch((error) => setError(error.response.data.message));
  }


 /* const  createData = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let data = {};

    for (const [key,value] of formData.entries()) {
      data[key] = value;
    }

    axios.post(config.apiURL + "data",data)
    .then(res => {
      console.log(res)
      if (res.data.status === 201){
      console.log(res.data.data)
      setData(prevState => ({
        data : [
          ...prevState.data,
          res.data
        ]
      }));
  }})
    e.target.reset();
  } */
  
  useEffect(()=>{
    getData()
  },[])
   
    return (
    <HashRouter>
      <div className="me-4" style={{ display: "flex", justifyContent: "end" }}>
        <Button
          onClick={toggle} 
          color="success"
          style={{
            display: "flex",
            transition: "ease",
            borderRadius: "6px",
            marginTop: "10px",
          }}
        >
          <FontAwesomeIcon
            className="icon mr-2"
            icon={faPlus}
            style={{ color: "white" }}
          />
          <h3 style={{ fontSize: "15px", color: "white", margin: "0" }}>
            İstifadəçi əlavə et
          </h3>
        </Button>
        <Modal  isOpen={showAddModal} toggle={toggle}>
          <ModalBody>
            <h2 className="text-center mb-5">İstifadəçi əlavə et</h2>
            <Form onSubmit={createData}>
              <div className="form-outline mb-4" >
                <Input
                  type="text"
                  className="form-control "
                  placeholder="Ad Soyad"
                  name="name"
                  id='name'
                  value={name}
                  onChange= {(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-outline mb-4">
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Ata adı"
                  name="fatherName"
                  id='fatherName'
                  value={fatherName}
                  onChange= {(e) => serFatherName(e.target.value)}
                />
              </div>
              <div className="form-outline mb-4">
                <Input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  id='email'
                  value={email}
                  onChange= {(e) => setEmail(e.target.value)}
                />
              </div>
              <select 
              className="custom-select mb-4" 
              required
              name='position'
              id='position'
              onChange= {(e) => setPosition(e.target.value)}
              >
                <option value="">--</option>
                <option value="ADMIN">Admin</option>
                <option value="MUELLIM">Müəllim</option>
                <option value="SAGIRD">Şagird</option>
              </select>
              <div className="form-outline mb-4">
                <Input
                  type="password"
                  className="form-control"
                  placeholder="Şifrə"
                  name="password"
                  id='password'
                  value={password}
                  onChange= {(e) => setPassword(e.target.value)}
                  />
              </div>
              <div className="d-flex justify-content-center">
                <Button
                  type="submit"
                  className="btn btn-success btn-block btn gradient-custom-4 text-body"
                  style={{display:"flex",justifyContent:"center",alignItems:"center"}}
                >
                  <FontAwesomeIcon
                    icon={faUserPlus}
                    size="sm"
                    className="mr-2 "
                    style={{ color: "white"}}
                  />
                  <p style={{ color: "white",margin:"0" }}>Əlavə et</p>
                </Button>
              </div>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary"  onClick={toggle} >
              Ləğv et
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <hr />
      <Row className="cards p-2 ">
        <Card body inverse color="primary" className="admin card col">
          <CardTitle>Admin</CardTitle>
          <NavLink exact className="nav-link" to="/admin-list">
            <FontAwesomeIcon className="icon" icon={faUserLock} />
            <CardSubtitle className="card-text">{data ? data.filter(user => user.position === "Admin").length : 0}</CardSubtitle>
          </NavLink>
        </Card>
        <Card body inverse color="warning" className="teacher-list card col">
          <CardTitle>Müəllim</CardTitle>
          <NavLink exact className="nav-link" to="/teacherList">
            <FontAwesomeIcon className="icon" icon={faAddressBook} />
            <CardSubtitle className="card-text">{data ? data.filter(user => user.position === "Muellim").length : 0}</CardSubtitle>
          </NavLink>
        </Card>
        <Card body inverse color="warning" className="student-list card col">
          <CardTitle>Şagird</CardTitle>
          <NavLink exact className="nav-link" to="/studentList">
            <FontAwesomeIcon className="icon" icon={faAddressBook} />
            <CardSubtitle className="card-text">{data ? data.filter(user => user.position === "sagird").length : 0}</CardSubtitle>
          </NavLink>
        </Card>
      </Row>
    </HashRouter>
  )
        }

export default Users ;
