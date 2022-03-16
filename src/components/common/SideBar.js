import React from 'react';
import {HashRouter,NavLink} from "react-router-dom";
import {Nav, NavItem} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faGraduationCap, faScrewdriverWrench,faChalkboardUser
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
                  <NavLink exact className="nav-link" to="/users">
                    <FontAwesomeIcon icon={faScrewdriverWrench} className="mr-2"/>Admin
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink exact className="nav-link" to="/organizations">
                  <FontAwesomeIcon icon={faGraduationCap}  className='mr-2'/>Tələbələr
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink exact className="nav-link" to="/countries">
                    <FontAwesomeIcon icon={faChalkboardUser} className="mr-2"/>Müəllimlər
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
