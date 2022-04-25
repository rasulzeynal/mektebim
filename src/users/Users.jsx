import React from 'react';
import { HashRouter,NavLink } from 'react-router-dom';
import { Row,Card,CardTitle,CardSubtitle, Col } from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
 faAddressBook,faUserLock,
} from '@fortawesome/free-solid-svg-icons';

const Users = () => {
  return (
    <HashRouter>
    <Row >
    <Col className="cards">
    <Card body inverse color="primary" className='admin card' >
        <CardTitle>Admin</CardTitle>
        <NavLink exact className="nav-link" to="/adminList" ><FontAwesomeIcon className='icon' icon={faUserLock}/>
        <CardSubtitle className='card-text'>1</CardSubtitle>
        </NavLink>
      </Card>
    </Col>
    <Col className=" cards">
    <Card body inverse color="warning" className='teacher-list card' >
        <CardTitle>Müəllim</CardTitle>
        <NavLink exact className="nav-link" to="/teacherList" ><FontAwesomeIcon className='icon' icon={faAddressBook} />
        <CardSubtitle className='card-text'>3</CardSubtitle>
        </NavLink>
      </Card>
    </Col>
    <Col className=" cards">
    <Card body inverse color="warning" className='student-list card'>
        <CardTitle>Şagird</CardTitle>
        <NavLink exact className="nav-link" to="/studentList" ><FontAwesomeIcon className='icon' icon={faAddressBook} />
        <CardSubtitle className='card-text'>20</CardSubtitle>
        </NavLink>
      </Card>
    </Col>
    <Col className='col-3' style={{height:"100%",borderLeft:"1px solid #e3e9e4"}}>
        İstifadəçi əlavə et
    </Col>
    </Row>
    </HashRouter>
  )
}

export default Users