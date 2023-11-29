package com.example.demo.myProfile;

import com.example.demo.instructor.Instructor;
import com.example.demo.instructor.InstructorRepository;
import com.example.demo.student.Student;
import com.example.demo.student.StudentRepository;
import com.example.demo.systemUser.SystemUser;


import java.util.Collections;
import java.util.Optional;

public class myProfileService {
    private StudentRepository repos;
    private InstructorRepository repoi;
    private SystemUser myprofileinfo;
    public void myProfileService( StudentRepository repository1, InstructorRepository repository2 ){
        this.repos = repository1;
        this.repoi= repository2;
    }

    public SystemUser showProfileData(String email){
        Optional<Student> user = repos.findByEmail(email);
        if(user.isPresent()){
            myprofileinfo= user.get();
            return user.get();

        }
        else{
            Optional<Instructor> user1 = repoi.findByEmail(email);
            if(user.isPresent()){
            myprofileinfo= user1.get();
            return user1.get();}
            else
                return null;

        }


    }


    public SystemUser edit(editformDTO data){

       if( myprofileinfo.getRole().equals(Collections.singletonList("ROLE_STUDENT"))){
           Optional<Student> record = repos.findByEmail(myprofileinfo.getEmail());
           if(record.isPresent()){
           if(!data.getBirthDate().equals(null)){
               record.get().setBirthDate(data.getBirthDate());


           }
           if(!data.getEmail().equals(null)){
               if(!repos.existsByEmail(data.getEmail())){
                   record.get().setEmail(data.getEmail());


               }

           }
           if(!data.getPhone().equals(null)){
               record.get().setPhone(data.getPhone());

           }
           if(!data.getSchool().equals(null)){
               record.get().setSchool(data.getSchool());

           }
           if(!data.getDegree().equals(null)){
               record.get().setDegree(data.getDegree());

           }
           if(!data.getFirstName().equals(null)){
               record.get().setFirstName(data.getFirstName());

           }
           if(!data.getLastName().equals(null)){
               record.get().setLastName(data.getLastName());

           }
           myprofileinfo =record.get();
           repos.save(record.get());}






       }
       else{
           Optional<Instructor> record = repoi.findByEmail(myprofileinfo.getEmail());
           if(record.isPresent()){
               if(!data.getBirthDate().equals(null)){
                   record.get().setBirthDate(data.getBirthDate());


               }
               if(!data.getEmail().equals(null)){
                   if(!repos.existsByEmail(data.getEmail())){
                       record.get().setEmail(data.getEmail());


                   }

               }
               if(!data.getPhone().equals(null)){
                   record.get().setPhone(data.getPhone());

               }
               if(!data.getSchool().equals(null)){
                   record.get().setSchool(data.getSchool());

               }
               if(!data.getDegree().equals(null)){
                   record.get().setDegree(data.getDegree());

               }
               if(!data.getFirstName().equals(null)){
                   record.get().setFirstName(data.getFirstName());

               }
               if(!data.getLastName().equals(null)){
                   record.get().setLastName(data.getLastName());

               }
               myprofileinfo =record.get();
               repoi.save(record.get());}






       }
       return myprofileinfo;












    }



}
