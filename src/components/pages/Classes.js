import { NavLink} from "react-router-dom";
import { Container, Row,Card,CardTitle,CardSubtitle, Form, Input} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserPlus,faPlus} from '@fortawesome/free-solid-svg-icons';

const Classes = () => {
 
  return (
    <Row className="row-classes">
      <Container className='col-7 container-classes' >
        <Card body inverse className='add-user card' >
        <CardTitle >Ingilis dili </CardTitle>
        <NavLink exact className="nav-link" to="/course" ><FontAwesomeIcon className='icon' icon={faUserPlus} />
        <CardSubtitle className='card-text'>12/14</CardSubtitle>
        </NavLink>
      </Card>
      </Container>
      <Container className='col-5' style={{height:"100vh"}}>
        <div className="add-course-button mb-4" style={{backgroundColor:"#388c23",margin:"20px 20px 0 0 ",height:"35px",borderRadius:"7px",display:"inline-block"}}>
        <NavLink exact className="nav-link" to="/" style={{display:"flex"}}><FontAwesomeIcon className='icon mr-2' icon={faPlus}  style={{color:"white"}}/><h3 style={{fontSize:"15px",color:"white"}}>Kurs əlavə et</h3></NavLink>
        </div>
        <Form>
        <div className="form-group form-outline mb-4 d-flex justify-content-between">
                  <Input type="text" className="form-control form-control mr-2 col-8" placeholder='Ad' />
                </div>
        </Form>
      </Container>
    </Row>
  )
}

export default Classes;