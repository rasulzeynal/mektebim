import SideBar from "./components/common/SideBar";
import React, { useState } from "react";
import Content from "./components/common/Content";
import "./assets/bootstrap/bootstrap.scss";
import "./assets/scss/style.scss";
import Login from "./components/pages/Login";
import { fas } from "@fortawesome/free-solid-svg-icons";



const App = () => {

  const [isOpen,setIsOpen] = useState(window.innerWidth > 1100);
  const [logOutUser,setLogOutUser] = useState(false)

  const updateDimensions = () => {
    setIsOpen(window.innerWidth > 1100);
  }

  const isLoginTrue = JSON.parse(localStorage.getItem("login"));
  console.log(isLoginTrue)
  window.addEventListener("resize",updateDimensions)
  return (
    isLoginTrue ? 
    <div className="wrapper">
      <SideBar setIsOpen={setIsOpen} isOpen = {isOpen}/>
      <Content setIsOpen={setIsOpen} isOpen = {isOpen} logOutUser={logOutUser} setLogOutUser={setLogOutUser}/>
    </div> : <Login/>
  );
}

export default App;


