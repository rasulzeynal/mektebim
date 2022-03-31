import React from 'react';
import { HashRouter,NavLink } from 'react-router-dom';
import { Card, CardTitle, CardGroup } from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faUserPlus,faAddressBook,faMessage,faUserLock,faAlignLeft
} from '@fortawesome/free-solid-svg-icons';
import "../../assets/scss/_main.scss";


const Example = (props) => {
  return (
    <HashRouter>
    <div className='cards p-3'>
    <Card body inverse color="secondary" className='admin card' >
        <CardTitle>Admin</CardTitle>
        <NavLink exact className="nav-link" to="/adminList" ><FontAwesomeIcon className='icon' icon={faUserLock} /></NavLink>
      </Card>
      <Card body inverse color="primary" className='teacher-list card' >
        <CardTitle>Müəllim</CardTitle>
        <NavLink exact className="nav-link" to="/teacherList" ><FontAwesomeIcon className='icon' icon={faAddressBook} /></NavLink>
      </Card>
      <Card body inverse color="success" className='add-teacher card'>
        <CardTitle>Müəllim əlavə et</CardTitle>
        <NavLink exact className="nav-link" to="/addTeacher" ><FontAwesomeIcon className='icon' icon={faUserPlus} /></NavLink>
      </Card>
      <Card body inverse color="warning" className='student-list card'>
        <CardTitle>Şagird</CardTitle>
        <NavLink exact className="nav-link" to="/studentList" ><FontAwesomeIcon className='icon' icon={faAddressBook} /></NavLink>
      </Card>
      <Card body inverse color="info" className='add-student card'>
        <CardTitle>Şagird əlavə et</CardTitle>
        <NavLink exact className="nav-link" to="/addStudent" ><FontAwesomeIcon className='icon' icon={faUserPlus} /></NavLink>
      </Card>
      <Card body inverse color="danger" className='notifications card'>
        <CardTitle>Bildirişlər</CardTitle>
        <NavLink exact className="nav-link" to="/notifications" ><FontAwesomeIcon className='icon' icon={faMessage} /></NavLink>
      </Card>
      </div>
      <hr/>
      </HashRouter>
  );
};

export default Example;