import React from 'react'
import "./EnrolledCourses.css"
const EnrolledCourses = () => {
    return (
        <div className='userinfo' id="enrolled-courses">
            <section id='user'>ENROLLED COURSES</section>
            <ul>
                <li>
                    <span>Database Course</span>
                    <div className='btns'>
                        <button className="btn cbtns" id="see-course">See course</button>
                        <button className="btn cbtns">See grades</button>
                    </div>
                </li>
                <li>
                    <span>Neumerical Course</span>
                    <div className='btns'>
                        <button className="btn cbtns">See course</button>
                        <button className="btn cbtns">See grades</button>
                    </div>
                    
                </li>
                <li>
                    <span>Software Engineering Course</span>
                    <div className='btns'>
                        <button className="btn cbtns">See course</button>
                        <button className="btn cbtns">See grades</button>
                    </div>
                </li>
            </ul>
            
        </div>
    )
}
export default EnrolledCourses;
