import SideBar from "./components/common/SideBar";
import React from "react";
import { connect } from "react-redux";
import Login from "./components/pages/Login";
import Content from "./components/common/Content";
import "./assets/bootstrap/bootstrap.scss";
import "./assets/scss/style.scss";



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
    this.props.isAuth ?
    <div className="wrapper">
      <SideBar toggle={this.toggle} isOpen={this.state.isOpen}/>
      <Content toggle={this.toggle} isOpen={this.state.isOpen}/>
    </div> : <Login/>
  );
}
}

const mapStateToProps = store => store;
export default connect(mapStateToProps)(App);


