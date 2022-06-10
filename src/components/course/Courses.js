import React from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  Row,
  Card,
  CardTitle,
  Form,
  Input,
  Button,
  CardBody,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faTrash,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {config} from "../../config"



class Courses extends React.Component {
  
  state={
    formIsOpen:false,
    data:null,
  }


  openForm = () => {
    this.setState({
      formIsOpen: !this.state.formIsOpen,
      
    })
  }
  getData = () => {
    this.setState({loading:true});
    axios.get(config.apiURL + "courses")
    .then(res => {
      this.setState({
        loading:false,
        data:res.data
      })
    })
  }

  createData = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let data = {};
    for (const [key,value] of formData.entries()){
      data[key] = value;
    }

    axios.post(config.apiURL + "courses",data)
    .then(res => {
      console.log(res)
      if (res.data.status === 201){
      this.setState(prevState => ({
        data : [
          ...prevState.data,
          res.data
        ]
      }));
  }})
    e.target.reset();
  }
  

  removeData = (id) => {
    axios.delete(config.apiURL + "courses/" + id)
    .then(res => {
      if (res.data.status === 201) {
        let data = this.state.data;
        this.setState({
          data:data
        });
      }
    })
  }

  componentDidMount() {
    this.getData();
  }
  render() {
    
  return (
    <Row className="row-classes">
      <Container className="col-7 container-classes">
     {this.state.data && this.state.data.map(course => ( 
        <Card
            body
            inverse
            className="add-user course-card"
            key={course.id}
          >
            <CardTitle>{course.name} </CardTitle>
            <CardBody className="card-body">
              <NavLink exact className="nav-link" to={`/course-info:${course.id}`}>
                <FontAwesomeIcon 
                className="edit-icon" 
                icon={faPenToSquare}/>
              </NavLink>
              <FontAwesomeIcon
                className="delete-icon"
                icon={faTrash}
                id="delete"
               onClick={() => this.removeData(course.id)} 
              />
            </CardBody>
          </Card>
      ))}
          
      </Container>
      <Container className="col-5 add-course">
        <div
          className="me-4 div-button"
        >
          <Button
            onClick={this.openForm}
            color="success"
            className="open-form-button"
          >
            <FontAwesomeIcon
              className="icon mr-2 add-form-icon"
              icon={faPlus}
            />
            <h3>Kurs əlavə et</h3>
          </Button>
        </div>
        {this.state.formIsOpen ? (
          <Form className="col-10"  onSubmit={this.createData} >
            <Input
              type="text"
              block="true"
              className="form-control mr-2 mb-2"
              name="name"
              id="name"
              placeholder="Kursun adı"
              
            />
            <Button type="submit" color="secondary" block>
              Əlavə et
            </Button>
          </Form>
        ) : null}
      </Container>
    </Row>
  )
        }
};

export default Courses ;
