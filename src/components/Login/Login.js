import React, {useEffect, useRef, useState} from "react";
import "./Login.scss";
function Login() {

   // logic of password input 
    const [passwordError , setpasswordError] = useState('');
    const password = useRef();
    var hasNumber = /\d/; 
    var hasLetter = /[a-zA-Z]/;
    const checkpassword = () => {
        if(password.current.value === '') setpasswordError('you have to enter a value')
        else if(!hasNumber.test(password.current.value)) setpasswordError('password have to contain a number')
        else if(!hasLetter.test(password.current.value)) setpasswordError('password have to contain and letters')
        else if(password.current.value.split('').length < 5) setpasswordError('password have to be moor than 5 char')
        else if(password.current.value.split(' ').length > 1) setpasswordError("password haven't to contain a space")
        else {setpasswordError('')}
    }
    const showpassword = ()=>{
      password.current.type =  password.current.type === 'password' ? 'text' : 'password';
    }
    // logic of email 
    const email = useRef();
    const [emailError, setemailError] = useState('')
    const checkemail=()=>{
      var re = /^\S+@\S+\.(com|net|eg|org)+$/ig;
      if(re.test(email.current.value)) setemailError('')
      else setemailError('email invalied >> example@gmail.com')
    }
    // disabled button 
    
    const openSubmit =()=>{
      var btn = document.querySelector('.btn-login');
      if(email.current.value === '' || password.current.value === '' || emailError !== '' || passwordError !== '') btn.setAttribute('disabled','')
      else btn.removeAttribute('disabled',"")
    }
    // useEffect
    useEffect(()=>{
      openSubmit();
    });
    // show data after input 
    const showdata = ()=> alert('email is >>'+email.current.value +'password is >> '+ password.current.value);
    
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
        <button type="button" className="btn btn-primary btn-login" onClick={()=>{showdata()}} disabled >
          login
        </button>
      </form>
    </div>
  );
}
export default Login;
