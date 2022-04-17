import { useState,useEffect } from "react";
import axios from "axios";
import { Card, CardBody,
  CardTitle,Button,CardImg, Row } from 'reactstrap';
import logo from "../../assets/img/user.png";
import ReactPaginate from "react-paginate";

const StudentList =() => { 

  const [student,setStudent] = useState([])
  const [searchQuery, setSearchQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  useEffect(() => {
    axios
    .get("http://localhost:3002/data")
    .then ((users) => {
    const user=users.data.filter((data) => data.position === "sagird")
       setStudent(user)
    })
  },[]);
  

const pageCount = Math.ceil(student.length / usersPerPage);
const changePage = ({ selected }) => {
    setPageNumber(selected);
  };



    return (
      <Row className="container">
        <input
          type="text"
          className="form-control mb-4 ms-3"
          placeholder="Axtar"
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
      {student.filter((val) => {
        if (searchQuery === "") {
          return val;
        }
        else if (val.name.toLowerCase().includes(searchQuery.toLowerCase())) {
          return val;
        }
        return false
      })
      .slice(pagesVisited,pagesVisited + usersPerPage)
      .map((user) => {
        return (
          <Card key={user.id} style={{width:"180px",textAlign:"center"}} className="mb-3 ml-3 shadow ">
          <CardImg top width="100%" src={logo} alt="Card image cap" style={{width:"100px",alignSelf:"center",marginTop:"15px"}} />
          <CardBody>
            <CardTitle>{user.name}</CardTitle>
            <Button block color="info">Ətraflı</Button>
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
export default StudentList;