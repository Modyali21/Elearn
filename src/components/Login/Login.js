import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import {SERVER_URL} from "../../constants"
import './Login.css';

function Login() {
  const [status,setStatus] = useState(0)
  const [info,setInfo] = useState({
    email: '',
    password : '',
  })
  function handleChange(event){
      setInfo({...info,[event.target.name]:event.target.value})
}

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validatePassword = (password) => {
    if(password.length < 5){
      return false;
    }
    return true;
  };
  const handleSubmit = (e) => {
    
    e.preventDefault();
    const isValidEmail = validateEmail(info.email);
    const isValidPassword = validatePassword(info.password);
    if (!isValidEmail) {
      document.getElementById('email').value='';
      document.getElementById('email').classList.add('Lvibrate'); // Add the vibrate class
      setTimeout(() => {
      document.getElementById('email').classList.remove('Lvibrate'); // Remove the vibrate class after a short delay
      }, 1000);
    }
    if (!isValidPassword) {
      document.getElementById('password').value='';
      document.getElementById('password').classList.add('Lvibrate'); // Add the vibrate class
      setTimeout(() => {
      document.getElementById('password').classList.remove('Lvibrate'); // Remove the vibrate class after a short delay
      }, 1000);
    }
    if(isValidEmail && isValidPassword){
      console.log(info);
      axios.post(SERVER_URL+'/login',info).then(response=>{
        window.location.href = "http://localhost:3000/profile";
      }).catch(err =>{
        alert(err.response.data)
      })

    }
    // Do something with the login data, for example, log it to the console
    // You can add authentication logic here, such as sending the data to a server for validation.
  };
  return (
    <div className='Lbody'>
      <div className="Lgradient-form">

      <div className='Lall'>

        <div  className="Lleftside d-flex flex-column ">
            <div className="text-center">
            <img className='mb-5' src={require('../../images/e-learn.jpg')} alt='logo' style={{width: '185px'}} />
            </div>
            <h6 className='mb-4'>Please login to your account</h6>
            <form action='#' className='Lff' onSubmit={handleSubmit}>
            <input className='Linp' placeholder='Email' id='email' type='name' name='email'required onChange={handleChange}/>
            <input className='Linp' placeholder='Password' id='password' name='password' type='password'required onChange={handleChange}/>
            <button className=" Lbut" type='submit'>Sign in</button>
            
            </form>
            <div className="Lend">
              <p className="Ldont">Don't have an account?</p>
              
            <Link to={"/signup"} style={{textDecoration:"none"}}  className='Lbut2'>Sign Up</Link>

              
            </div>

        </div>

        <div className="Lrightside">
          <div className="LrightContent">
            <div>
              <h1 className='Lhh'>Login System</h1>
            </div>
            <div className="text-white ">
              <h3 className="mb-7">Welcome To Our E-Learning Platform! 🚀</h3>
              <h5 className="mb-5">We are glad that your are a member of our family 📚✨</h5>
              <h6 className=" Ltext">Welcome to our cutting-edge e-learning platform, where knowledge meets innovation. Unlock a world of transformative learning experiences designed to empower you with skills that transcend boundaries. Dive into a seamless blend of interactive courses, engaging content, and collaborative tools, fostering a dynamic online community dedicated to your educational journey. Embrace the future of learning – log in now and embark on a personalized path to success!</h6>
            </div>

          </div>

        </div>

      </div>

    </div>
    </div>

  );
}

export default Login;