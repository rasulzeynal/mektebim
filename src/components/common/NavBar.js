import React from 'react';
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


class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar className="navbar p-3 mb-3" expand="sm">
        <Button color="light">
          <FontAwesomeIcon icon={faAlignLeft}/>
        </Button>
        <Button color="dark" onClick={this.toggle} className="d-block d-sm-none">
          <FontAwesomeIcon icon={faBars}/>
        </Button>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto mt-3 mt-sm-0" navbar>
            <NavItem>
              <NavLink exact to="/" className="nav-link c-pointer">
                <FontAwesomeIcon icon={faHome} className="mr-2 text-secondary" />
                <strong>Ana səhifə</strong>
              </NavLink>
            </NavItem>
            <NavItem>
              <a className="nav-link c-pointer">
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2 text-secondary" />
                <strong>Çıxış</strong>
              </a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}



export default NavBar;