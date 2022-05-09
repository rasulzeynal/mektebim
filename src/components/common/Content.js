import React from 'react';
import { connect } from 'react-redux';
import {routes} from "../../routes";
import {HashRouter, Switch, Route, Redirect} from "react-router-dom";
import Login from "../pages/Login"
import NavBar from './NavBar';
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Users from '../users/Users';
import Teacher from "../teacher/Teacher";
import Student from "../student/Student";
import TeacherList from "../teacher/TeacherList";
import StudentList from "../student/StudentList";
import AdminList from '../admin/AdminList';
import Notification from '../notification/Notification';
import Tasks from "../pages/Tasks";
import CourseInfo from "../course/CourseInfo"
import Courses from '../course/Courses'

class Content extends React.Component {
  render() {
    return (
      <div className="outer-border" >
        <div className={'content ' + (this.props.isOpen ? 'is-open' : '')}>
          <HashRouter>
            <NavBar toggle={this.props.toggle}/>
            <div className='p-3'>
              <Switch>
                <Route path="/" exact component={Home}/>
                {
                  routes[this.props.role] &&
                  routes[this.props.role].map((route,index) =>
                  <Route key={index} path={route.path} component={route.component} exact={route.exact}/>
                  )
                }
                <NotFound/>
                </Switch>
                </div>
                {
                  this.props.role === "Admin" ?
                  <Redirect to="/users"/> :
                  this.props.role === "Muellim" ?
                  <Redirect to="/teacher"/> :
                  this.props.role === "sagird" ?
                  <Redirect to="/student"/> :
                  <Redirect to="/"/>
                }
                </HashRouter>
      </div>
      </div>
    );
  }
}
                {/* <Route path="/login" exact component={Login}/>
                <Route path='/users' exact component={Users}/>
                <Route path="/admin-list" exact component={AdminList}/>
                <Route path="/" exact component={Home}/>
                <Route path="/teacher" exact component={Teacher}/>
                <Route path="/student" exact component={Student}/>
                <Route path="/teacherList" exact component={TeacherList}/>
                <Route path="/studentList" exact component={StudentList}/>
                <Route path="/notifications" exact component={Notification}/>
                <Route path='/tasks' exact component={Tasks}/>
                <Route path='/Courses' exact component={Courses}/>
                <Route path='/course-info' exact component={CourseInfo}/>
                <NotFound/> */}
              
          

const mapStateToProps = store => store;
export default connect(mapStateToProps)(Content);
