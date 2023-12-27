import React from 'react'
import "./EnrolledCourses.css"

const EnrolledCourses = (props) => {
    function handleCourse(id){
        // alert("id:"+id);
        props.courseFun(id);
    }
    return (
        
        
            <div className='container userinfo' id="enrolled-courses">
                <section id='user'>ENROLLED COURSES</section>
                <ul>
                    <li>
                        <span>Database Course</span>
                        <div className='btns'>
                            <button className="btn cbtns" id="see-course" onClick={handleCourse("1")}>See course</button>
                            <button className="btn cbtns">See Anouncements</button>
                        </div>
                    </li>
                    <li>
                        <span>Neumerical Course</span>
                        <div className='btns'>
                            <button className="btn cbtns">See course</button>
                            <button className="btn cbtns">See Anouncements</button>
                        </div>
                        
                    </li>
                    <li>
                        <span>Software Engineering Course</span>
                        <div className='btns'>
                            <button className="btn cbtns">See course</button>
                            <button className="btn cbtns">See Anouncements</button>
                        </div>
                    </li>
                </ul>
        </div>
            
    )
}
export default EnrolledCourses;
