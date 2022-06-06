import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {config} from "../../config";
import { Form,Input,Button } from 'reactstrap';

const ChangeCourseName = () => {
  
  
  return (
      <Form>
            <Input
              type="text"
              block="true"
              name="name"
              id="name"
              placeholder="Kursun adı"
              
            />
            <Button type="submit" color="success" block>
              Dəyişdir
            </Button>
          </Form>
  )
}

export default ChangeCourseName
