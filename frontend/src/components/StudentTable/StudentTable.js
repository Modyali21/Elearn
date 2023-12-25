import { useEffect, useState } from 'react'
import './StudentTable.css'
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";
import axios from 'axios';
import {SERVER_URL} from '../../constants'

const StudentTable = () => {

    const [counter,setCounter] = useState(0)
    const [info,setInfo] = useState({
        firstName : '',
        lastName : '',
        email: '',
        phone: '',
        school: '',
        degree: '',
        ssn : '',
        birthDate : '',
        firstResult : counter,
        maxResult: 1,
        sortby : '',
        descending : false,
        tagmode : false
    })
    const [studentData,setStudentData] = useState([])
    function handleChange(event){
        if(event.target.name === 'tagmode' && event.target.value === 'or' )
            setInfo({...info,[event.target.name]: true})
        else if(event.target.name === 'tagmode' && event.target.value === 'and')
            setInfo({...info,[event.target.name]: false})
        else
            setInfo({...info,[event.target.name]: event.target.value})
    }

    function handleClick(){
        axios.post(SERVER_URL + '/admin/students', info, {
            auth: {
                username: email,
                password: password
            }
            })
            .then(response => {
                setStudentData(response.data)
            })
            .catch(error => {
                // Handle errors here
                console.error('Error:', error);
            });
    }
    const email = 'admin@admin.com'
    const password = 'admin'
    useEffect(() => {
        axios.post(SERVER_URL + '/admin/students', {}, {
            auth: {
                username: email,
                password: password
            }
            })
            .then(response => {
                console.log(response.data)
                setStudentData(response.data)
            })
            .catch(error => {
                // Handle errors here
                console.error('Error:', error);
            });
            
        }, []);
        
        
        function handlePrevious(){
            
        }
        function handleNext(){
            
        }


    return (
        <div className='container'>
            <div className='filter-find'>
                <div className='find'>
                    <input type={'text'} name='firstName' placeholder='Student first name' onChange={handleChange}/>
                </div>
                <div className='find'>
                    <input type={'text'} name='lastName' placeholder='Student last name' onChange={handleChange}/>
                </div>
                <div className='find'>
                    <input type={'text'} name='email' placeholder='Email' onChange={handleChange}/>
                </div>
                <div className='find'>
                    <input type={'text'} name='phone' placeholder='Student phone' onChange={handleChange}/>
                </div>
                <div className='find'>
                    <input type={'text'} name='school' placeholder='School' onChange={handleChange}/>
                </div>
                <div className='find'>
                <select placeholder='Degree' name="degree" onChange={handleChange}>
                    <option value="" disabled selected>Degree</option>
                    <option value="student">Student</option>
                    <option value="associate">Associate</option>
                    <option value="bachelor">Bachelor</option>
                    <option value="certificate">Certificate</option>
                    <option value="diploma">Diploma</option>
                    <option value="doctorate">Doctorate</option>
                    <option value="engineer">Engineer's Degree</option>
                    <option value="master">Master</option>
                    <option value="professional">Professional Degree</option>
                    <option value="specialist">Specialist Degree</option>
                    <option value="vocational">Vocational</option>
                    </select>
                </div>
                <div className='find'>
                    <input type={'text'} name='ssn' placeholder='Student SSN' onChange={handleChange}/>
                </div>
                <div className='find'>
                    <input  type="date" name="birthDate" placeholder='Birthdate'  max="2030-12-31" required onChange={handleChange}/>
                </div>
                <div className='find'>
                    <select name='sortby' onChange={handleChange}>
                        <option disabled selected>Sort by</option>
                        <option value="fname">First Name</option>
                        <option value="lname">Last Name</option>
                        <option value="degree">Degree</option>
                        <option value="school">School</option>
                        <option value="bithdate">Birthdate</option>
                    </select>
                </div>
                <div className='find'>
                    <select name='tagmode' onChange={handleChange}>
                        <option disabled selected>Tags mode</option>
                        <option value="and">AND</option>
                        <option value="or">OR</option>
                    </select>
                </div>
                <button className='btn btn-dark button' onClick={handleClick}>Find/Sort</button>
            </div>

            <div className='container all'>
                <table className="table-container container">
                    <thead>
                        <tr>
                            <th><h1>Student ID</h1></th>
                            <th><h1>First Name</h1></th>
                            <th><h1>Last Name</h1></th>
                            <th><h1>Email</h1></th>
                            <th><h1>Phone</h1></th>
                            <th><h1>School</h1></th>
                            <th><h1>Degree</h1></th>
                            <th><h1>SSN</h1></th>
                            <th><h1>Birthdate</h1></th>
                        </tr>
                    </thead>

                    <tbody>
                        {studentData.map((student) =>(
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.email}</td>
                                <td>{student.phone}</td>
                                <td>{student.school}</td>
                                <td>{student.degree}</td>
                                <td>{student.ssn}</td>
                                <td>{student.birthDate}</td>
                            </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            
            <div className='pages'>
                <button className='btn btn-dark page-back page' onClick={handlePrevious}>Previous <GrCaretPrevious/></button>
                <button className='btn btn-dark page-next page' onClick={handleNext}>Next <GrCaretNext /></button>
            </div>

        </div>
    )
}

export default StudentTable;
