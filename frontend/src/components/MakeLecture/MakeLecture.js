import './MakeLecture.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {SERVER_URL} from "../../constants"
import axios from 'axios';

function MakeLecture(props) {
  const [info,setInfo] = useState({
    courseCode: '',
    lectureName : '',
    lectureLink : '',
    description : '',
    duration : ''
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
        axios.post(SERVER_URL+'/course/addLecture',info,{
              auth: {
                  username: email,
                  password: password
              }
          }).then(response=>{
              alert(response.data)
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
            <form className='MCform1' onSubmit={handleSubmit} >
                <h4 className='MCtitle'>Lecture Form</h4>
                <div className='MCform2'>
                <div className='MClab'>
                    <label for="">Lecture Name:</label>
                    <input type="url" id="lectureName" className='MCin' name="lectureName" onChange={handleChange} required/>
                    </div>
                    <div className='MClab'>
                    <label for="">Lecture Link:</label>
                    <input type="url" id="lectureLink" className='MCin' name="lectureLink" onChange={handleChange} required/>
                    </div>
                    <div className='MClab'>
                    <label for="">Lecture Duration:</label>
                    <input type="number" id="duration" className='MCin' name="duration" min="1" max="600" placeholder='In Minutes'  onChange={handleChange} required/>
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