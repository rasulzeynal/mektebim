import React, { Component } from 'react';
import { Form,Button, Input} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserPlus} from '@fortawesome/free-solid-svg-icons';

class AddTeacher extends Component {
  render() {
    return (
      <section>
    <div className="container">
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius: "15px"}}>
            <div className="card-body p-5">
              <h2 className="text-center mb-5">Müəllim əlavə et</h2>
              <Form>
                <div className="form-group form-outline mb-4 d-flex justify-content-between">
                  <Input type="text" className="form-control form-control mr-2" placeholder='Ad'/>
                  <Input type="text" className="form-control form-control " placeholder='Soyad'/>
                </div>
                <div className="form-outline mb-4">
                  <Input type="text" className="form-control form-control" placeholder='Ata adı'/>
                </div>
                <div className="form-outline mb-4">
                  <Input type="email"  className="form-control form-control" placeholder="Mail" />
                </div>
                <select className="custom-select mb-4" required > 
                      <option value="">Tədris etdiyi fənn</option>
                      <option value="0">Riyaziyyat</option>
                      <option value="1">Azərbaycan dili</option>
                      <option value="2">İngilis dili</option>
                      <option value="3">Tarix</option>
                </select>
                <div className="form-outline mb-4">
                  <Input type="password"  className="form-control form-control" placeholder='Şifrə' />
                </div>
                <div className="form-outline mb-4">
                  <Input type="password"  className="form-control form-control" placeholder='Şifrəni təkrarla' />
                </div>
                <div className="d-flex justify-content-center">
                  <Button type="button" className="btn btn-success btn-block btn gradient-custom-4 text-body">
                  <FontAwesomeIcon icon={faUserPlus}  size="sm" className=" mt-2 mr-2"/>Əlavə et</Button>
                  </div>
              </Form>

            </div>
          </div>
        </div>
      </div>
    </div>
</section>
    )
  }
}
export default AddTeacher;