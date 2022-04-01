import React, { Component } from 'react';
import {Alert} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faXmark
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
      <Alert color="danger" isOpen={this.state.visible} toggle={this.onDismiss} className="container">
        I am an alert and I can be dismissed!
        <FontAwesomeIcon icon="faXmark" color='primary ' />
      </Alert>
    );
  }
}
export default Notification;