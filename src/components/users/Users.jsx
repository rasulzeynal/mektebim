import React from 'react';
import {getUsers,addUser} from "../../redux/user/userAction";
import {connect} from "react-redux";
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




class Users extends React.Component{  
  state = {
    modal:false,
    name:"",
    ata_adi:"",
    mail:"",
    position:"",
    sifre:""

  }
  componentDidMount() { 
    this.props.getUsers();
   }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }
  
  handleTextChange = event => {
    const {target: {name,value}} = event;
    this.setState({ [name]: value})
  }
  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addUser(this.state);
    this.setState({
    name:"",
    ata_adi:"",
    mail:"",
    position:"",
    sifre:""
    })
  }

  render() {
    const users = this.props.users;
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
        <Modal  isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody>
            <h2 className="text-center mb-5">İstifadəçi əlavə et</h2>
            <Form>
              <div className="form-outline mb-4" onSubmit={this.handleOnSubmit}>
                <Input
                  type="text"
                  className="form-control "
                  placeholder="Ad Soyad"
                  name="name"
                  onChange={this.handleTextChange}
                  value={this.state.name}
                />
              </div>
              <div className="form-outline mb-4">
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Ata adı"
                  name="ata_adi"
                  onChange={this.handleTextChange}
                  value={this.state.ata_adi}
                />
              </div>
              <div className="form-outline mb-4">
                <Input
                  type="email"
                  className="form-control"
                  placeholder="Mail"
                  name="mail"
                  onChange={this.handleTextChange}
                  value={this.state.mail}
                />
              </div>
              <select className="custom-select mb-4" required name='position' onChange={this.handleTextChange} >
                <option value="">--</option>
                <option value="Admin">Admin</option>
                <option value="Müəllim">Müəllim</option>
                <option value="Şagird">Şagird</option>
              </select>
              <div className="form-outline mb-4">
                <Input
                  type="password"
                  className="form-control"
                  placeholder="Şifrə"
                  name="sifre"
                  onChange={this.handleTextChange}
                  value={this.state.sifre}
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
          <NavLink exact className="nav-link" to="/adminList">
            <FontAwesomeIcon className="icon" icon={faUserLock} />
            <CardSubtitle className="card-text">{users ? users.filter(user => user.position === "Admin").length : 0}</CardSubtitle>
          </NavLink>
        </Card>
        <Card body inverse color="warning" className="teacher-list card col">
          <CardTitle>Müəllim</CardTitle>
          <NavLink exact className="nav-link" to="/teacherList">
            <FontAwesomeIcon className="icon" icon={faAddressBook} />
            <CardSubtitle className="card-text">{users ? users.filter(user => user.position === "Muellim").length : 0}</CardSubtitle>
          </NavLink>
        </Card>
        <Card body inverse color="warning" className="student-list card col">
          <CardTitle>Şagird</CardTitle>
          <NavLink exact className="nav-link" to="/studentList">
            <FontAwesomeIcon className="icon" icon={faAddressBook} />
            <CardSubtitle className="card-text">{users ? users.filter(user => user.position === "sagird").length : 0}</CardSubtitle>
          </NavLink>
        </Card>
      </Row>
    </HashRouter>
  )
        }
};


const mapStateToProps = state => {
  return {
    users:state.user.users
  }
} 
export default connect(mapStateToProps,{getUsers,addUser})(Users) ;
