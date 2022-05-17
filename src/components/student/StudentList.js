import React, { Component} from 'react';
import { Card, CardBody,
  CardTitle,Button,CardImg, Row } from 'reactstrap';
import logo from "../../assets/img/user.png";
import ReactPaginate from "react-paginate";
import axios from 'axios';
import {config} from "../../config"

class StudentList extends Component{ 
  state={
    data:null,
    searchQuery:"",
    pageNumber:0,
  }


   getData = () => {
    this.setState({loading:true});
    axios.get(config.apiURL + "users")
    .then(res => {
      this.setState({
        loading:false,
        data:res.data
      })
    })
   }

   removeData = (id) => {
    axios.delete(config.apiURL + "users/" + id)
    .then(res => {
      if (res.data.status === 201) {
        let data = this.state.data;
        this.setState({
          data:data
        });
         }
    })
  }

   componentDidMount() {
    this.getData()
  }
  render(){
  const students = this.state.data && this.state.data.filter((user) => user.position === "SAGIRD");
  const usersPerPage = 14;
  const pagesVisited = this.state.pageNumber * usersPerPage;
  const pageCount = Math.ceil(students && students.length / usersPerPage);
  const changePage = ({ selected }) => {
    this.setState({
      pageNumber:selected
    })
  };



    return (
      <Row className="student-list">
        <input
          type="text"
          className="form-control mb-4 ms-4"
          placeholder="Axtar"
          onChange={(e) => {
            this.setState({
              searchQuery:e.target.value
            })
          }}
        />
      {students && students.filter((val) => {
        if (this.state.searchQuery === "") {
          return val;
        }
        else if (val.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())) {
          return val;
        }
        return false
      })
      .slice(pagesVisited,pagesVisited + usersPerPage)
      .map((user) => {
        return (
          <Card key={user.id} className="mb-3 ml-3 shadow card ">
          <CardImg top width="100%" src={logo} alt="Card image cap" className='card-image'/>
          <CardBody>
            <CardTitle>{user.name}</CardTitle>
            <Button block color="info"
             onClick={() => this.removeData(user.id)}>Sil</Button>
          </CardBody>
        </Card>
        )
      })}
      


      <ReactPaginate
        previousLabel={"Əvvəlki"}
        nextLabel={"Sonrakı"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </Row>
    )
  }
  }


export default StudentList;