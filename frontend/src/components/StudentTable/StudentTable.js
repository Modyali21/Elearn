import { useState } from 'react'
import './StudentTable.css'
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";

const StudentTable = () => {
    const [info,setInfo] = useState({
        firstName : '',
        lastName : '',
        email: '',
        password : '',
        phone: '',
        school: '',
        degree: '',
        ssn : '',
        birthDate : '',
        sortby : '',
        tagmode : ''
    })
    function handleChange(event){
        setInfo({...info,[event.target.name]:event.target.value})
    }

    function handleSubmit(){

    }

    let studentInfo = [
        {studentID : '1', firstName : 'Mohamed', lastName : 'Aly',email : 'malyhas@gmail.com',phone : '01551666660', school : 'Zahran', Degree : 'Student', ssn : '30105210201271', birthdate : '2001-5-21',admin : 'True'},
        {studentID : '1', firstName : 'Mohamed', lastName : 'Aly',email : 'malyhas@gmail.com',phone : '01551666660', school : 'Zahran', Degree : 'Student', ssn : '30105210201271', birthdate : '2001-5-21',admin : 'True'},
        {studentID : '1', firstName : 'Mohamed', lastName : 'Aly',email : 'malyhas@gmail.com',phone : '01551666660', school : 'Zahran', Degree : 'Student', ssn : '30105210201271', birthdate : '2001-5-21',admin : 'True'},
        {studentID : '1', firstName : 'Mohamed', lastName : 'Aly',email : 'malyhas@gmail.com',phone : '01551666660', school : 'Zahran', Degree : 'Student', ssn : '30105210201271', birthdate : '2001-5-21',admin : 'True'},
        {studentID : '1', firstName : 'Mohamed', lastName : 'Aly',email : 'malyhas@gmail.com',phone : '01551666660', school : 'Zahran', Degree : 'Student', ssn : '30105210201271', birthdate : '2001-5-21',admin : 'True'},
        {studentID : '1', firstName : 'Mohamed', lastName : 'Aly',email : 'malyhas@gmail.com',phone : '01551666660', school : 'Zahran', Degree : 'Student', ssn : '30105210201271', birthdate : '2001-5-21',admin : 'True'},
        {studentID : '1', firstName : 'Mohamed', lastName : 'Aly',email : 'malyhas@gmail.com',phone : '01551666660', school : 'Zahran', Degree : 'Student', ssn : '30105210201271', birthdate : '2001-5-21',admin : 'True'},
        {studentID : '1', firstName : 'Mohamed', lastName : 'Aly',email : 'malyhas@gmail.com',phone : '01551666660', school : 'Zahran', Degree : 'Student', ssn : '30105210201271', birthdate : '2001-5-21',admin : 'True'}
    ]

    return (
        <div className='container'>
            <div className='filter-find'>
                <div className='find'>
                    <input type={'text'} placeholder='Student first name' onChange={handleChange}/>
                </div>
                <div className='find'>
                    <input type={'text'} placeholder='Student last name' onChange={handleChange}/>
                </div>
                <div className='find'>
                    <input type={'text'} placeholder='Email' onChange={handleChange}/>
                </div>
                <div className='find'>
                    <input type={'text'} placeholder='Student phone' onChange={handleChange}/>
                </div>
                <div className='find'>
                    <input type={'text'} placeholder='School' onChange={handleChange}/>
                </div>
                <div className='find'>
                    <input type={'text'} placeholder='Degree' onChange={handleChange}/>
                </div>
                <div className='find'>
                    <input type={'text'} placeholder='Student SSN' onChange={handleChange}/>
                </div>
                <div className='find'>
                    <input  type="date" id="birth" placeholder='Birthdate' name="birthDate" max="2030-12-31" required onChange={handleChange}/>
                </div>
                <div className='find'>
                    <select onChange={handleChange}>
                        <option disabled selected>Sort by</option>
                        <option value="fname">First Name</option>
                        <option value="lname">Last Name</option>
                        <option value="degree">Degree</option>
                        <option value="school">School</option>
                        <option value="bithdate">Birthdate</option>
                    </select>
                </div>
                <div className='find'>
                    <select onChange={handleChange}>
                        <option disabled selected>Tags mode</option>
                        <option value="and">AND</option>
                        <option value="or">OR</option>
                    </select>
                </div>
                <button className='btn btn-dark button' onSubmit={handleSubmit}>Find/Sort</button>
            </div>

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
                    {studentInfo.map((student) =>(
                        <tr>
                            <td>{student.studentID}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.email}</td>
                            <td>{student.phone}</td>
                            <td>{student.school}</td>
                            <td>{student.Degree}</td>
                            <td>{student.ssn}</td>
                            <td>{student.birthdate}</td>
                        </tr>
                ))}
                </tbody>
            </table>
            <div className='pages'>
                <button className='btn btn-dark page-back page'>Previous <GrCaretPrevious/></button>
                <button className='btn btn-dark page-next page'>Next <GrCaretNext /></button>
            </div>

        </div>
    )
}

export default StudentTable;
