package com.example.demo.myProfile;

import com.example.demo.instructor.Instructor;
import com.example.demo.instructor.InstructorRepository;
import com.example.demo.student.Student;
import com.example.demo.student.StudentRepository;
import com.example.demo.systemUser.SystemUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.Collections;
import java.util.Optional;
@Service

public class MyProfileService {

    @Autowired
    private StudentRepository repos;
    @Autowired
    private InstructorRepository repoi;
    private SystemUser myprofileinfo;


    public SystemUser showProfileData(String email){
        Optional<Student> user = repos.findByEmail(email);
           if(user.isPresent()){
             myprofileinfo= user.get();
             return user.get();

           }

            Optional<Instructor> user1 = repoi.findByEmail(email);
            if(user1.isPresent()){
            myprofileinfo= user1.get();
            return user1.get();}

                return null;




    }


    public SystemUser edit(EditFormDTO data){

       if( myprofileinfo.getRole().equals(Collections.singletonList("ROLE_STUDENT"))){
           Optional<Student> record = repos.findByEmail(myprofileinfo.getEmail());
           if(record.isPresent()){

               if(!repos.existsByEmail(data.getEmail())){
                   record.get().setEmail(data.getEmail());
                   myprofileinfo.setEmail(data.getEmail());


               }
               else{
                   return null;
               }
           if(data.getBirthDate()!=null){
               record.get().setBirthDate(data.getBirthDate());
               myprofileinfo.setBirthDate(data.getBirthDate());


           }




           if(data.getPhone()!=null){
               record.get().setPhone(data.getPhone());
               myprofileinfo.setPhone(data.getPhone());

           }
           if(data.getSchool()!=null){
               record.get().setSchool(data.getSchool());
               myprofileinfo.setSchool(data.getSchool());

           }
           if(data.getDegree()!=null){
               record.get().setDegree(data.getDegree());
               myprofileinfo.setDegree(data.getDegree());

           }
           if(data.getFirstName()!=null){
               record.get().setFirstName(data.getFirstName());
               myprofileinfo.setFirstName(data.getFirstName());

           }
           if(data.getLastName()!=null){
               record.get().setLastName(data.getLastName());
               myprofileinfo.setLastName(data.getLastName());

           }

           repos.save(record.get());}






       }
       else{
           Optional<Instructor> record = repoi.findByEmail(myprofileinfo.getEmail());
           if(record.isPresent()){

               if(!repoi.existsByEmail(data.getEmail())){
                   record.get().setEmail(data.getEmail());
                   myprofileinfo.setEmail(data.getEmail());


               }
               else return null;

               if(data.getBirthDate()!=null){
                   record.get().setBirthDate(data.getBirthDate());
                   myprofileinfo.setBirthDate(data.getBirthDate());



               }




               if(data.getPhone()!=null){
                   record.get().setPhone(data.getPhone());
                   myprofileinfo.setPhone(data.getPhone());


               }
               if(data.getSchool()!=null){
                   record.get().setSchool(data.getSchool());
                   myprofileinfo.setSchool(data.getSchool());

               }
               if(data.getDegree()!=null){
                   record.get().setDegree(data.getDegree());
                   myprofileinfo.setDegree(data.getDegree());

               }
               if(data.getFirstName()!=null){
                   record.get().setFirstName(data.getFirstName());
                   myprofileinfo.setFirstName(data.getFirstName());

               }
               if(data.getLastName()!=null){
                   record.get().setLastName(data.getLastName());
                   myprofileinfo.setLastName(data.getLastName());

               }

               repoi.save(record.get());}






       }
       return myprofileinfo;












    }



}
