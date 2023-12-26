package com.example.demo.myProfile;
import com.example.demo.systemUser.SystemUser;
import lombok.Data;

import java.sql.Date;
import java.util.Collections;

@Data
public class ProfileInfoDTO {

    private long id;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String school;
    private String degree;
    private String ssn;
    private Date birthDate;
    private String role;

   void fill(SystemUser data){
       this.id = data.getId();
       this.firstName=  data.getFirstName();
       this.lastName= data.getLastName();
       this.degree = data.getDegree();
       this.email= data.getEmail();
       this.phone= data.getPhone();
       this.school= data.getSchool();
       this.ssn= data.getSsn();
       this.birthDate=data.getBirthDate();
       if( data.getRole().equals(Collections.singletonList("ROLE_STUDENT"))){
           this.role ="Student";
       }
       else if(data.getRole().equals(Collections.singletonList("ROLE_INSTRUCTOR"))){
           this.role ="Instructor";

       }
       else {
           this.role ="Admin";
       }
   }
}
