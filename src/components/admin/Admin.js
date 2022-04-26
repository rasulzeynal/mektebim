import React, { useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchUser } from '../../store/userSlice';
import { HashRouter,NavLink } from 'react-router-dom';
import { Card, CardSubtitle, CardTitle,Row } from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faUserPlus,faAddressBook,faMessage,faUserLock,faListCheck,faUserGraduate
} from '@fortawesome/free-solid-svg-icons';
import "../../assets/scss/_main.scss";


const Example = () => {

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
    <Row className='cards p-3'>
    <Card body inverse color="success" className='add-user card'>
        <CardTitle>İstifadəçi əlavə et</CardTitle>
        <NavLink exact className="nav-link" to="/add-user" ><FontAwesomeIcon className='icon' icon={faUserPlus} /></NavLink>
      </Card>
      <Card body inverse color="secondary" className='admin card' >
        <CardTitle>Kurslar</CardTitle>
        <NavLink exact className="nav-link" to="/classes" ><FontAwesomeIcon className='icon' icon={faUserGraduate} />
        <CardSubtitle className='card-text'>0</CardSubtitle>
        </NavLink>
      </Card>
    <Card body inverse color="primary" className='admin card' >
        <CardTitle>Admin</CardTitle>
        <NavLink exact className="nav-link" to="/adminList" ><FontAwesomeIcon className='icon' icon={faUserLock}/>
        <CardSubtitle className='card-text'>{admin.length}</CardSubtitle>
        </NavLink>
      </Card>
      <Card body inverse color="warning" className='teacher-list card' >
        <CardTitle>Müəllim</CardTitle>
        <NavLink exact className="nav-link" to="/teacherList" ><FontAwesomeIcon className='icon' icon={faAddressBook} />
        <CardSubtitle className='card-text'>{muellim.length}</CardSubtitle>
        </NavLink>
      </Card>
      <Card body inverse color="warning" className='student-list card'>
        <CardTitle>Şagird</CardTitle>
        <NavLink exact className="nav-link" to="/studentList" ><FontAwesomeIcon className='icon' icon={faAddressBook} />
        <CardSubtitle className='card-text'>{sagird.length}</CardSubtitle>
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