import SideBar from "./components/common/SideBar";
import Home from "./components/pages/Home";
import "./assets/bootstrap/bootstrap.scss";
import "./assets/scss/style.scss";
import React from "react";
import Content from "./components/common/Content";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: window.innerWidth > 1100
    }
  }

  updateDimensions = () => {
    this.setState({isOpen: window.innerWidth > 1100});
  }

  toggle = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    window.addEventListener("resize", this.updateDimensions)
  return (
    <div className="wrapper">
      <SideBar toggle={this.toggle} isOpen={this.state.isOpen}/>
      <Content toggle={this.toggle} isOpen={this.state.isOpen}/>
    </div>
  );
}
}

export default App;
