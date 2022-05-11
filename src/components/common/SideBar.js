import React from 'react';
import {HashRouter,NavLink} from "react-router-dom";
import {Nav, NavItem} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faMessage,faUser,faUserGraduate,faListCheck
} from '@fortawesome/free-solid-svg-icons';
import logo from "../../assets/img/edu.png";




const SideBar = (props) => { 

    return (
     
      <div className={'sidebar ' + (props.isOpen ? 'is-open' : '')}>
        <div className="fixed">
          <div className="sidebar-header">
            <a className="times" onClick={() => props.setIsOpen(!props.isOpen)}>&times;</a>
            <img src={logo} alt="school"/>
          </div>
          <HashRouter>
            <Nav vertical className="list-unstyled p-3 mt-3 flex-column">
              <NavItem>
              <NavLink exact className="nav-link" to="/users" >
                <FontAwesomeIcon icon={faUser} className="mr-2"/>İstifadəçilər
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact className="nav-link" to="/courses" >
                <FontAwesomeIcon icon={faUserGraduate} className="mr-2"/>Kurslar
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact className="nav-link" to="/notifications" >
                <FontAwesomeIcon icon={faMessage} className="mr-2"/>Bildirişlər
              </NavLink>
            </NavItem>
            </Nav>
            </HashRouter>
        </div>
      </div>
    );
  }

export default SideBar;
