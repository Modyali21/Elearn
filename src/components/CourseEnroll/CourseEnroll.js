import './CourseEnroll.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CourseEnroll() {

    return (
    <div className='Cbody'>
        <nav className='Cnav'>
        <div className="text-center Clog">
            <img className='Clogo' src={require('../../images/e-learn.jpg')} alt='logo' style={{width: '100px'}} />
        </div>
        <div className='Clinks'>
        <Link to={"/profile"} style={{textDecoration:"none"}}  className='Cbut'>Home</Link>
        <Link to={"/updateprofile"} style={{textDecoration:"none"}}  className='Cbut'>Edit profile</Link>
        <Link to={"/"} style={{textDecoration:"none"}}  className='Cbut'>Log out</Link>

        </div>
        </nav>
        <div className='Ctotal'>
        <div className="Ctab ">
            <input type="text" placeholder="Search.." className='Csearch' name="search"/>
            <button type="submit" className='CSebut'>Search</button>      
        </div>
        <div className='Cdata'>
            <div id="Details" style={{color:"white"}} className="tabcontent">
                <header>
                <h1>Algorithms and Data Structures:</h1>
                <p>An exploration of fundamental principles in algorithm design and analysis.</p>
                </header>

                <section>
                <h2>Course Overview:</h2>
                <p>This course introduces key concepts in algorithms and data structures, emphasizing their role in computational problem-solving.</p>
                </section>

                <section>
                <h2>Key Topics:</h2>
                <ul>
                <li>Algorithm Analysis</li>
                <li>Algorithm Design Techniques</li>
                <li>Data Structures</li>
                <li>Sorting and Searching</li>
                <li>Advanced Topics</li>
                </ul>
                </section>

                <section>
                <h2>Course Objectives:</h2>
                <ul>
                <li>Understand Algorithmic Paradigms</li>
                <li>Analyze Algorithm Efficiency</li>
                <li>Implement Data Structures</li>
                <li>Solve Computational Problems</li>
                <li>Critical Thinking</li>
                <li>Real-world Applications</li>
                </ul>
                </section>

                <section>
                <h2>Assessment:</h2>
                <p>Assessment methods include programming assignments, algorithm analysis exercises, exams, and a final project.</p>
                </section>

                <section>
                <h2>Prerequisites:</h2>
                <p>A solid understanding of programming fundamentals and basic mathematical concepts is recommended.</p>
                </section>
            </div>

            <div id="Lectures" className="tabcontent">
            <div className='CLecture1'  >
            <div className='Ctitle'>
            <a href="#" target="_blank" className='Clink' rel="noopener noreferrer">Lecture title: Divide and Conquer</a>
            <button className='CTeacBut'>Delete</button>
            </div>
            <h6>Description:</h6>
            <p>In this video, we delve into the fascinating world of Greedy Algorithms, a powerful and intuitive paradigm in computer science. Greedy algorithms make locally optimal choices at each stage with the hope of finding a global optimum. Join us on this journey as we demystify the core principles behind Greedy Algorithms, explore real-world applications, and analyze their efficiency.</p>
            </div>
            <div className='CLecture1'  >
            <div className='Ctitle'>
            <a href="#" target="_blank" className='Clink' rel="noopener noreferrer">Lecture title: Divide and Conquer</a>
            <button className='CTeacBut'>Delete</button>
            </div>
            <h6>Description:</h6>
            <p>In this video, we delve into the fascinating world of Greedy Algorithms, a powerful and intuitive paradigm in computer science. Greedy algorithms make locally optimal choices at each stage with the hope of finding a global optimum. Join us on this journey as we demystify the core principles behind Greedy Algorithms, explore real-world applications, and analyze their efficiency.</p>
            </div>
            <div className='CLecture1'  >
            <div className='Ctitle'>
            <a href="#" target="_blank" className='Clink' rel="noopener noreferrer">Lecture title: Divide and Conquer</a>
            <button className='CTeacBut'>Delete</button>
            </div>
            <h6>Description:</h6>
            <p>In this video, we delve into the fascinating world of Greedy Algorithms, a powerful and intuitive paradigm in computer science. Greedy algorithms make locally optimal choices at each stage with the hope of finding a global optimum. Join us on this journey as we demystify the core principles behind Greedy Algorithms, explore real-world applications, and analyze their efficiency.</p>
            </div>
            <div className='CLecture1'  >
            <div className='Ctitle'>
            <a href="#" target="_blank" className='Clink' rel="noopener noreferrer">Lecture title: Divide and Conquer</a>
            <button className='CTeacBut'>Delete</button>
            </div>
            <h6>Description:</h6>
            <p>In this video, we delve into the fascinating world of Greedy Algorithms, a powerful and intuitive paradigm in computer science. Greedy algorithms make locally optimal choices at each stage with the hope of finding a global optimum. Join us on this journey as we demystify the core principles behind Greedy Algorithms, explore real-world applications, and analyze their efficiency.</p>
            </div>
            <div className='CLecture1'  >
            <div className='Ctitle'>
            <a href="#" target="_blank" className='Clink' rel="noopener noreferrer">Lecture title: Divide and Conquer</a>
            <button className='CTeacBut'>Delete</button>
            </div>
            <h6>Description:</h6>
            <p>In this video, we delve into the fascinating world of Greedy Algorithms, a powerful and intuitive paradigm in computer science. Greedy algorithms make locally optimal choices at each stage with the hope of finding a global optimum. Join us on this journey as we demystify the core principles behind Greedy Algorithms, explore real-world applications, and analyze their efficiency.</p>
            </div>
            <div className='CLecture1'  >
            <div className='Ctitle'>
            <a href="#" target="_blank" className='Clink' rel="noopener noreferrer">Lecture title: Divide and Conquer</a>
            <button className='CTeacBut'>Delete</button>
            </div>
            <h6>Description:</h6>
            <p>In this video, we delve into the fascinating world of Greedy Algorithms, a powerful and intuitive paradigm in computer science. Greedy algorithms make locally optimal choices at each stage with the hope of finding a global optimum. Join us on this journey as we demystify the core principles behind Greedy Algorithms, explore real-world applications, and analyze their efficiency.</p>
            </div>
            
                        
            </div>

            <div id="Announcement" className="tabcontent">
            <div className='CLecture1'  >
            <div className='Ctitle'>
            <h6>Description:</h6>            
            <button className='CTeacBut'>Delete</button>
            </div>
            <p>In this video, we delve into the fascinating world of Greedy Algorithms, a powerful and intuitive paradigm in computer science. Greedy algorithms make locally optimal choices at each stage with the hope of finding a global optimum. Join us on this journey as we demystify the core principles behind Greedy Algorithms, explore real-world applications, and analyze their efficiency.</p>
            </div>
            <div className='CLecture1'  >
            <div className='Ctitle'>
            <h6>Description:</h6>            
            <button className='CTeacBut'>Delete</button>
            </div>
            <p>In this video, we delve into the fascinating world of Greedy Algorithms, a powerful and intuitive paradigm in computer science. Greedy algorithms make locally optimal choices at each stage with the hope of finding a global optimum. Join us on this journey as we demystify the core principles behind Greedy Algorithms, explore real-world applications, and analyze their efficiency.</p>
            </div>
            <div className='CLecture1'  >
            <div className='Ctitle'>
            <h6>Description:</h6>            
            <button className='CTeacBut'>Delete</button>
            </div>
            <p>In this video, we delve into the fascinating world of Greedy Algorithms, a powerful and intuitive paradigm in computer science. Greedy algorithms make locally optimal choices at each stage with the hope of finding a global optimum. Join us on this journey as we demystify the core principles behind Greedy Algorithms, explore real-world applications, and analyze their efficiency.</p>
            </div>
            <div className='CLecture1'  >
            <div className='Ctitle'>
            <h6>Description:</h6>            
            <button className='CTeacBut'>Delete</button>
            </div>
            <p>In this video, we delve into the fascinating world of Greedy Algorithms, a powerful and intuitive paradigm in computer science. Greedy algorithms make locally optimal choices at each stage with the hope of finding a global optimum. Join us on this journey as we demystify the core principles behind Greedy Algorithms, explore real-world applications, and analyze their efficiency.</p>
            </div>
            <div className='CLecture1'  >
            <div className='Ctitle'>
            <h6>Description:</h6>            
            <button className='CTeacBut'>Delete</button>
            </div>
            <p>In this video, we delve into the fascinating world of Greedy Algorithms, a powerful and intuitive paradigm in computer science. Greedy algorithms make locally optimal choices at each stage with the hope of finding a global optimum. Join us on this journey as we demystify the core principles behind Greedy Algorithms, explore real-world applications, and analyze their efficiency.</p>
            </div>
            <div className='CLecture1'  >
            <div className='Ctitle'>
            <h6>Description:</h6>            
            <button className='CTeacBut'>Delete</button>
            </div>
            <p>In this video, we delve into the fascinating world of Greedy Algorithms, a powerful and intuitive paradigm in computer science. Greedy algorithms make locally optimal choices at each stage with the hope of finding a global optimum. Join us on this journey as we demystify the core principles behind Greedy Algorithms, explore real-world applications, and analyze their efficiency.</p>
            </div>

            </div>
            <div id="Quizzes" className="tabcontent">
            <h3>Quizzes</h3>
            </div>
        </div>
        </div>
    </div>

  );
}

export default CourseEnroll;