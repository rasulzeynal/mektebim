import React, { useEffect,useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchUser } from '../../store/userSlice';
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
import { createtedUser } from '../../store/userSlice';
import {v4 as uuidv4} from "uuid"




const Users = () => {
  const [formData,setFormData] = useState({
    id:uuidv4(),
    name:"",
    ata_adi:"",
    mail:"",
    position:"",
    sifre:""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createtedUser(formData));
    setFormData({
      id:uuidv4(),
      name:"",
      ata_adi:"",
      mail:"",
      position:"",
      sifre:""
    })
  }

  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  }

  const dispatch = useDispatch();
  const {users} = useSelector(state => state.users)

  useEffect(() => {
    dispatch(fetchUser())
  },[dispatch])


  const admin = users.filter((user) => user.position === "Admin");
  const muellim = users.filter((user) => user.position === "Muellim");
  const sagird = users.filter((user) => user.position === "sagird");

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
        <Modal isOpen={modal} toggle={toggle}>
          <ModalBody>
            <h2 className="text-center mb-5">İstifadəçi əlavə et</h2>
            <Form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <Input
                  type="text"
                  className="form-control "
                  placeholder="Ad Soyad"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData,name:e.target.value})}
                />
              </div>
              <div className="form-outline mb-4">
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Ata adı"
                  value={formData.ata_adi}
                  onChange={(e) => setFormData({...formData,ata_adi:e.target.value})}
                />
              </div>
              <div className="form-outline mb-4">
                <Input
                  type="email"
                  className="form-control"
                  placeholder="Mail"
                  value={formData.mail}
                  onChange={(e) => setFormData({...formData,mail:e.target.value})}
                />
              </div>
              <select className="custom-select mb-4" required
              onChange={(e) => setFormData({...formData,position:e.target.value})}>
                <option value="">--</option>
                <option value="Admin">Admin</option>
                <option value="Müəllim">Muellim</option>
                <option value="Şagird">Sagird</option>
              </select>
              <div className="form-outline mb-4">
                <Input
                  type="password"
                  className="form-control"
                  placeholder="Şifrə"
                  value={formData.sifre}
                  onChange={(e) => setFormData({...formData,sifre:e.target.value})}
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
            <Button color="secondary" onClick={toggle}>
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
            <CardSubtitle className="card-text">{admin.length}</CardSubtitle>
          </NavLink>
        </Card>
        <Card body inverse color="warning" className="teacher-list card col">
          <CardTitle>Müəllim</CardTitle>
          <NavLink exact className="nav-link" to="/teacherList">
            <FontAwesomeIcon className="icon" icon={faAddressBook} />
            <CardSubtitle className="card-text">{muellim.length}</CardSubtitle>
          </NavLink>
        </Card>
        <Card body inverse color="warning" className="student-list card col">
          <CardTitle>Şagird</CardTitle>
          <NavLink exact className="nav-link" to="/studentList">
            <FontAwesomeIcon className="icon" icon={faAddressBook} />
            <CardSubtitle className="card-text">{sagird.length}</CardSubtitle>
          </NavLink>
        </Card>
      </Row>
    </HashRouter>
  );
};

export default Users;
