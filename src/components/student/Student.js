import {HashRouter,NavLink} from "react-router-dom";
import {Card,CardTitle,Row} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faMessage,faListCheck
} from '@fortawesome/free-solid-svg-icons';
import "../../assets/scss/_main.scss";

const Student = () => {


    return (
      <HashRouter>
    <Row className='cards p-3'>
      <Card body inverse color="info" className='add-student card'>
        <CardTitle>Tapşırıqlar</CardTitle>
        <NavLink exact className="nav-link" to="/tasks" ><FontAwesomeIcon className='icon' icon={faListCheck} /></NavLink>
      </Card>
      <Card body inverse color="danger" className='notifications card'>
        <CardTitle>Bildirişlər</CardTitle>
        <NavLink exact className="nav-link" to="/notifications" ><FontAwesomeIcon className='icon' icon={faMessage} /></NavLink>
      </Card>
      </Row>
      <hr/>
      </HashRouter>
    )
  }
export default Student;