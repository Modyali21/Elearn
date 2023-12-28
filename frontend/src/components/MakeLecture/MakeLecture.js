import './MakeLecture.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {SERVER_URL} from "../../constants"
import axios from 'axios';

function MakeLecture(props) {
  const [info,setInfo] = useState({
    courseCode: "SCC",
    title : '',
    description : '',
    videoLink : ''
  })

function handleChange(event){
    setInfo({...info,[event.target.name]:event.target.value})
}
async function handleSubmit(e){
    e.preventDefault();
    console.log(info);
      try{
        let email = props.user.email
        let password = props.user.password
        axios.post(SERVER_URL+'/lecture/create',info,{
              auth: {
                  username: email,
                  password: password
              }
          }).then(response=>{
              alert(response.data)
          }).catch(err => {
            alert(err.response.data)
          })
    }
    catch{
        alert("Error");
    }
    
  };

    return (
    <div className='MCbody'>
        <nav className='MCnav'>
        <div className="text-center MClog">
            <img className='MClogo' src={require('../../images/e-learn.jpg')} alt='logo' style={{width: '100px'}} />
            <h2 className='MCh2'>E-Learning Platform</h2>
        </div>
        <div className='MClinks'>
        <a href={"/profile"} style={{textDecoration:"none"}}  className='MCbut'>Home</a>
        <a href={"/courseenroll"} style={{textDecoration:"none"}}  className='MCbut'>Available Courses</a>
        <a href={"/updateprofile"} style={{textDecoration:"none"}}  className='MCbut'>Edit profile</a>
        <a href={"/"} style={{textDecoration:"none"}}  className='MCbut'>Log out</a>

        </div>
        </nav>
        <div className='MCtotal'>
            <form action='/course' className='MCform1' onSubmit={handleSubmit} >
                <h4 className='MCtitle'>Lecture Form</h4>
                <div className='MCform2'>
                <div className='MClab'>
                    <label for="">Lecture Name:</label>
                    <input type="text" id="title" className='MCin' name="title" onChange={handleChange} required/>
                    </div>
                    <div className='MClab'>
                    <label for="">Lecture Link:</label>
                    <input type="url" id="videoLink" className='MCin' name="videoLink" onChange={handleChange} required/>
                    </div>
                    <div className='MClab'>
                    <label for="">Description: </label>
                    <textarea  name="description" className='MCtextarea' placeholder='' onChange={handleChange}  required/>
                    </div>
                    <button className='MCbut' type='submit' >Done</button>
                </div>
            </form>
        </div>
    </div>

  );
}

export default MakeLecture;