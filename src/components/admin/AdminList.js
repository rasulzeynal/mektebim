import { useState,useEffect } from "react";
import axios from "axios";
import { Card, CardBody,
  CardTitle,Button,CardImg, Row } from 'reactstrap';
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
      <Row style={{display:"flex",float:"left"}} className="container">
      {admin.map((user) => {
        return (
          <Card key={user.id} style={{width:"200px",textAlign:"center"}} className="ms-4 shadow ">
          <CardImg top width="100%" src={logo} alt="Card image cap" style={{width:"100px",alignSelf:"center",marginTop:"15px"}} />
          <CardBody>
            <CardTitle>{user.name}</CardTitle>
            <Button block color="info">Ətraflı</Button>
          </CardBody>
        </Card>
        )
      })}
      
    </Row>
    )
  }
export default AdminList;