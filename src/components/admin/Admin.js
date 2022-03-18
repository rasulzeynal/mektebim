import React from 'react';
import { Card, Button, CardTitle, CardText, CardGroup } from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faRectangleList
} from '@fortawesome/free-solid-svg-icons';

const Example = (props) => {
  return (
    <div>
      <CardGroup>
      <Card body inverse color="primary" style={{borderRadius:"15px", height:"150px"}}>
        <CardTitle>Müəllim siyahısı</CardTitle>
        <FontAwesomeIcon icon="faRectangleList" />
      </Card>
      <Card body inverse color="success" className='ml-4' style={{borderRadius:"15px", height:"150px"}}>
        <CardTitle>Müəllim əlavə et</CardTitle>
        <Button color="secondary">Button</Button>
      </Card>
      <Card body inverse color="warning" className='ml-4' style={{borderRadius:"15px", height:"150px"}}>
        <CardTitle>Şagird Siyahısı</CardTitle>
        <Button color="secondary">Button</Button>
      </Card>
      <Card body inverse color="info" className='ml-4' style={{borderRadius:"15px", height:"150px"}}>
        <CardTitle>Şagird əlavə et</CardTitle>
        <Button color="secondary">Button</Button>
      </Card>
      </CardGroup>
    </div>
  );
};

export default Example;