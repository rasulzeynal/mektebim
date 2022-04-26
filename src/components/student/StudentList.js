import React, { useEffect,useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchUser } from '../../store/userSlice';
import { Card, CardBody,
  CardTitle,Button,CardImg, Row } from 'reactstrap';
import logo from "../../assets/img/user.png";
import ReactPaginate from "react-paginate";

const StudentList =() => { 

  const dispatch = useDispatch();
  const {users} = useSelector(state => state.users)

  useEffect(() => {
    dispatch(fetchUser())
  },[dispatch])

  const student = users.filter((user) => user.position === "sagird");

  const [searchQuery, setSearchQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 14;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(student.length / usersPerPage);
  const changePage = ({ selected }) => {
      setPageNumber(selected);
  };



    return (
      <Row style={{display:"flex",marginRight:"40px"}} >
        <input
          type="text"
          className="form-control mb-4 ms-4"
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