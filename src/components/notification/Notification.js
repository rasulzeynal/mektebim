import React, { useState } from 'react';
import {Alert} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faXmark
} from '@fortawesome/free-solid-svg-icons';

const Notification = () => {
   const [visible,setVisible] = useState(true);

 const dismiss = () => {
    setVisible(false);
  }
    return (
      visible ? <Alert color="danger"  className="container alert">
        I am an alert and I can be dismissed!
        <FontAwesomeIcon className='icon' onClick={dismiss}   icon={faXmark} /> 
        </Alert> : null 
    );
  }
export default Notification;