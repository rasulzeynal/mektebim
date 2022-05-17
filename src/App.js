import SideBar from "./components/common/SideBar";
import React, { useState } from "react";
import Content from "./components/common/Content";
import "./assets/bootstrap/bootstrap.scss";
import "./assets/scss/style.scss";
import Login from "./components/pages/Login";
import {useSelector } from 'react-redux';



const App = () => {
const [isOpen,setIsOpen] = useState(window.innerWidth > 1100);
const [logOutUser,setLogOutUser] = useState(false);

const updateDimensions = () => {
  setIsOpen(window.innerWidth > 1100);
}

const {user} = useSelector(state => state.auth);
window.addEventListener("resize",updateDimensions)
return (
  user ? 
  <div className="wrapper">
    <SideBar setIsOpen={setIsOpen} isOpen = {isOpen} />
    <Content setIsOpen={setIsOpen} isOpen = {isOpen} logOutUser={logOutUser} setLogOutUser={setLogOutUser}/>
  </div> : <Login setLogOutUser={setLogOutUser}/>
);
}

export default App;


