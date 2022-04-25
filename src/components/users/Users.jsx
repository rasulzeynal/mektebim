import React, { useState } from "react";
import { HashRouter, NavLink } from "react-router-dom";
import {
  Row,
  Card,
  CardTitle,
  CardSubtitle,
  Button,
  Modal,
  ModalFooter,
  ModalBody,
  Input,
  Form,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faUserLock,
  faPlus,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

const Users = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };

  return (
    <HashRouter>
      <div className="me-4" style={{ display: "flex", justifyContent: "end" }}>
        <Button
          onClick={toggle}
          color="success"
          style={{
            display: "flex",
            transition: "ease",
            borderRadius: "6px",
            marginTop: "10px",
          }}
        >
          <FontAwesomeIcon
            className="icon mr-2"
            icon={faPlus}
            style={{ color: "white" }}
          />
          <h3 style={{ fontSize: "15px", color: "white", margin: "0" }}>
            İstifadəçi əlavə et
          </h3>
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalBody>
            <h2 className="text-center mb-5">İstifadəçi əlavə et</h2>
            <Form>
              <div className="form-group form-outline mb-4 d-flex justify-content-between">
                <Input
                  type="text"
                  className="form-control form-control mr-2"
                  placeholder="Ad"
                />
                <Input
                  type="text"
                  className="form-control form-control "
                  placeholder="Soyad"
                />
              </div>
              <div className="form-outline mb-4">
                <Input
                  type="text"
                  className="form-control form-control"
                  placeholder="Ata adı"
                />
              </div>
              <div className="form-outline mb-4">
                <Input
                  type="email"
                  className="form-control form-control"
                  placeholder="Mail"
                />
              </div>
              <select className="custom-select mb-4" required>
                <option value="">Status</option>
                <option value="admin">Admin</option>
                <option value="muellim">Muellim</option>
                <option value="sagird">Sagird</option>
              </select>
              <div className="form-outline mb-4">
                <Input
                  type="password"
                  className="form-control form-control"
                  placeholder="Şifrə"
                />
              </div>
              <div className="form-outline mb-4">
                <Input
                  type="password"
                  className="form-control form-control"
                  placeholder="Şifrəni təkrarla"
                />
              </div>
              <div className="d-flex justify-content-center">
                <Button
                  type="button"
                  className="btn btn-success btn-block btn gradient-custom-4 text-body"
                >
                  <FontAwesomeIcon
                    icon={faUserPlus}
                    size="sm"
                    className=" mt-2 mr-2"
                    style={{ color: "white" }}
                  />
                  <p style={{ color: "white" }}>Əlavə et</p>
                </Button>
              </div>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <hr />
      <Row className="cards p-2 ">
        <Card body inverse color="primary" className="admin card col">
          <CardTitle>Admin</CardTitle>
          <NavLink exact className="nav-link" to="/adminList">
            <FontAwesomeIcon className="icon" icon={faUserLock} />
            <CardSubtitle className="card-text">1</CardSubtitle>
          </NavLink>
        </Card>
        <Card body inverse color="warning" className="teacher-list card col">
          <CardTitle>Müəllim</CardTitle>
          <NavLink exact className="nav-link" to="/teacherList">
            <FontAwesomeIcon className="icon" icon={faAddressBook} />
            <CardSubtitle className="card-text">3</CardSubtitle>
          </NavLink>
        </Card>
        <Card body inverse color="warning" className="student-list card col">
          <CardTitle>Şagird</CardTitle>
          <NavLink exact className="nav-link" to="/studentList">
            <FontAwesomeIcon className="icon" icon={faAddressBook} />
            <CardSubtitle className="card-text">20</CardSubtitle>
          </NavLink>
        </Card>
      </Row>
    </HashRouter>
  );
};

export default Users;
