import React from 'react';
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
import {config} from "../../config"




class Users extends React.Component{  
  state = {
    data: null,
    showAddModal:false,
    
    

  }
  
  toggle = () => {
    this.setState({
      showAddModal: !this.state.showAddModal
    })
  }

  getData() {
    this.setState({loading: true});
    axios.get(config.apiURL + "data").then(res => {
      this.setState({
        loading: false,
        data: res.data
      });
    });
  }

  createData = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let data = {};

    for (const [key,value] of formData.entries()) {
      data[key] = value;
    }

    axios.post(config.apiURL + "data/create",data)
    .then(res => {
      console.log(res)
      if (res.data.status === 201){
      console.log(res.data.data)
      this.setState(prevState => ({
        data : [
          ...prevState.data,
          res.data
        ]
      }));
  }})
    e.target.reset();
  }
  
  componentDidMount() { 
    this.getData();
   }
   
  render() {
    return (
    <HashRouter>
      <div className="me-4" style={{ display: "flex", justifyContent: "end" }}>
        <Button
          onClick={this.toggle} 
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
        <Modal  isOpen={this.state.showAddModal} toggle={this.toggle}>
          <ModalBody>
            <h2 className="text-center mb-5">İstifadəçi əlavə et</h2>
            <Form onSubmit={this.createData}>
              <div className="form-outline mb-4" >
                <Input
                  type="text"
                  className="form-control "
                  placeholder="Ad Soyad"
                  name="name"
                  id='name'
                />
              </div>
              <div className="form-outline mb-4">
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Ata adı"
                  name="ata_adi"
                  id='ata_adi'
                />
              </div>
              <div className="form-outline mb-4">
                <Input
                  type="email"
                  className="form-control"
                  placeholder="Mail"
                  name="mail"
                  id='mail'
                />
              </div>
              <select 
              className="custom-select mb-4" 
              required
              name='position'
              id='position'
              >
                <option value="">--</option>
                <option value="Admin">Admin</option>
                <option value="Muellim">Müəllim</option>
                <option value="sagird">Şagird</option>
              </select>
              <div className="form-outline mb-4">
                <Input
                  type="password"
                  className="form-control"
                  placeholder="Şifrə"
                  name="sifre"
                  id='sifre'
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
            <Button color="secondary"  onClick={this.toggle} >
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
            <CardSubtitle className="card-text">{this.state.data ? this.state.data.filter(user => user.position === "Admin").length : 0}</CardSubtitle>
          </NavLink>
        </Card>
        <Card body inverse color="warning" className="teacher-list card col">
          <CardTitle>Müəllim</CardTitle>
          <NavLink exact className="nav-link" to="/teacherList">
            <FontAwesomeIcon className="icon" icon={faAddressBook} />
            <CardSubtitle className="card-text">{this.state.data ? this.state.data.filter(user => user.position === "Muellim").length : 0}</CardSubtitle>
          </NavLink>
        </Card>
        <Card body inverse color="warning" className="student-list card col">
          <CardTitle>Şagird</CardTitle>
          <NavLink exact className="nav-link" to="/studentList">
            <FontAwesomeIcon className="icon" icon={faAddressBook} />
            <CardSubtitle className="card-text">{this.state.data ? this.state.data.filter(user => user.position === "sagird").length : 0}</CardSubtitle>
          </NavLink>
        </Card>
      </Row>
    </HashRouter>
  )
        }
};

export default Users ;
