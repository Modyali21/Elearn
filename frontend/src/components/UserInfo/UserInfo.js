import React from 'react'
import "./UserInfo.css"

const UserInfo = (props) => {
    return (
        <div className='user-info-container'>

            <div className='userinfo' >
                <section id='user'>USER INFORMATION</section>
                <div className='info-container'>
                    <ul>
                        <li >Name: <span>{props.information.name}</span></li>
                        <li >Date of Birth: <span>{props.information.dateofbirth}</span></li>
                        <li >Gende: <span>{props.information.gender}</span></li>
                        <li >School: <span>{props.information.school}</span></li>
                        <li >Degree: <span>{props.information.degree}</span></li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}
export default UserInfo;
