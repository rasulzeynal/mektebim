import React, { useState } from 'react';
import {Alert,Button, Form,Input,Modal, ModalBody, ModalHeader,ModalFooter} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark,faPlus,faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Notification = () => {


   const [visible,setVisible] = useState(true);
   const dismiss = () => {
    setVisible(false);
  }

  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
    return (
    <div >
      <div className='me-3' style={{ display:"flex", justifyContent: "end" }}>
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
            Mesaj əlavə et
          </h3>
        </Button>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader style={{display:"flex",justifyContent:"center"}}>
        <h2 className="text-center mb-5">Mesaj əlavə et</h2>
        </ModalHeader>
        <ModalBody>
          <Form>
            <div className="form-outline mb-4">
          <Input
                  type="textarea"
                  className="form-control "
                  placeholder="Mesaj"
                />
            </div>
          <div className="d-flex justify-content-center">
                <Button
                  type="button"
                  className="btn btn-success btn-block btn gradient-custom-4 text-body"
                  style={{display:"flex",justifyContent:"center",alignItems:"center"}}
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="sm"
                    className="mr-2 "
                    style={{ color: "white"}}
                  />
                  <p style={{ color: "white",margin:"0" }}>Göndər</p>
                </Button>
              </div>
          </Form>
        </ModalBody>
        <ModalFooter>
            <Button color="secondary" onClick={toggle}>
              Ləğv et
            </Button>
          </ModalFooter>
      </Modal>
        <hr/>
       { visible ? <Alert color="danger"  className="container alert">
        I am an alert and I can be dismissed!
        <FontAwesomeIcon className='icon' onClick={dismiss}   icon={faXmark} /> 
        </Alert> : null}
    </div> 
    )}
export default Notification;