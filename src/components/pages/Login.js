import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {parseJwt,login} from "../../redux/user/userAction";
import {Button, Form, Input} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignInAlt, faSyncAlt} from '@fortawesome/free-solid-svg-icons';
import {config} from "../../config"

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            loading: false
        }
    }

    submitUserPassForm = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      let data = {};

      for (const [key,value] of formData.entries()){
        data[key] = value;
      }

      this.setState({loading:true});
      axios.post(config.apiURL + 'data',data).then(res => {
        console.log(res.data)
        if (res.data.accessToken) {
          localStorage.setItem('jwttoken',res.data.accessToken);
          localStorage.setItem('refreshToken',res.data.refreshToken);
          let encoded = parseJwt(res.data.accessToken);
          encoded['role'] = encoded.data.userRole;

          Object.keys(encoded).map(key =>
            localStorage.setItem(key,encoded[key])
             );
             this.props.login(encoded['role']);
        }
      }).catch(error => {
        this.setState({loading:false});
      });
    }
  render() {
    return (
        <div className="login">
        <div className="container">
          <div className="row mb-5">
            <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4" style={{borderRadius: "15px",border:"1px solid rgba(0,0,0,0.125)"}}>
              <h1 className="text-center mb-4 display-4">Daxil ol</h1>
              {
                !this.state.loading ?
                  <div className="bg-white shadow rounded p-5">
                    <Form onSubmit={this.submitUserPassForm}>
                      <Input name="name" type="text" placeholder="İstifadəçi adını daxil edin"/>
                      <Input name="sifre" type="password" placeholder="Şifrəni daxil edin" className="mt-2"/>
                      <Button color="success" className="mt-2" block>
                        <FontAwesomeIcon icon={faSignInAlt} className="mr-2"/>
                        Daxil ol
                      </Button>
                    </Form>
                  </div> : <div className="bg-white shadow rounded text-center p-5">
                    <FontAwesomeIcon icon={faSyncAlt} size="5x" className="text-success m-5" spin/>
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (role) => dispatch(login(role))
  }
}

export default connect(null,mapDispatchToProps)(Login) ;