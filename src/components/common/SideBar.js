import React from 'react';
import {HashRouter,NavLink} from "react-router-dom";
import {Nav, NavItem} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faUsers, faBuilding, faCalendarCheck,
} from '@fortawesome/free-solid-svg-icons';



class SideBar extends React.Component {
    
    render(){
    return (
      <div className={'sidebar ' + (this.isOpen ? 'is-open' : '')}>
        <div className="fixed">
          <div className="sidebar-header">
            <p className="times" onClick={this.toggle}>&times;</p>
          </div>
          <HashRouter>
            <Nav vertical className="list-unstyled p-3 mt-3 flex-column">
                <NavItem>
                  <NavLink exact className="nav-link" to="/users">
                    <FontAwesomeIcon icon={faUsers} className="mr-2"/>İstifadəçilər
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink exact className="nav-link" to="/organizations">
                    <FontAwesomeIcon icon={faBuilding} className="mr-2"/>Təşkilatlar
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink exact className="nav-link" to="/countries">
                    <FontAwesomeIcon icon={faCalendarCheck} className="mr-2"/>Giriş icazələri
                  </NavLink>
                </NavItem>
            </Nav>
            </HashRouter>
        </div>
      </div>
    );
  }
}


export default SideBar;
