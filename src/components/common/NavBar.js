import React, {useState } from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAlignLeft, faBars, faHome, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {
  Navbar,
  Collapse,
  Button,
  Nav,
  NavItem,
} from 'reactstrap';
import {useSelector,useDispatch } from 'react-redux';
import { logoutInitiate } from '../../redux/action';


const NavBar = (props) => {
const  [isOpen,setIsOpen] = useState(false);
const {user} = useSelector(state => state.auth);
let dispatch = useDispatch();


  const logout = () =>{
    dispatch(logoutInitiate());
  }
  
    return (
      <Navbar className="navbar p-3 " expand="sm">
        <Button color="light" onClick={() =>props.setIsOpen(!props.isOpen)}>
          <FontAwesomeIcon icon={faAlignLeft}/>
        </Button>
        <Button color="dark"  className="d-block d-sm-none">
          <FontAwesomeIcon icon={faBars}/>
        </Button>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto mt-3 mt-sm-0" navbar>
            <NavItem>
              <NavLink exact to="/" className="nav-link c-pointer">
                <FontAwesomeIcon icon={faHome} className="mr-2 text-secondary" />
                <strong>Ana səhifə</strong>
              </NavLink>
            </NavItem>
            <NavItem>
            {user && user ? (
              <NavLink className="nav-link c-pointer" to="/login" exact onClick={logout}>
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2 text-secondary" />
              <strong>Çıxış</strong>
            </NavLink>
            ) : (
              <NavLink className="nav-link c-pointer" exact to="/home">
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2 text-secondary" />
                <strong>Giriş</strong>
              </NavLink>
            )}
                
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }



export default NavBar;