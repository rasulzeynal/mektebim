import React from 'react';
import {HashRouter, Switch, Route, Redirect} from "react-router-dom";
import Login from "../pages/Login"
import NavBar from './NavBar';
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Admin from "../admin/Admin";
import Teacher from "../teacher/Teacher";
import Student from "../student/Student";
import TeacherList from "../teacher/TeacherList";
import StudentList from "../student/StudentList";
import AdminList from '../admin/AdminList';
import Notification from '../notification/Notification';
import Register from '../pages/Register';
import Tasks from "../pages/Tasks"

class Content extends React.Component {
  render() {
    return (
      <div className="outer-border" >
        <div className={'content ' + (this.props.isOpen ? 'is-open' : '')}>
          <HashRouter>
            <NavBar toggle={this.props.toggle}/>
              <Switch>
                <Route path="/login" exact component={Login}/>
                <Route path="/adminList" exact component={AdminList}/>
                <Route path="/" exact component={Home}/>
                <Route path="/admin" exact component={Admin}/>
                <Route path="/teacher" exact component={Teacher}/>
                <Route path="/student" exact component={Student}/>
                <Route path="/teacherList" exact component={TeacherList}/>
                <Route path="/studentList" exact component={StudentList}/>
                <Route path="/notifications" exact component={Notification}/>
                <Route path='/register' exact component={Register}/>
                <Route path='/tasks' exact component={Tasks}/>
                <NotFound/>
              </Switch>
          </HashRouter>
        </div>
      </div>
    );
  }
}


export default Content;
