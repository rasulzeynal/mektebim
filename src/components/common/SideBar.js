import React from 'react';
import {HashRouter,NavLink} from "react-router-dom";
import {Nav, NavItem} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faMessage, faScrewdriverWrench,faListCheck,faUserPlus,faUser,faUserGraduate
} from '@fortawesome/free-solid-svg-icons';
import logo from "../../assets/img/edu.png";



class SideBar extends React.Component {
    
    render(){
    return (
      <div className={'sidebar ' + (this.props.isOpen ? 'is-open' : '')}>
        <div className="fixed">
          <div className="sidebar-header">
            <a className="times" onClick={this.props.toggle}>&times;</a>
            <img src={logo} alt="school"/>
          </div>
          <HashRouter>
            <Nav vertical className="list-unstyled p-3 mt-3 flex-column">
                <NavItem>
                  <NavLink exact className="nav-link" to="/admin" >
                    <FontAwesomeIcon icon={faScrewdriverWrench} className="mr-2"/>Admin
                  </NavLink>
                </NavItem>
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
}


export default SideBar;


/* 
<NavItem>
                  <NavLink exact className="nav-link" to="/teacher">
                  <FontAwesomeIcon icon={faChalkboardUser} className="mr-2"/>Müəllimlər
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink exact className="nav-link" to="/student">
                    <FontAwesomeIcon icon={faGraduationCap}  className='mr-2'/>Tələbələr
                  </NavLink>
                </NavItem>
*/