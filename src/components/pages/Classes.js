import { NavLink} from "react-router-dom";
import { Container, Row,Card,CardTitle,CardSubtitle, Form, Input, Button} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserPlus,faPlus} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const Classes = () => {
  const [open,setOpen]=useState(false)
  
  const openForm = () => {
    setOpen(!open)
  }
 
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
        <div className="me-4" style={{display:"flex",justifyContent:"end"}}>
        <Button onClick={openForm} color="success" style={{display:"flex",transition:"ease",height:"32px",borderRadius:"6px",margin:"15px 0"}}><FontAwesomeIcon className='icon mr-2' icon={faPlus}  style={{color:"white"}}/><h3 style={{fontSize:"15px",color:"white"}}>Kurs əlavə et</h3></Button>
        </div>
        {
          open ? <Form className="col-10">
                    <Input type="text" block className="form-control form-control mr-2 mb-2" placeholder='Kursun adı' />
                    <Button  color="secondary" block>Yarat</Button>
          </Form> : null
        }
        
      </Container>
    </Row>
  )
}

export default Classes;