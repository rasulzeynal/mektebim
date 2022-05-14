import React from 'react';
import {Button, Form, Input} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import {useHistory} from "react-router-dom";
import { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { loginInitiate, setErrorEmpty } from '../../redux/action';




const Login = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  let history = useHistory();
  let dispatch = useDispatch();
  const {user,error} = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(setErrorEmpty())
    if (user) {
      history.push("/")
    }
  },[user])
 
  const login = (e) => {
    e.preventDefault();
    dispatch(loginInitiate(email,password))
  }
    return (
        <div className="login">
        <div className="container">
          <div className="row mb-5">
            <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4 border" >
              <h1 className="text-center mt-4 display-4">Daxil ol</h1>
                  <div className=" shadow rounded p-5">
                  {error && <p className='login-error'>{error}</p>}
                    <Form noValidate onSubmit={login}>
                      <Input 
                      name="email" 
                      id='email'
                      type="text" 
                      placeholder="Mailinizi daxil edin"
                      value={email}
                      onChange= {(e) =>setEmail(e.target.value)}
                      />
                      <Input 
                      name="password" 
                      id="password"
                      type="password" 
                      placeholder="Şifrəni daxil edin" 
                      className="mt-2"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}/>
                      <Button 
                      color="success" 
                      className="mt-2" 
                      block
                      type='submit'>
                        <FontAwesomeIcon icon={faSignInAlt} className="mr-2"/>
                        Daxil ol
                      </Button>
                    </Form>
                  </div> 
            </div>
          </div>
        </div>
      </div>
    )
  }



export default Login ;