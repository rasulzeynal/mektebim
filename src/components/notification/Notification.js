import React, { Component } from 'react';
import {Alert} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faRectangleXmark
} from '@fortawesome/free-solid-svg-icons';

class Notification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

  }

  onDismiss = () => {
    this.setState({ visible: false });
  }

  render() {
    return (
      {this.state.visible ? <Alert color="danger"  className="container">
        I am an alert and I can be dismissed!
         <FontAwesomeIcon className='icon' onClick={this.onDismiss}  icon={faRectangleXmark} /> 
        </Alert> : null }
    );
  }
}
export default Notification;