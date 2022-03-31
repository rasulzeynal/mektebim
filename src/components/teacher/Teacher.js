import React, { Component } from 'react';
import {HashRouter,NavLink} from "react-router-dom";
import {CardGroup,Card,CardTitle} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faAddressBook,faMessage
} from '@fortawesome/free-solid-svg-icons';
import "../../assets/scss/_main.scss";

class Teacher extends Component {
  render() {
    return (
      <HashRouter>
    <div className='cards p-3'>
      <Card body inverse color="primary" className='teacher-list card' >
        <CardTitle>Müəllim siyahısı</CardTitle>
         <NavLink exact className="nav-link" to="/teacherList" ><FontAwesomeIcon className='icon' icon={faAddressBook} /></NavLink>
      </Card>
      <Card body inverse color="warning" className='student-list card'>
        <CardTitle>Şagird Siyahısı</CardTitle>
        <NavLink exact className="nav-link" to="/studentList" ><FontAwesomeIcon className='icon' icon={faAddressBook} /></NavLink>
      </Card>
      <Card body inverse color="danger" className='notifications card'>
        <CardTitle>Bildirişlər</CardTitle>
        <NavLink exact className="nav-link" to="/notifications" ><FontAwesomeIcon className='icon' icon={faMessage} /></NavLink>
      </Card>
      </div>
      <hr/>
      </HashRouter>
    )
  }
}
export default Teacher;