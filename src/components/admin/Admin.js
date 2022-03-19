import React from 'react';
import { Card, Button, CardTitle, CardText, CardGroup } from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faRectangleList
} from '@fortawesome/free-solid-svg-icons';
import "../../assets/scss/_main.scss";

const Example = (props) => {
  return (
    <div>
      <CardGroup className='card-group' >
      <Card body inverse color="primary" className='teacherList cards' >
        <CardTitle>Müəllim siyahısı</CardTitle>
      </Card>
      <Card body inverse color="success" className='addTeacher cards'>
        <CardTitle>Müəllim əlavə et</CardTitle>
      </Card>
      <Card body inverse color="warning" className='studentList cards'>
        <CardTitle>Şagird Siyahısı</CardTitle>
      </Card>
      <Card body inverse color="info" className='addStudent cards'>
        <CardTitle>Şagird əlavə et</CardTitle>
      </Card>
      </CardGroup>
    </div>
  );
};

export default Example;