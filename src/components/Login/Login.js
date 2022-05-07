import React, {useEffect, useRef, useState} from "react";
import { NavLink } from "react-router-dom";
import validator from "validator";
import "./Login.scss";


function Login() {

   // logic of password input 
    const [passwordError , setpasswordError] = useState('');
    const password = useRef();
    const checkpassword = () => {
        if(validator.isEmpty(password.current.value)) setpasswordError('you have to enter password')
        else if(validator.isAlpha(password.current.value)) setpasswordError('password have to contain number ')
        else if(validator.isNumeric(password.current.value)) setpasswordError('password have to contain letters')
        else if(!validator.isAlphanumeric(password.current.value)) setpasswordError('password have to contain letters and num only')
        else if(validator.isLength(password.current.value,{max:5})) setpasswordError('password have to be moor than 5 char and less than 10')
        else {setpasswordError('')}
    }
    // method to show and hidden password 
    const showpassword = ()=>{
      password.current.type =  password.current.type === 'password' ? 'text' : 'password';
    }
    // logic of email 
    const email = useRef();
    const [emailError, setemailError] = useState('')
    const checkemail=()=>{
      if(validator.isEmail(email.current.value)) setemailError('')
      else setemailError('email invalied >> example@gmail.com')
    }
    // disabled button 
    
    const openSubmit =()=>{
      var btn = document.querySelectorAll('.btn-login');
      if(email.current.value === '' || password.current.value === '' || emailError !== '' || passwordError !== '') btn[0].classList.add('disabled')
      else btn[0].classList.remove('disabled')
    }
    // useEffect
    useEffect(()=>{
      openSubmit();
    });
  return (
    <div className="LogIn">
      <h4>login form</h4>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={email} 
            onChange={()=>{checkemail()}}
          />
          { emailError !== '' ? <p className="validation">{emailError}</p>: '' }
        </div>
        <div className="mb-3 password-filed">
          <label htmlFor="exampleInputPassword1" className="form-label"> Password </label>
          <input  type="password" className="form-control" id="exampleInputPassword1"ref={password} onChange={()=>{checkpassword()}} />
           {passwordError !== '' ? <p className="validation">{passwordError}</p>: ''}
          <i className="fa-solid fa-eye-slash" onClick={()=>{showpassword()}}> </i>
        </div>
        <NavLink  exact='true' to="/home/dashboard" className="btn btn-primary  btn-login disabled">login</NavLink>
      </form>
    </div>
  );
}
export default Login;
