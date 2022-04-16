import { useState,useEffect } from "react";
import axios from "axios";
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button,CardImg, Row } from 'reactstrap';
  import logo from "../../assets/img/user.png"


 const AdminList = () =>  {

  const [admin,setAdmin] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3002/data")
    .then ((users) => {
    const user=users.data.filter((data) => data.position === "Admin")
       setAdmin(user)
    })
  },[]);

    
    return (
      <Row style={{display:"flex",float:"left",justifyContent:"space-around"}} className="container">
      {admin.map((user) => {
        return (
          <Card key={user.id} style={{width:"300px"}}>
          <CardImg top width="100%" src={logo} alt="Card image cap" style={{width:"50px"}} />
          <CardBody>
            <CardTitle>{user.name}</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        )
      })}
      
    </Row>
    )
  }
export default AdminList;