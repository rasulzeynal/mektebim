import React,{useState,useEffect} from 'react';
import {useSelector } from 'react-redux';
import jwt_decode from "jwt-decode";
import axios from "axios";
import {
  Container,
  Row,
  Form,
  Input,
  Button
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus
} from "@fortawesome/free-solid-svg-icons";

const CourseInfo = () => {
  const [formIsOpen,setFormIsOpen] = useState(false);
  const [data,setData] = useState(null);
  const {user} = useSelector(state => state.auth);
  const decoded = jwt_decode(user);

  const openForm = () => {
    setFormIsOpen(!formIsOpen)
  }

  const getData =() => {
    axios.get("http://localhost:3002/" + "users").then(res => {
      setData(res.data);
    });
  }
  useEffect(()=>{
    getData()
  },[])

  const checkedUser  = data && data.filter(users => users.email === decoded.email) 
  const role = checkedUser && checkedUser[0].position;
  console.log("courseInfoRole",role)

  return (
    <Row className="row-classes">
      <Container className="col-8 container-classes">
          No data
      </Container>
      <Container className="col-4 add-course">
        <div className="me-4 div-button">
          <Button
            onClick={openForm}
            color="success"
            className="open-form-button"
          >
            <FontAwesomeIcon
              className="icon mr-2 add-form-icon"
              icon={faPlus}
            />
            <h3>İştirakçı əıavə et</h3>
          </Button>
        </div>
        {formIsOpen ? (
          <Form className="col-10" >
            form
          </Form>
        ) : null}
      </Container>
    </Row>
  )
}

export default CourseInfo;
