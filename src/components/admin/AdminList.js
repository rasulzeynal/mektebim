import React, { useEffect,useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchUser } from '../../store/userSlice';
import { Card, CardBody,
  CardTitle,Button,CardImg, Row } from 'reactstrap';
  import logo from "../../assets/img/user.png"


 const AdminList = () =>  {
      
  const dispatch = useDispatch();
  const {users} = useSelector(state => state.users)

  useEffect(() => {
    dispatch(fetchUser())
  },[dispatch])

  const admin = users.filter((user) => user.position === "Admin");

    
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