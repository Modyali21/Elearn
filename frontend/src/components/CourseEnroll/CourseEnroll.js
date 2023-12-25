import './CourseEnroll.css';
import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {SERVER_URL} from "../../constants"

function CourseEnroll(props) {
    const [studentData,setStudentData] = useState()
    const [courses, setCourses] = useState([]);
    const [info,setInfo] = useState({
        courseName: '',
        instructorName : '',
        filtertype : '',

      })
    function handleChange(event){
        setInfo({...info,[event.target.name]:event.target.value})
    }
    async function handleSubmit(e){
        e.preventDefault();
        console.log(info);
        
          try{
            axios.get(`${SERVER_URL}/course/filter/${info.courseName}`,'',{
              }).then(response=>{
                  console.log(response.data)
                  setCourses(response.data)
              })
        }
        catch{
            alert("Errorororor");
        }
        
      };
    function myFunction(){
        axios.get(SERVER_URL+'/course/getAll',{},{
        }).then(response=>{
            console.log(response.data)
            setCourses(response.data)
        })  
    }
    useEffect(() => {
      console.log(props.user.email)
      console.log(props.user.password)
      axios.get(SERVER_URL + '/myprofile',{
          auth: {
              username: props.user.email,
              password: props.user.password
          }
          })
          .then(response => {
              console.log(response.data)
              setStudentData(response.data)
          })
          .catch(error => {
              console.error('Error:', error);
          });
      },[]);

    function Enroll(cId) {
        console.log(`${studentData.firstName} has id: ${studentData.id}`)
        try {
          let email = props.user.email;
          let password = props.user.password;
          axios.put(SERVER_URL+`/course/student/${studentData.id}/coursecode/${cId}`, {}, {
            auth: {
              username: email,
              password: password,
            }
          })
          .then(response => {
            alert(response.data);
          })
          .catch(error => {
            console.error('Error fetching courses:', error);
            // Handle error appropriately, e.g., show a user-friendly message
          });
        } catch (error) {
          console.error('Error in Enroll function:', error);
          // Handle unexpected errors appropriately
        }
      }
      
        window.onload = function() {
            myFunction();
          };
    return (
    <div className='ECbody'>
        <nav className='ECnav'>
        <div className="text-center EClog">
            <img className='EClogo' src={require('../../images/e-learn.jpg')} alt='logo' style={{width: '100px'}} />
            <h2 className='ECh2'>E-Learning Platform</h2>
        </div>
        <div className='EClinks'>
        <a href={"/profile"} style={{textDecoration:"none"}}  className='ECbut'>Home</a>
        <a href={"/updateprofile"} style={{textDecoration:"none"}}  className='ECbut'>Edit profile</a>
        <a href={"/"} style={{textDecoration:"none"}}  className='ECbut'>Log out</a>

        </div>
        </nav>
        <div className='ECtotal'>
        <div className="ECtab ">
            <h6 className='ECname'>Available Courses:</h6>
            <form className='ECsearcgbar' onSubmit={handleSubmit}>
            <input type="text" placeholder="Course Name" onChange={handleChange} className='ECsearch' name="courseName" required/>
            <input type="text" placeholder="Instructor Name" onChange={handleChange} className='ECsearch' name="instructorName"/>
            <button type="submit" className='ECSebut'><img className='ECsearchlogo' src={require('../../images/icons8-search-50.png')} alt='searchlogo' style={{width: '25px'}} /> Search</button>      
            <select className='ECSebut' placeholder='None'id='filter'  name="filtertype" onChange={handleChange} required>
                    <option value="" disabled selected>None</option>
                    <option value="CousreName">1-CousreName</option>
                    <option value="InstructorName">2-InstructorName</option>
                    <option value="1and2">1and2</option>
                    <option value="1or2">1or2</option>
            </select>

          </form>
        </div>
        <div className='ECdata'>
            <div id="Courses" className="ECtabcontent" >
            {courses.map((course, index) => (
            <div key={index} className='ECCourses'>
              <div className='ECtitle'>
                <Link to="/course" className='Clink' rel="noopener noreferrer">Course Title: {course.courseName}</Link>
                <div className='ECreg'>
                  <button className='ECTeacBut1' onClick={() => Enroll(course.courseCode)} >Enroll</button>
                </div>
              </div>
              <h6 className='ECh6'>Instructor Id: {course.instructorId}</h6>
              <h6 className='ECh6'>Course Code: {course.courseCode}</h6>

              <h6 className='ECh6'>Description:</h6>
              <p>{course.description}</p>
              <h6 className='ECh6'>DeadLine: {
                    new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }).format(new Date(course.deadLine))
                    }</h6>
            </div>
          ))}

           
          </div>

        </div>
        </div>
    </div>

  );
}

export default CourseEnroll;