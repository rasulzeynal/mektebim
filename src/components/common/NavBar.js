import React, { useEffect, useState } from 'react';
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
import { Link } from 'react-router-dom';


const NavBar = (props) => {
const  [isOpen,setIsOpen] = useState(false);
const  [login,setLogin] = useState("");

  useEffect(()=>{
    hydrateStateWithLocalStorage()
  },[props.logOutUser]);

  const logout = () =>{
    localStorage.removeItem("login")
    props.setLogOutUser(true);
  }

  const hydrateStateWithLocalStorage = () => {
    if (localStorage.hasOwnProperty("login")) {
      let value = localStorage.getItem("login");
      try {
        value = JSON.parse(value);
        setLogin(value)
        } catch(e) {
          setLogin("")
      }
    }
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
            {login && login ? (
              <a className="nav-link c-pointer" onClick={logout}>
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2 text-secondary" />
              <strong>Çıxış</strong>
            </a>
            ) : (
              <Link to="/login">
              <a className="nav-link c-pointer">
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2 text-secondary" />
                <strong>Giriş</strong>
              </a>
              </Link>
            )}
                
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }



export default NavBar;