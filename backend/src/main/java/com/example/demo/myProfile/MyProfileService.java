package com.example.demo.myProfile;

import com.example.demo.config.CustomUserDetails;
import com.example.demo.instructor.Instructor;
import com.example.demo.instructor.InstructorService;
import com.example.demo.student.Student;
import com.example.demo.student.StudentService;
import com.example.demo.systemUser.SystemUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Collections;
import java.util.Optional;
@Service
public class MyProfileService {

    @Autowired
    private StudentService studentservice;
    @Autowired
    private InstructorService instructorservice;



    public ProfileInfoDTO showProfileData(CustomUserDetails userdetails){
        Optional<Student> user = studentservice.findByEmail(userdetails.getUsername());
        ProfileInfoDTO myprofileinfo = new ProfileInfoDTO();
           if(user.isPresent()){
             myprofileinfo.fill(user.get());

             return myprofileinfo;

           }

            Optional<Instructor> user1 = instructorservice.findByEmail(userdetails.getUsername());
            if(user1.isPresent()){
                myprofileinfo.fill(user1.get());
                 return myprofileinfo; }

                return null;




    }


    public  boolean edit(EditFormDTO data,String email){





           Optional<Student> records = studentservice.findByEmail(email);



           if(records.isPresent()){

               if(!(instructorservice.emailTaken(data.getEmail())||studentservice.emailTaken(data.getEmail()))){
                   records.get().setEmail(data.getEmail());



               }
               else{
                   // Email taken
                   return false;
               }
           if(data.getBirthDate()!=null){
               records.get().setBirthDate(data.getBirthDate());



           }




           if(data.getPhone()!=null){
               records.get().setPhone(data.getPhone());


           }
           if(data.getSchool()!=null){
               records.get().setSchool(data.getSchool());


           }
           if(data.getDegree()!=null){
               records.get().setDegree(data.getDegree());


           }
           if(data.getFirstName()!=null){
               records.get().setFirstName(data.getFirstName());


           }
           if(data.getLastName()!=null){
               records.get().setLastName(data.getLastName());


           }

           studentservice.saveUser(records.get());}







       else{
           Optional<Instructor> recordi = instructorservice.findByEmail(email);
           if(recordi.isPresent()){

               if(!(instructorservice.emailTaken(data.getEmail())||studentservice.emailTaken(data.getEmail()))){
                   recordi.get().setEmail(data.getEmail());



               }
               // Email is taken
               else return false;

               if(data.getBirthDate()!=null){
                   recordi.get().setBirthDate(data.getBirthDate());




               }




               if(data.getPhone()!=null){
                   recordi.get().setPhone(data.getPhone());



               }
               if(data.getSchool()!=null){
                   recordi.get().setSchool(data.getSchool());


               }
               if(data.getDegree()!=null){
                   recordi.get().setDegree(data.getDegree());


               }
               if(data.getFirstName()!=null){
                   recordi.get().setFirstName(data.getFirstName());


               }
               if(data.getLastName()!=null){
                   recordi.get().setLastName(data.getLastName());


               }

               instructorservice.saveUser(recordi.get());}






       }
       return true;












    }



}
