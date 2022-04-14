import React from 'react';
import { HashRouter,NavLink } from 'react-router-dom';
import { Card, CardTitle,Row } from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faUserPlus,faAddressBook,faMessage,faUserLock,faListCheck
} from '@fortawesome/free-solid-svg-icons';
import "../../assets/scss/_main.scss";


const Example = (props) => {
  return (
    <HashRouter>
    <Row className='cards p-3'>
    <Card body inverse color="success" className='add-user card'>
        <CardTitle>İstifadəçi əlavə</CardTitle>
        <NavLink exact className="nav-link" to="/register" ><FontAwesomeIcon className='icon' icon={faUserPlus} /></NavLink>
      </Card>
    <Card body inverse color="primary" className='admin card' >
        <CardTitle>Admin</CardTitle>
        <NavLink exact className="nav-link" to="/adminList" ><FontAwesomeIcon className='icon' icon={faUserLock} /></NavLink>
      </Card>
      <Card body inverse color="warning" className='teacher-list card' >
        <CardTitle>Müəllim</CardTitle>
        <NavLink exact className="nav-link" to="/teacherList" ><FontAwesomeIcon className='icon' icon={faAddressBook} /></NavLink>
      </Card>
      <Card body inverse color="warning" className='student-list card'>
        <CardTitle>Şagird</CardTitle>
        <NavLink exact className="nav-link" to="/studentList" ><FontAwesomeIcon className='icon' icon={faAddressBook} /></NavLink>
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