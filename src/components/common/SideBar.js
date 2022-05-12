import React,{useState,useEffect} from 'react';
import {HashRouter,NavLink} from "react-router-dom";
import {Nav, NavItem} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faMessage,faUser,faUserGraduate,faListCheck
} from '@fortawesome/free-solid-svg-icons';
import logo from "../../assets/img/edu.png";
import {useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { config } from '../../config';



const SideBar = (props) => { 

  const  [data,setData]= useState(null);


const  getData = () => {
    axios.get(config.apiURL + "users")
    .then(res => {
      setData({
        data:res.data
      })
    })
  }

  useEffect(()=>{
    getData()
  },[])

  const {user} = useSelector(state => state.auth);
  const token = jwtDecode(user); // decode your token here;
  const email = token.email
  console.log("mail",email)
  console.log("data",data)
 // const a = JSON.parse(data)
// const filteredData = data.data.filter((user) => user.email === email)
 //console.log("filtered" , a)
    return (
      <div className={'sidebar ' + (props.isOpen ? 'is-open' : '')}>
        <div className="fixed">
          <div className="sidebar-header">
            <a className="times" onClick={() => props.setIsOpen(!props.isOpen)}>&times;</a>
            <img src={logo} alt="school"/>
          </div>
          <HashRouter>
            <Nav vertical className="list-unstyled p-3 mt-3 flex-column">
              <NavItem>
              <NavLink exact className="nav-link" to="/users" >
                <FontAwesomeIcon icon={faUser} className="mr-2"/>İstifadəçilər
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact className="nav-link" to="/courses" >
                <FontAwesomeIcon icon={faUserGraduate} className="mr-2"/>Kurslar
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact className="nav-link" to="/notifications" >
                <FontAwesomeIcon icon={faMessage} className="mr-2"/>Bildirişlər
              </NavLink>
            </NavItem>
            </Nav>
            </HashRouter>
        </div>
      </div>
    );
  }

export default SideBar;
