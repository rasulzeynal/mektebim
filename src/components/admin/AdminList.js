import React from 'react';
import { getUsers } from '../../redux/user/userAction';
import { connect } from 'react-redux';
import { Card, CardBody,
  CardTitle,Button,CardImg, Row } from 'reactstrap';
  import logo from "../../assets/img/user.png"


 class AdminList extends React.Component {
   render(){


    
    return (
      <Row style={{display:"flex",float:"left"}} className="container">
      
        return (
          <Card key="{user.id}" style={{width:"200px",textAlign:"center"}} className="ms-4 shadow ">
          <CardImg top width="100%" src={logo} alt="Card image cap" style={{width:"100px",alignSelf:"center",marginTop:"15px"}} />
          <CardBody>
            <CardTitle>name</CardTitle>
            <Button block color="info">Ətraflı</Button>
          </CardBody>
        </Card>
        )
      
      
    </Row>
    )
   }
  }

  const mapStateToProps = state => {
    console.log(state)
    return{
      users:state
    }
  }
export default connect(mapStateToProps,{getUsers})(AdminList) ;