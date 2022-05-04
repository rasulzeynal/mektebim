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
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import {getCourses} from "../../redux/course/courseActions"


class Courses extends React.Component {
  componentDidMount() {
    this.props.getCourses();
  }
  render() {
    const courses = this.props.courses;
  return (
    <Row className="row-classes">
      <Container className="col-7 container-classes">
     {courses ? courses.map(course => ( 
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
                }} /* onClick={() => deleteCourse(course.id)} */
              />
            </CardBody>
          </Card>
      )) : null}
          
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
        {this.formIsOpen ? (
          <Form className="col-10" /* onSubmit={handleSubmit} */>
            <Input
              type="text"
              block
              className="form-control form-control mr-2 mb-2"
              placeholder="Kursun adı"
              /* onChange={onInputChange} */
            />
            <Button color="secondary" block>
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
    courses:state.course.users
  }
} 
export default connect(mapStateToProps,{getCourses})(Courses) ;
