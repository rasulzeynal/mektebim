import { NavLink} from "react-router-dom";
import { Container, Row,Card,CardTitle,CardSubtitle, Form, Input, Button} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserPlus,faPlus,faTrash,faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import {v4 as uuidv4} from "uuid"

const Classes = () => {
  const [open,setOpen]=useState(false);

  const openForm = () => {
    setOpen(!open)
  }


  const initialState=[
    {
      id:1,
      name:"Ingilis dili"
    },
    {
      id:2,
      name:"IELTS"
    }
  ]
  const [className,setClassName] = useState(initialState)

  const [newClass,setNewClass]= useState([{
    id:uuidv4(),
    name:""
  }])

  
  const onInputChange = (e) => {
    setNewClass({
      id:uuidv4(),
      name: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setClassName([...className,newClass]);
    
  }
  
  
  return (
    <Row className="row-classes">
      <Container className='col-7 container-classes' >
      {className.map((name) => (
        <Card body inverse className='add-user card' key={name.id}>
        <CardTitle >{name.name}</CardTitle>
        <NavLink exact className="nav-link" to="/course" ><FontAwesomeIcon className='icon' icon={faPenToSquare} style={{color:"#ffc107"}} />
        </NavLink><FontAwesomeIcon className='icon' icon={faTrash} style={{color:"#dc3545"}} />
        
      </Card>
      ))}
      </Container>
      <Container className='col-5' style={{height:"100vh"}}>
        <div className="me-4" style={{display:"flex",justifyContent:"end"}}>
        <Button onClick={openForm} color="success" style={{display:"flex",transition:"ease",height:"32px",borderRadius:"6px",margin:"15px 0"}}><FontAwesomeIcon className='icon mr-2' icon={faPlus}  style={{color:"white"}}/><h3 style={{fontSize:"15px",color:"white"}}>Kurs əlavə et</h3></Button>
        </div>
        {
          open ? <Form className="col-10" onSubmit={handleSubmit}>
                    <Input type="text" block className="form-control form-control mr-2 mb-2" placeholder='Kursun adı'  onChange={onInputChange}/>
                    <Button  color="secondary" block>Yarat</Button>
          </Form> : null
        }
        
      </Container>
    </Row>
  )
}

export default Classes;