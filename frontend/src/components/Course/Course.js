import './Course.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { SERVER_URL } from "../../constants"

function Course(props) {
  var teacher = 1;
  function trigger(evt, cityName) {
    var i, tabcontent, tablinks, cityElement;
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
    if (teacher == 1) {
      // Get elements with the class name "CTeacBut2" (returns a collection)
      var elements = document.getElementsByClassName("CTeacBut2");
    
      // Loop through the collection and set the display style for each element
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "flex";
      }
    }
  }
  const [info, setInfo] = useState({
    courseCode: '',
    anouncementName: '',
    lectureName: '',
  })
  const [Lecture, setLectures] = useState([]);
  const [Anouncement, setAnouncements] = useState([]);
  const [Details, setDetails] = useState([]);
  const [Total, setTotal] = useState([]);
  async function DeleteLec(e,name) {
    // e.preventDefault();
    info.lectureName = name;
    console.log(info);
    try {
      let email = props.user.email
      let password = props.user.password
      axios.post(SERVER_URL + '/course/deleteLecture', info, {
        auth: {
          username: email,
          password: password
        }
      }).then(response => {
        setLectures(response.data);
      })
    }
    catch {
      alert("Error");
    }

  };
  async function DeleteAnno(e,name) {
    // e.preventDefault();
    info.anouncementName = name;
    console.log(info);
    try {
      let email = props.user.email
      let password = props.user.password
      axios.post(SERVER_URL + '/course/deleteAnn', info, {
        auth: {
          username: email,
          password: password
        }
      }).then(response => {
        setAnouncements(response.data);
      })
    }
    catch {
      alert("Error");
    }

  };
  
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
          <img className='Clogo' src={require('../../images/e-learn.jpg')} alt='logo' style={{ width: '100px' }} />
          <h2 className='Ch2'>E-Learning Platform</h2>

        </div>
        <div className='Clinks'>
          <a href={"/profile"} style={{ textDecoration: "none" }} className='ECbut'>Home</a>
          <a href={"/courseenroll"} style={{ textDecoration: "none" }} className='ECbut'>Available Courses</a>
          <a href={"/updateprofile"} style={{ textDecoration: "none" }} className='ECbut'>Edit profile</a>
          <a href={"/"} style={{ textDecoration: "none" }} className='ECbut'>Log out</a>

        </div>
      </nav>
      <div className='Ctotal'>
        <div className="Ctab ">
          <button className="tablinks" onClick={(event) => trigger(event, 'Details')}>Details</button>
          <button className="tablinks" onClick={(event) => trigger(event, 'Lectures')}>Lectures</button>
          <button className="tablinks" onClick={(event) => trigger(event, 'Announcement')}>Announcement</button>
        </div>
        <div className='Cdata'>
          <div id="Details" style={{ color: "white" }} className="Ctabcontent ">
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
            <div className='CAdd'>
              <a href='/makelecture' style={{textDecoration:"none"}} className='CTeacBut2'><span style={{marginRight:"8px"}} class="plus-icon">&#43;</span> Add Lecture</a>
            </div>
            {Lecture.map((lecture, index) => (
              <div key={index} className='CLecture1'>
                <div className='Ctitle'>
                  <a href={lecture.link} target="_blank" className='Clink' rel="noopener noreferrer">Lecture title: {lecture.name}</a>
                  <button className='CTeacBut' onClick={(event) => DeleteLec(event, lecture.name)}>Delete</button>
                </div>
                <h6 className='Ch6'>Description:</h6>
                <p>{lecture.description}</p>
              </div>
            ))}
          </div>

          <div id="Announcement" className="Ctabcontent">
            <div className='CAdd'>
              <a href='/makeannoun' style={{textDecoration:"none"}} className='CTeacBut2'><span style={{marginRight:"8px"}} class="plus-icon">&#43;</span> Add Announcement</a>
            </div>
            {Anouncement.map((anouncement, index) => (
              <div key={index} className='CLecture1'>
                <div className='Ctitle'>
                  <h2 target="_blank" className='Clink'>Announcement title: {anouncement.name}</h2>
                  <button className='CTeacBut' onClick={(event) => DeleteAnno(event, anouncement.name)}>Delete</button>
                </div>
                <h6 className='Ch6'>Description:</h6>
                <p>{anouncement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
}

export default Course;