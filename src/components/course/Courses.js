import React from "react";
import { connect } from "react-redux";
import {getCourses,addCourse,deleteCourse} from "../../redux/course/courseActions";
import { v4 as uuidv4 } from "uuid";
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



class Courses extends React.Component {
  
  state={
    formIsOpen:false,
    id:uuidv4(),
    name:""
  }
  componentDidMount() {
    this.props.getCourses();
    console.log("cdm")
  }
  openForm = () => {
    this.setState({
      formIsOpen: !this.state.formIsOpen
    })
  }
  handleTextChange = event => {
    const {target: {name,value}} = event;
    this.setState({ [name]: value})
  }
  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addCourse(this.state);
    this.setState({
    name:""
    })
  }
  deleteSelectedCourse = (id) => {
    this.props.deleteCourse(id)
  }
  
  render() {
    
    
    const courses = this.props.courses;
  return (
    <Row className="row-classes">
      <Container className="col-7 container-classes">
     {courses && courses.map(course => ( 
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
                style={{
                  color: "#dc3545",
                }}
               onClick={() => {this.deleteSelectedCourse(course.id)}} 
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
          <Form className="col-10"  onSubmit={this.handleOnSubmit} >
            <Input
              type="text"
              block="true"
              className="form-control form-control mr-2 mb-2"
              name="name"
              placeholder="Kursun adı"
              onChange={this.handleTextChange} 
              value={this.state.name}
              
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


const mapStateToProps = state => {
  return {
    courses:state.course.users,
  }
} 

export default connect(mapStateToProps,{getCourses,addCourse,deleteCourse})(Courses) ;
