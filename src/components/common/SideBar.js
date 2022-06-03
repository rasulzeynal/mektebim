import React,{useState,useEffect} from 'react';
import {HashRouter,NavLink} from "react-router-dom";
import {Nav, NavItem} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faMessage,faUser,faUserGraduate,faListCheck
} from '@fortawesome/free-solid-svg-icons';
import logo from "../../assets/img/profile_icon.png";
import {useSelector } from 'react-redux';
import jwt_decode from "jwt-decode";
import axios from "axios";




const SideBar = (props) => { 
  const [data,setData] = useState(null);
  const {user} = useSelector(state => state.auth);
  const decoded = jwt_decode(user);

  const getData =() => {
    axios.get("http://localhost:3002/" + "users").then(res => {
      setData(res.data);
    });
  }
  useEffect(()=>{
    getData()
  },[])

  const checkedUser  = data && data.filter(users => users.email === decoded.email) 
  const role = checkedUser && checkedUser[0].position;
  const name = checkedUser && checkedUser[0].name.split(" ")[0];
  console.log("user",name)
    return (
      <div className={'sidebar ' + (props.isOpen ? 'is-open' : '')}>
        <div className="fixed">
          <div className="sidebar-header">
            <a className="times" onClick={() => props.setIsOpen(!props.isOpen)}>&times;</a>
            <img src={logo} alt="school" style={{width:"80px",border:"2px solid white",borderRadius:"50%",padding:"10px",marginBottom:"10px"}}/>
            <h5>{name}</h5>
            <p style={{opacity:"0.7",fontSize:"12px",marginBottom:"70px"}}>{role}</p>
            
          </div>
          <HashRouter>
            <Nav vertical className="list-unstyled p-3 mt-3 flex-column">
              {
                role === "ADMIN" && 
                <div>
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
            </div>
              }
              {
                (role === "MUELLIM"  || role === "SAGIRD") &&
                <div> 
            <NavItem>
              <NavLink exact className="nav-link" to="/courses" >
                <FontAwesomeIcon icon={faUserGraduate} className="mr-2"/>Kurslar
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact className="nav-link" to="/tasks" >
                <FontAwesomeIcon icon={faUser} className="mr-2"/>Tapşırıqlar
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact className="nav-link" to="/notifications" >
                <FontAwesomeIcon icon={faMessage} className="mr-2"/>Bildirişlər
              </NavLink>
            </NavItem>
                </div>
              }
              
            </Nav>
            </HashRouter>
        </div>
      </div>
    );
  }

export default SideBar;
