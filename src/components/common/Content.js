import React from 'react';
import {HashRouter, Switch, Route, Redirect} from "react-router-dom";
import NavBar from './NavBar';
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Admin from "../admin/Admin";
import Teacher from "../teacher/Teacher";
import Student from "../student/Student";

class Content extends React.Component {
  render() {
    return (
      <div className="outer-border">
        <div className={'content ' + (this.props.isOpen ? 'is-open' : '')}>
          <HashRouter>
            <NavBar toggle={this.props.toggle}/>
            <div className="p-3">
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/admin" exact component={Admin}/>
                <Route path="/teacher" exact component={Teacher}/>
                <Route path="/student" exact component={Student}/>
                <NotFound/>
              </Switch>
            </div>
          </HashRouter>
        </div>
      </div>
    );
  }
}


export default Content;
