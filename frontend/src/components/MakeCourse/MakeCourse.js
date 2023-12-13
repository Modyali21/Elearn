import './MakeCourse.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CourseRegister() {
  const [info,setInfo] = useState({
    courseName: '',
    courseCode : '',
    description : '',
    date : '',
  })
function handleChange(event){
    setInfo({...info,[event.target.name]:event.target.value})
}
async function handleSubmit(e){
    e.preventDefault();
    console.log(info);
  //   try{
  //     login(info.email,info.password).then(()=>{
  //       axios.post(SERVER_URL+'/makecourse',info).then(response=>{
  //         window.location.href = `http://localhost:3000/profile/?${info.email.slice(0,info.email.indexOf("@"))}`;
  //       }).catch(err =>{
  //         alert(err.response.data)
  //       })
  //     }).catch(err =>{alert(err.response.data)});
  // }
  // catch{
  //     alert("The email is already present");
  // }
    
  };

    return (
    <div className='MCbody'>
        <nav className='MCnav'>
        <div className="text-center MClog">
            <img className='MClogo' src={require('../../images/e-learn.jpg')} alt='logo' style={{width: '100px'}} />
            <h2 className='MCh2'>E-Learning Platform</h2>
        </div>
        <div className='MClinks'>
        <Link to={"/profile"} style={{textDecoration:"none"}}  className='MCbut'>Home</Link>
        <Link to={"/courseenroll"} style={{textDecoration:"none"}}  className='MCbut'>Available Courses</Link>
        <Link to={"/updateprofile"} style={{textDecoration:"none"}}  className='MCbut'>Edit profile</Link>
        <Link to={"/"} style={{textDecoration:"none"}}  className='MCbut'>Log out</Link>

        </div>
        </nav>
        <div className='MCtotal'>
            <form className='MCform1' onSubmit={handleSubmit} >
                <h4 className='MCtitle'>Cousre Regsiteration</h4>
                <div className='MCform2'>
                    <div className='MClab'>
                    <label for="">Course Name: </label>
                    <input type="text" name="courseName" className='MCin' placeholder='Course Name' onChange={handleChange}  required/>
                    </div>
                    <div className='MClab'>
                    <label for="">Course Code: </label>
                    <input type="text" name="courseCode" className='MCin' placeholder='Course Code' onChange={handleChange}  required/>
                    </div>
                    <div className='MClab'>
                    <label for="">Description: </label>
                    <textarea  name="description" className='MCtextarea' placeholder='Description' onChange={handleChange}  required/>
                    </div>
                    <div className='MClab'>
                    <label for="">DeadLine: </label>
                    <input type="date" name="date" className='MCin' placeholder='DeadLine' onChange={handleChange}  required/>
                    </div>
                    <button className='MCbut' type='submit' >Finish</button>
                </div>
            </form>
        </div>
    </div>

  );
}

export default CourseRegister;