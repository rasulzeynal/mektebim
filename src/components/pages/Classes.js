import { NavLink} from "react-router-dom";
import { Container, Row,Card,CardTitle,CardSubtitle, Form,FormGroup,Label,Input,Button } from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserPlus} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const Classes = () => {
  const [enable,setEnable] = useState(false);
  return (
    <Row className="row-classes">
      <Container className='col-6 container-classes' >
        <Card body inverse className='add-user card' >
        <CardTitle >Ingilis dili </CardTitle>
        <NavLink exact className="nav-link" to="/course" ><FontAwesomeIcon className='icon' icon={faUserPlus} />
        <CardSubtitle className='card-text'>12/14</CardSubtitle>
        </NavLink>
      </Card>
      </Container>
      <Container className='col-6' style={{height:"100vh"}}>
       <Card body inverse className="card" onClick={()=>{setEnable(!enable)}}>
       <CardTitle >Qrup yarat </CardTitle>
       </Card>
       {enable ? (
         <Form>
           <FormGroup check inline>
          <Label check>
            <Input type="text" block name="admin"/> Admin
          </Label>
        </FormGroup>
        <div className="d-flex justify-content-center">
                  <Button type="button" className="btn btn-success btn-block btn gradient-custom-4 text-body">
                  <FontAwesomeIcon icon={faUserPlus}  size="sm" className=" mt-2 mr-2"/>Əlavə et</Button>
                  </div>
         </Form> 
       ): null}
      </Container>
    </Row>
  )
}

export default Classes