import './Course.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Course(props) {
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
      const [Lecture, setLectures] = useState([]);
      const [Anouncement, setAnouncements] = useState([]);
      const [Details, setDetails] = useState([]);
      const [Total, setTotal] = useState([]);

      // useEffect(() => {
      //   console.log(props.user.email)
      //   console.log(props.user.password)
      //   axios.get(SERVER_URL + '/course/lecture',{
      //       auth: {
      //           username: props.user.email,
      //           password: props.user.password
      //       }
      //       })
      //       .then(response => {
      //           console.log(response.data)
      //           setTotal(response.data)
      //           setLectures(Total.lectures);
      //           setAnouncements(Total.anouncements);
      //           setDetails(Total.details);
      //       })
      //       .catch(error => {
      //           console.error('Error:', error);
      //       });
      //   },[]);
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
                <h1 className='Cht'>Algorithm{Details.courseName}</h1>
                </header>

                <section className='Cheader'>
                <h3 className='Ch1'>Course Description</h3>
                <h5 className='Ch5'>The title attribute provides a tooltip message that will be displayed when users hover over the input, giving them guidance on the allowed range.{Details.description}</h5>
                </section >
                <section className='Cheader'>
                <h3 className='Ch1'>DeadLine</h3>
                <h5>22/33/44{Details.deadline}</h5>
                </section>
              </div>
            </div>

            <div id="Lectures" className="Ctabcontent">


            {Lecture.map((lecture, index) => (
            <div key={index} className='CLecture1'>
              <div className='Ctitle'>
              <a href="#" target="_blank" className='Clink' rel="noopener noreferrer">Lecture title: {lecture.name}</a>
              <button className='CTeacBut'>Delete</button>
              </div>
              <h6 className='Ch6'>Description:</h6>
              <p>{lecture.description}</p>
              <h6 className='Ch6'>Duration: {lecture.duration/60}hours {lecture.duration%60}minutes</h6>
            </div>
          ))}      
            </div>

            <div id="Announcement" className="Ctabcontent">
            {Anouncement.map((anouncement, index) => (
            <div key={index} className='CLecture1'>
              <div className='Ctitle'>
              <h6 className='Ch6'>Description:</h6>
              <button className='CTeacBut'>Delete</button>
              </div>
              <p>{anouncement.description}</p>
            </div>
          ))}  
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