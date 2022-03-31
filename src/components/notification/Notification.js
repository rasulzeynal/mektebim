import React, { Component } from 'react';
import {UncontrolledAlert} from "reactstrap";

class Notification extends Component {
  render() {
    return (
      <UncontrolledAlert color="info">
      I am an alert and I can be dismissed!
    </UncontrolledAlert>
    )
  }
}
export default Notification;