import './CourseEnroll.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CourseEnroll() {
    function myFunction() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
      }
    return (
    <div className='ECbody'>
        <nav className='ECnav'>
        <div className="text-center EClog">
            <img className='EClogo' src={require('../../images/e-learn.jpg')} alt='logo' style={{width: '100px'}} />
            <h2 className='ECh2'>E-Learning Platform</h2>
        </div>
        <div className='EClinks'>
        <Link to={"/profile"} style={{textDecoration:"none"}}  className='ECbut'>Home</Link>
        <Link to={"/updateprofile"} style={{textDecoration:"none"}}  className='ECbut'>Edit profile</Link>
        <Link to={"/"} style={{textDecoration:"none"}}  className='ECbut'>Log out</Link>

        </div>
        </nav>
        <div className='ECtotal'>
        <div className="ECtab ">
            <h6 className='ECname'>Available Courses:</h6>
            <form className='ECsearcgbar'>
            <input type="text" placeholder="Course Title" className='ECsearch' name="search"/>
            <input type="text" placeholder="Instructor Name" className='ECsearch' name="search"/>
            <button type="submit" className='ECSebut'><img className='ECsearchlogo' src={require('../../images/icons8-search-50.png')} alt='searchlogo' style={{width: '25px'}} /> Search</button>      
            <select className='ECSebut' placeholder='None'id='filter'  name="filter" required>
                    <option value="" disabled selected>None</option>
                    <option value="student">1-Cousre Title</option>
                    <option value="associate">2-Instructor Name</option>
                    <option value="bachelor">1 and 2</option>
                    <option value="certificate">1 or 2</option>
            </select>

           </form>
        </div>
        <div className='ECdata'>
            <div id="Courses" className="ECtabcontent">
            <div className='ECCourses'  >
                <div className='ECtitle'>
                <a href="/course" target="_blank" className='Clink' rel="noopener noreferrer">Cousre Title: ALgorithms</a>
                <div className='ECreg'>
                    <button className='ECTeacBut1'>Register</button>
                </div>
                </div>
                <h6 className='ECh6'>Instructor Name : Ahmed Mousa</h6>
                <h6 className='ECh6'>Description:</h6>
                <p>In this video, we delve into the fascinating world of Greedy Algorithms, a powerful and intuitive paradigm in computer science. Greedy algorithms make locally optimal choices at each stage with the hope of finding a global optimum. Join us on this journey as we demystify the core principles behind Greedy Algorithms, explore real-world applications, and analyze their efficiency.</p>
                <h6 className='ECh6'>DeadLine: 12/12/2024</h6>
            </div>
            <div className='ECCourses'  >
                <div className='ECtitle'>
                <a href="/course" target="_blank" className='Clink' rel="noopener noreferrer">Cousre Title: ALgorithms</a>
                <div className='ECreg'>
                    <button className='ECTeacBut1'>Register</button>
                </div>
                </div>
                <h6 className='ECh6'>Instructor Name : Ahmed Mousa</h6>
                <h6 className='ECh6'>Description:</h6>
                <p>In this video, we delve into the fascinating world of Greedy Algorithms, a powerful and intuitive paradigm in computer science. Greedy algorithms make locally optimal choices at each stage with the hope of finding a global optimum. Join us on this journey as we demystify the core principles behind Greedy Algorithms, explore real-world applications, and analyze their efficiency.</p>
                <h6 className='ECh6'>DeadLine: 12/12/2024</h6>
            </div>
            <div className='ECCourses'  >
                <div className='ECtitle'>
                <a href="/course" target="_blank" className='Clink' rel="noopener noreferrer">Cousre Title: ALgorithms</a>
                <div className='ECreg'>
                    <button className='ECTeacBut1'>Register</button>
                </div>
                </div>
                <h6 className='ECh6'>Instructor Name : Ahmed Mousa</h6>
                <h6 className='ECh6'>Description:</h6>
                <p>In this video, we delve into the fascinating world of Greedy Algorithms, a powerful and intuitive paradigm in computer science. Greedy algorithms make locally optimal choices at each stage with the hope of finding a global optimum. Join us on this journey as we demystify the core principles behind Greedy Algorithms, explore real-world applications, and analyze their efficiency.</p>
                <h6 className='ECh6'>DeadLine: 12/12/2024</h6>
            </div>
            <div className='ECCourses'  >
                <div className='ECtitle'>
                <a href="/course" target="_blank" className='Clink' rel="noopener noreferrer">Cousre Title: ALgorithms</a>
                <div className='ECreg'>
                    <button className='ECTeacBut1'>Register</button>
                </div>
                </div>
                <h6 className='ECh6'>Instructor Name : Ahmed Mousa</h6>
                <h6 className='ECh6'>Description:</h6>
                <p>In this video, we delve into the fascinating world of Greedy Algorithms, a powerful and intuitive paradigm in computer science. Greedy algorithms make locally optimal choices at each stage with the hope of finding a global optimum. Join us on this journey as we demystify the core principles behind Greedy Algorithms, explore real-world applications, and analyze their efficiency.</p>
                <h6 className='ECh6'>DeadLine: 12/12/2024</h6>
            </div>
           
          </div>

        </div>
        </div>
    </div>

  );
}

export default CourseEnroll;