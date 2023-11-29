import React, { useState } from 'react';
import "./Signup.css"
import axios from 'axios';
import {SERVER_URL} from "../../constants"
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";
const Signup = () => {
    const [repass,setRepass] = useState('')
    const [info,setInfo] = useState({
      firstName : '',
      lastName : '',
      email: '',
      password : '',
      phone: '',
      school: '',
      degree: '',
      ssn : '',
      birthDate : '',
      student : false
    })

    function handleChange(event){
        if(event.target.name ==="student" && event.target.value === "true"){
          setInfo({...info,[event.target.name]:true})
        }
        else if(event.target.name ==="student" && event.target.value === "false"){
          setInfo({...info,[event.target.name]:false})
        }
        else{
          setInfo({...info,[event.target.name]:event.target.value})
        }
    }
    function handleRepass(event){
      setRepass(event.target.value)
    }

    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    const validatePassword = (password , repassword) => {
      if(password.length < 5){
        return 0;
      }
      if(password !== repassword){
        return 1;
      }
      return 2;
    };
    function validateAge(birthdate) {
      var today = new Date();
      var selectedDate = new Date(birthdate);
  
      // Check if the entered date is a realistic past date
      if (selectedDate >= today) {
        return false;
      }else{
          return true
      }
    }
    function validateSSN(SSN) {
      if(!isNaN(SSN) && SSN.length === 14 ){
          return true
      }
      return false
    }
    
    function handleSubmit(event){
      console.log(info)
      event.preventDefault()
    
    const isValidEmail = validateEmail(info.email);
    const isValidPassword = validatePassword(info.password,repass);
    const isValidBirth = validateAge(info.birthDate);
    const isValidSSN = validateSSN(info.ssn);

    if (!isValidEmail) {
        const emailInput = document.getElementById('email');
        emailInput.value='';
        emailInput.placeholder="must contain @ and . as(kk@ll.dd)";
        emailInput.classList.add('SSvibrate'); // Add the vibrate class
        setTimeout(() => {
          emailInput.classList.remove('SSvibrate'); // Remove the vibrate class after a short delay
          emailInput.placeholder="Email";
        }, 1000);
      }
    if (isValidPassword === 0) {
      const passInput = document.getElementById('password')
      passInput.value='';
      passInput.placeholder="5 chars or more";
      passInput.classList.add('SSvibrate'); // Add the vibrate class
    setTimeout(() => {
      passInput.classList.remove('SSvibrate'); // Remove the vibrate class after a short delay
      passInput.placeholder="Password";
    }, 1000);
    } 
    else if(isValidPassword === 1) {
      const passInput = document.getElementById('Repassword')
      passInput.value='';
      passInput.placeholder="Not Matched";
      passInput.classList.add('SSvibrate'); // Add the vibrate class
    setTimeout(() => {
      passInput.classList.remove('SSvibrate'); // Remove the vibrate class after a short delay
      passInput.placeholder="Re-Password";
    }, 1000);
    }
    if (!isValidSSN) {
      const ssnInput = document.getElementById('ssn')
      ssnInput.value='';
      ssnInput.classList.add('SSvibrate'); // Add the vibrate class
        setTimeout(() => {
          ssnInput.classList.remove('SSvibrate'); // Remove the vibrate class after a short delay
        }, 1000);
      }
    if (!isValidBirth) {
      const birthInput = document.getElementById('birth')
      birthInput.value='';
      birthInput.classList.add('SSvibrate'); // Add the vibrate class
        setTimeout(() => {
          birthInput.classList.remove('SSvibrate'); // Remove the vibrate class after a short delay
        }, 1000);
      }
    if(isValidEmail && isValidPassword === 2 && isValidSSN && isValidBirth){
      axios.post(SERVER_URL+'/register',info).then(response=>{alert(response.data)}).catch(err =>{alert(err.response.data)})
  }
    }




    return (
      <div className='SSbody'>
      <div className="SSgradient-form">

      <div className='SSall'>

        <div  className="SSleftside d-flex flex-column ">
            <div className="SShead">
                <h5>Please fill the following information</h5>
            </div>
            <form action="/Login.js" method="post" className='Sff2' onSubmit={handleSubmit}>
{/*  ************************************* for email *************************** */}
                <div className='Sflp'>
                    <input className='Sin' name="email" id='email' placeholder='Email' type='text' required onChange={handleChange}/>
                </div>
{/*  ************************************* for first name & last name *************************** */}
                <div className='Sflp'>
                  <input className='Sin2' name="firstName" placeholder='FirstName'  type='text'required onChange={handleChange}/>
                  <input className='Sin2' name="lastName" placeholder='LastName' type='text' required onChange={handleChange}/>
                </div>
{/*  ************************************* for password *************************** */}
                <div className='Sflp'>
                  <input className='Sin2' name="password" id='password' placeholder='Password' type='password'required onChange={handleChange}/>
                  <input className='Sin2' placeholder='Re-Password' type='password'required onChange={handleRepass}/>
                </div>
{/*  ************************************* for gender *************************** */}
                <div className='Sflp'>
                    <input className='Sin2' name='phone' id='Repassword' placeholder='Phone' type={"text"} required onChange={handleChange}/>
                    <input className='Sin2' name ="ssn" id='ssn' placeholder='SSN' type='text'required onChange={handleChange}/>
                </div>
{/*  ************************************* for degree *************************** */}
                <div className='Sflp'>
                    <input className='Sin2' name='school' placeholder='School' type={"text"} required onChange={handleChange}/>
                    <select className='Sin2' name="degree" defaultValue={""} required onChange={handleChange}>
                      <option value="" disabled>Degree</option>
                      <option value="student">Student</option>
                      <option value="associate">Associate</option>
                      <option value="bachelor">Bachelor</option>
                      <option value="certificate">Certificate</option>
                      <option value="diploma">Diploma</option>
                      <option value="doctorate">Doctorate</option>
                      <option value="engineer">Engineer's Degree</option>
                      <option value="master">Master</option>
                      <option value="professional">Professional Degree</option>
                      <option value="specialist">Specialist Degree</option>
                      <option value="vocational">Vocational</option>
                    </select>
                </div>  
{/*  ************************************* for student or instructor *************************** */}
                <div  className='Sflp2'>
                  <select className='Sin2' name="student" defaultValue={""} required onChange={handleChange}>
                      <option value="" disabled >Student?</option>
                      <option value="true">True</option>
                      <option value="false">False</option>
                  </select>
                  <input type={"date"} id='birth' name="birthDate"required onChange={handleChange}/>
                </div>
{/*  ************************************* submit *************************** */}
                <button className='Sbutt' type='submit' >Register</button>
            </form>
        </div>

        <div className="SSrightside">
            <div className="SSfirst">
                <img className='SSLOGO' src={require('../../images/e-learn.jpg')} alt='logo'/>
                <h1>Sign Up</h1>
            </div>
            <div className="SSSecond">
                <h5>Welcome to Our E-Learning Platform! 🚀</h5>
                <p>Unlock limitless learning possibilities with us. Sign up now and embark on a journey of knowledge and growth! 📚✨</p>
                {/* <Link className="SSback" to={"/"}>Go Back</Link> */}
            </div>
        </div>

      </div>

    </div>
    </div>
    );
}

export default Signup;