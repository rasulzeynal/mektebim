import { NavLink} from "react-router-dom";
import { Container, Row,Card,CardTitle,CardSubtitle } from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserPlus} from '@fortawesome/free-solid-svg-icons';

const Classes = () => {
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
      <Container className='col-6' style={{height:"100vh"}}></Container>
    </Row>
  )
}

export default Classes