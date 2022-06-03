import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row} from 'reactstrap';
import classnames from 'classnames';
import AddUserToCourse from './AddUserToCourse';
import ChangeCourseName from './ChangeCourseName';


const CourseInfo = () => {

  const [activeTab,setActiveTab] = useState("1")

const toggle = (tab) => {
  if (activeTab !== tab) {
    setActiveTab(tab);
  }
}

  return (
    <div>
    <Nav tabs>
     <NavItem>
        <NavLink
          className={classnames({ active: activeTab === '1' })}
          onClick={() => { toggle('1'); }}
        >
          İstifadəçilər
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({ active:activeTab === '2' })}
          onClick={() => {toggle('2'); }}
        >
          Kursa istifadəçi əlavə et
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({ active: activeTab === '3' })}
          onClick={() => { toggle('3'); }}
        >
          Kursun adını dəyiş
        </NavLink>
      </NavItem>
    </Nav>
    <TabContent activeTab={activeTab}>
    <TabPane tabId="1">
        <Row>
          Users
        </Row>
      </TabPane>
      <TabPane tabId="2">
        <Row>
          <AddUserToCourse/>
        </Row>
      </TabPane>
      <TabPane tabId="3">
        <Row>
          <ChangeCourseName/>
        </Row>
      </TabPane>
    </TabContent>
  </div>
  )
}

export default CourseInfo;
