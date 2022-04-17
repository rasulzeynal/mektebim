import React, { useEffect, useState } from 'react';
import { HashRouter,NavLink } from 'react-router-dom';
import { Card, CardSubtitle, CardTitle,Row } from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faUserPlus,faAddressBook,faMessage,faUserLock,faListCheck
} from '@fortawesome/free-solid-svg-icons';
import "../../assets/scss/_main.scss";
import axios from 'axios';


const Example = () => {

  const [dataAdmin,setDataAdmin] = useState([]);
  const [dataTeacher,setDataTeacher] = useState([]);
  const [dataStudent,setDataStudent] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:3002/data")
    .then ((users) => {
    const user=users.data.filter((data) => data.position === "Admin")
       setDataAdmin(user)
    })
  },[]);

  useEffect(() => {
    axios.get("http://localhost:3002/data")
    .then ((users) => {
    const user=users.data.filter((data) => data.position === "Muellim")
       setDataTeacher(user)
    })
  },[]);

  useEffect(() => {
    axios.get("http://localhost:3002/data")
    .then ((users) => {
    const user=users.data.filter((data) => data.position === "sagird")
       setDataStudent(user)
    })
  },[]);
  
  return (
    <HashRouter>
    <Row className='cards p-3'>
    <Card body inverse color="success" className='add-user card'>
        <CardTitle>İstifadəçi əlavə et</CardTitle>
        <NavLink exact className="nav-link" to="/register" ><FontAwesomeIcon className='icon' icon={faUserPlus} /></NavLink>
      </Card>
    <Card body inverse color="primary" className='admin card' >
        <CardTitle>Admin</CardTitle>
        <NavLink exact className="nav-link" to="/adminList" ><FontAwesomeIcon className='icon' icon={faUserLock}/>
        <CardSubtitle className='card-text'>{dataAdmin.length}</CardSubtitle>
        </NavLink>
      </Card>
      <Card body inverse color="warning" className='teacher-list card' >
        <CardTitle>Müəllim</CardTitle>
        <NavLink exact className="nav-link" to="/teacherList" ><FontAwesomeIcon className='icon' icon={faAddressBook} />
        <CardSubtitle className='card-text'>{dataTeacher.length}</CardSubtitle>
        </NavLink>
      </Card>
      <Card body inverse color="warning" className='student-list card'>
        <CardTitle>Şagird</CardTitle>
        <NavLink exact className="nav-link" to="/studentList" ><FontAwesomeIcon className='icon' icon={faAddressBook} />
        <CardSubtitle className='card-text'>{dataStudent.length}</CardSubtitle>
        </NavLink>
      </Card>
      <Card body inverse color="info" className='add-student card'>
        <CardTitle>Tapşırıqlar</CardTitle>
        <NavLink exact className="nav-link" to="/tasks" ><FontAwesomeIcon className='icon' icon={faListCheck} /></NavLink>
      </Card>
      <Card body inverse color="danger" className='notifications card'>
        <CardTitle>Bildirişlər</CardTitle>
        <NavLink exact className="nav-link" to="/notifications" ><FontAwesomeIcon className='icon' icon={faMessage} /></NavLink>
      </Card>
      </Row>
      <hr/>
      </HashRouter>
  );
};

export default Example;