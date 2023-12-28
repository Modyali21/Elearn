import React from 'react'
import { Link } from 'react-router-dom';
import "./UserInfo.css"

const UserInfo = (props) => {
    return (
        <div className='user-info-container container'>

            <div className='userinfo' id="user-info" >
                <section id='user'>USER INFORMATION</section>
                <div className='info-container'>
                    <ul>
                        <li >Name: <span>{props.information.name}</span></li>
                        <li >Date of Birth: <span>{props.information.dateofbirth}</span></li>
                        <li >Phone: <span>{props.information.phone}</span></li>
                        <li >School: <span>{props.information.school}</span></li>
                        <li >Degree: <span>{props.information.degree}</span></li>
                    </ul>
                </div>
                <div className='info-container'>
                    {props.user.page === 0 || props.user.page === 3 ? (
                        <Link to={'/admin'}><button className='btn btnn my-3'>Go to admin page</button></Link>
                    ): <></>}
                </div>
            </div>
        </div>
        
    )
}
export default UserInfo;
