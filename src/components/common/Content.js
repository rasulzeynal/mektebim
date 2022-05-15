import React from 'react';
import {HashRouter, Switch, Route} from "react-router-dom";
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


const Content = (props) => {
    return (
      <div className="outer-border" >
        <div className={'content ' + (props.isOpen ? 'is-open' : '')}>
          <HashRouter>
            <NavBar setIsOpen={props.setIsOpen} isOpen = {props.isOpen} logOutUser={props.logOutUser} setLogOutUser={props.setLogOutUser}/>
            <div className='p-3'>
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" exact component={Login}/>
                <Route path='/users' exact component={Users}/>
                <Route path="/admin-list" exact component={AdminList}/>
                <Route path="/teacher" exact component={Teacher}/>
                <Route path="/student" exact component={Student}/>
                <Route path="/teacherList" exact component={TeacherList}/>
                <Route path="/studentList" exact component={StudentList}/>
                <Route path="/notifications" exact component={Notification}/>
                <Route path='/tasks' exact component={Tasks}/>
                <Route path='/courses' exact component={Courses}/>
                <Route path='/course-info' exact component={CourseInfo}/>
                <NotFound/>
              </Switch>
              </div>
          </HashRouter>
      </div>
      </div>
    );
}
              
          


export default Content;
