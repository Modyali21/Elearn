package com.example.demo.registeration;

import java.sql.Date;

import lombok.Data;

@Data
public class RegisterDTO {
    
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String phone;
    private String school;
    private String degree;
    private String ssn;
    private Date birthDate;
    private boolean student;
}
