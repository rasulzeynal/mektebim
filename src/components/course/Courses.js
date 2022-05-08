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



class Courses extends React.Component {
  
  state={
    formIsOpen:false,
    data:null
  }


  openForm = () => {
    this.setState({
      formIsOpen: !this.state.formIsOpen
    })
  }
  getData = () => {
    this.setState({loading:true});
    axios.get("http://localhost:3002/courseData")
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

    axios.post("http://localhost:3002/courseData",data)
    .then(res => {
      console.log(res)
      if (res.data.status === 201){
      console.log(res.data.data)
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
    axios.delete("http://localhost:3002/courseData/" + id)
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
            className="add-user card"
            key={course.id}
          >
            <CardTitle>{course.name} </CardTitle>
            <CardBody className="card-body">
              <NavLink exact className="nav-link" to="/classedit">
                <FontAwesomeIcon className="icon" icon={faPenToSquare} />
              </NavLink>
              <FontAwesomeIcon
                className="icon"
                icon={faTrash}
                id="delete"
                style={{
                  color: "#dc3545",
                }}
               onClick={() => this.removeData(course.id)} 
              />
            </CardBody>
          </Card>
      ))}
          
      </Container>
      <Container className="col-5" style={{ height: "100vh" }}>
        <div
          className="me-4"
          style={{ display: "flex", justifyContent: "end" }}
        >
          <Button
            onClick={this.openForm}
            color="success"
            style={{
              display: "flex",
              transition: "ease",
              height: "32px",
              borderRadius: "6px",
              margin: "15px 0",
            }}
          >
            <FontAwesomeIcon
              className="icon mr-2"
              icon={faPlus}
              style={{ color: "white" }}
            />
            <h3 style={{ fontSize: "15px", color: "white" }}>Kurs əlavə et</h3>
          </Button>
        </div>
        {this.state.formIsOpen ? (
          <Form className="col-10"  onSubmit={this.createData} >
            <Input
              type="text"
              block="true"
              className="form-control form-control mr-2 mb-2"
              name="name"
              id="name"
              placeholder="Kursun adı"
              
            />
            <Button type="submit" color="secondary" block>
              Yarat
            </Button>
          </Form>
        ) : null}
      </Container>
    </Row>
  )
        }
};

export default Courses ;
