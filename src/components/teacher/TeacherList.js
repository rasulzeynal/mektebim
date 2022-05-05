import { Component } from 'react';
import { Card, CardBody,
  CardTitle,Button,CardImg, Row } from 'reactstrap';
import logo from "../../assets/img/user.png"
import axios from 'axios';

class TeacherList extends Component{ 
  state={
    data:null,
  }

  getData = () => {
    this.setState({loading:true});
    axios.get("http://localhost:3002/data")
    .then(res => {
      this.setState({
        loading:false,
        data:res.data
      })
    })
   }
  componentDidMount() { 
    this.getData()
   }
  render(){
    const teachers = this.state.data && this.state.data.filter((user) => user.position === "Muellim");
    return (
      <Row style={{display:"flex",float:"left"}} className="container">
      {teachers && teachers.map(user =>
        <Card  key={user.id}  style={{width:"200px",textAlign:"center"}} className="ms-4 shadow ">
          <CardImg top width="100%" src={logo} alt="Card image cap" style={{width:"100px",alignSelf:"center",marginTop:"15px"}} />
          <CardBody>
            <CardTitle>{user.name}</CardTitle>
            <Button block color="info">Ətraflı</Button>
          </CardBody>
        </Card>
        )}
   
      
    </Row>
    )
  }
  }
export default TeacherList;