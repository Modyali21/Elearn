import React, { useEffect, useState } from 'react'
import './StudentProfile.css'
import { ProfileImage, UserInfo, EnrolledCourses } from '../index'
import axios from 'axios'
import { SERVER_URL } from '../../constants'
function getRole(page) {
    if (page == 1) {
        return "student"
    } else {
        return "instructor"
    }
}
const StudentProfile = (props) => {
    const [studentData, setStudentData] = useState()

    useEffect(() => {
        console.log(props.user.email)
        console.log(props.user.password)
        axios.get(SERVER_URL + '/myprofile', {
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
    }, []);
    return (
        <div>
            <ProfileImage name={`${studentData?.firstName} ${studentData?.lastName}`} role={getRole(props.user.page)} page={props.user.page} />
            <UserInfo information={
                {
                    name: `${studentData?.firstName} ${studentData?.lastName} `,
                    dateofbirth: studentData?.birthDate,
                    phone: studentData?.phone,
                    school: studentData?.school,
                    degree: studentData?.degree
                }
            } user={props.user} />
            {props.user.page == 1 ? <EnrolledCourses /> : <></>}

        </div>
    )
}
export default StudentProfile;
