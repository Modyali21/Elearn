import './Course.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Course() {
    function trigger(evt, cityName) {
        var i, tabcontent, tablinks,cityElement;
        cityElement = document.getElementById(cityName);
        tabcontent = document.getElementsByClassName("Ctabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        // Set the display property to "flex"
        cityElement.style.display = "flex";
        cityElement.style.flexDirection = "column";
        cityElement.style.justifyContent = "space-between";
        // cityElement.style.alignItems = "center";
        evt.currentTarget.className += " active";
      }
      const [courses, setCourses] = useState([]);

    return (
    <div className='Cbody' >
        <nav className='Cnav'>
        <div className="text-center Clog">
            <img className='Clogo' src={require('../../images/e-learn.jpg')} alt='logo' style={{width: '100px'}} />
            <h2 className='Ch2'>E-Learning Platform</h2>

        </div>
        <div className='Clinks'>
        <a href={"/profile"} style={{textDecoration:"none"}}  className='ECbut'>Home</a>
        <a href={"/courseenroll"} style={{textDecoration:"none"}}  className='ECbut'>Available Courses</a>
        <a href={"/updateprofile"} style={{textDecoration:"none"}}  className='ECbut'>Edit profile</a>
        <a href={"/"} style={{textDecoration:"none"}}  className='ECbut'>Log out</a>

        </div>
        </nav>
        <div className='Ctotal'>
        <div className="Ctab ">
        <button className="tablinks" onClick={(event) => trigger(event, 'Details')}>Details</button>
        <button className="tablinks" onClick={(event) => trigger(event, 'Lectures')}>Lectures</button>        
        <button className="tablinks" onClick={(event) => trigger(event, 'Announcement')}>Announcement</button>        
        <button className="tablinks" onClick={(event) => trigger(event, 'Quizzes')}>Quizzes</button>        
        </div>
        <div className='Cdata'>
            <div id="Details" style={{color:"white"}} className="Ctabcontent ">
              <div className='Cdetails'>
              <header className='Cheader'>
                <h1 className='Ch1'>Algorithms and Data Structures</h1>
                </header>

                <section className='Cheader'>
                <h3 className='Ch1'>Course Description</h3>
                <h5>This course introduces key concepts in algorithms and data structures, emphasizing their role in computational problem-solving.This course introduces key concepts in algorithms and data structures, emphasizing their role in computational problem-solving.This course introduces key concepts in algorithms and data structures, emphasizing their role in computational problem-solving.This course introduces key concepts in algorithms and data structures, emphasizing their role in computational problem-solving.This course introduces key concepts in algorithms and data structures, emphasizing their role in computational problem-solving.This course introduces key concepts in algorithms and data structures, emphasizing their role in computational problem-solving.This course introduces key concepts in algorithms and data structures, emphasizing their role in computational problem-solving.This course introduces key concepts in algorithms and data structures, emphasizing their role in computational problem-solving.This course introduces key concepts in algorithms and data structures, emphasizing their role in computational problem-solving.This course introduces key concepts in algorithms and data structures, emphasizing their role in computational problem-solving.This course introduces key concepts in algorithms and data structures, emphasizing their role in computational problem-solving.This course introduces key concepts in algorithms and data structures, emphasizing their role in computational problem-solving.This course introduces key concepts in algorithms and data structures, emphasizing their role in computational problem-solving.</h5>

                
                </section >
                <section className='Cheader'>
                <h3 className='Ch1'>DeadLine</h3>
                <h5>22/11/2024</h5>
                </section>
              </div>
            </div>

            <div id="Lectures" className="Ctabcontent">


            {courses.map((course, index) => (
            <div key={index} className='CLecture1'>
              <div className='Ctitle'>
              <a href="#" target="_blank" className='Clink' rel="noopener noreferrer">Lecture title: {course.lecture}</a>
              <button className='CTeacBut'>Delete</button>
              </div>
              <h6 className='Ch6'>Description:</h6>
              <p>{course.description}</p>
              <h6 className='Ch6'>DeadLine: {
                    new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }).format(new Date(course.deadLine))
                    }</h6>
            </div>
          ))}      
            </div>

            <div id="Announcement" className="Ctabcontent">
            <div className='CLecture1'  >
            <div className='Ctitle'>
              <h6 className='Ch6'>Announcement:</h6>            
              <button className='CTeacBut'>Delete</button>
            </div>
            <p className='Cp'>In this video, we delve into the fascinating world of Greedy Algorithms, a powerful and intuitive paradigm in computer science. Greedy algorithms make locally optimal choices at each stage with the hope of finding a global optimum. Join us on this journey as we demystify the core principles behind Greedy Algorithms, explore real-world applications, and analyze their efficiency.</p>
            </div>
            </div>
            <div id="Quizzes" className="Ctabcontent">
            <h3>Quizzes</h3>
            </div>
        </div>
        </div>
    </div>

  );
}

export default Course;