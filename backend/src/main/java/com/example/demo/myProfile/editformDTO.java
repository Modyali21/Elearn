package com.example.demo.myProfile;

import lombok.Data;

import java.sql.Date;
@Data

public class editformDTO {

    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String school;
    private String degree;
    private Date birthDate;


}
