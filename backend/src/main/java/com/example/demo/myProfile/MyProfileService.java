package com.example.demo.myProfile;

import com.example.demo.config.CustomUserDetails;
import com.example.demo.instructor.Instructor;
import com.example.demo.instructor.InstructorService;
import com.example.demo.student.Student;
import com.example.demo.student.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyProfileService {

    @Autowired
    private StudentService studentservice;
    @Autowired
    private InstructorService instructorservice;


    public ProfileInfoDTO showProfileData(CustomUserDetails userdetails) {
        try {

            Student user = studentservice.findByEmail(userdetails.getUsername());
            ProfileInfoDTO myprofileinfo = new ProfileInfoDTO();
            myprofileinfo.fill(user);
            return myprofileinfo;
        } catch (UsernameNotFoundException e) {
            Instructor user1 = instructorservice.findByEmail(userdetails.getUsername());
            ProfileInfoDTO myprofileinfo = new ProfileInfoDTO();
            myprofileinfo.fill(user1);
            return myprofileinfo;
        }
    }


    public boolean edit(EditFormDTO data, String email) {

        try {
            Student records = studentservice.findByEmail(email);
            if (data.getEmail() != null) {
                if (!(instructorservice.emailTaken(data.getEmail()) ||
                        studentservice.emailTaken(data.getEmail()) ||
                        data.getEmail().equals("admin@admin.com"))) {
                    records.setEmail(data.getEmail());

                } else {
                    return false;
                }
            }
            if (data.getBirthDate() != null) {
                records.setBirthDate(data.getBirthDate());


            }


            if (data.getPhone() != null) {
                records.setPhone(data.getPhone());


            }
            if (data.getSchool() != null) {
                records.setSchool(data.getSchool());


            }
            if (data.getDegree() != null) {
                records.setDegree(data.getDegree());


            }
            if (data.getFirstName() != null) {
                records.setFirstName(data.getFirstName());


            }
            if (data.getLastName() != null) {
                records.setLastName(data.getLastName());


            }

            studentservice.saveUser(records);
            return true;
        } catch (UsernameNotFoundException e) {
            Instructor recordi = instructorservice.findByEmail(email);
            if (data.getEmail() != null) {
                if (!(instructorservice.emailTaken(data.getEmail()) ||
                        studentservice.emailTaken(data.getEmail()) ||
                        data.getEmail().equals("admin@admin.com"))) {
                    recordi.setEmail(data.getEmail());

                } else {
                    return false;
                }
            }

            if (data.getBirthDate() != null) {
                recordi.setBirthDate(data.getBirthDate());


            }


            if (data.getPhone() != null) {
                recordi.setPhone(data.getPhone());


            }
            if (data.getSchool() != null) {
                recordi.setSchool(data.getSchool());


            }
            if (data.getDegree() != null) {
                recordi.setDegree(data.getDegree());


            }
            if (data.getFirstName() != null) {
                recordi.setFirstName(data.getFirstName());


            }
            if (data.getLastName() != null) {
                recordi.setLastName(data.getLastName());


            }

            instructorservice.saveUser(recordi);
            return true;
        }


    }


}
