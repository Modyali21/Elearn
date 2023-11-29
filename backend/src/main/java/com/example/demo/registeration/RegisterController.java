package com.example.demo.registeration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;

import com.example.demo.instructor.Instructor;
import com.example.demo.instructor.InstructorService;
import com.example.demo.student.Student;
import com.example.demo.student.StudentService;

import java.util.Collections;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
public class RegisterController {

    private StudentService studentService;
    private InstructorService instructorService;
    private PasswordEncoder passwordEncoder;
    //private List<String> role ;

    public RegisterController(StudentService studentService, InstructorService instructorService,
            PasswordEncoder passwordEncoder) {
        this.studentService = studentService;
        this.instructorService = instructorService;
        this.passwordEncoder = passwordEncoder;
    }


    @PostMapping("/register")
    public ResponseEntity<String> registerStudent(@RequestBody RegisterDTO resgisterInfo) {

        if (studentService.emailTaken(resgisterInfo.getEmail()) ||
                instructorService.emailTaken(resgisterInfo.getEmail())
                || resgisterInfo.getEmail().equals("admin@admin.com")) {
            return ResponseEntity.status(409).body("email is taken");
        }
        if (studentService.ssnTaken(resgisterInfo.getSsn()) ||
                instructorService.ssnTaken(resgisterInfo.getSsn())) {
            return ResponseEntity.status(409).body("there is another user with the same SSN");
        }

        if (resgisterInfo.isStudent()) {
            studentService.saveUser(
                    Student.builder()
                            .firstName(resgisterInfo.getFirstName())
                            .lastName(resgisterInfo.getLastName())
                            .email(resgisterInfo.getEmail())
                            .password(passwordEncoder.encode(resgisterInfo.getPassword()))
                            .phone(resgisterInfo.getPhone())
                            .school(resgisterInfo.getSchool())
                            .degree(resgisterInfo.getDegree())
                            .ssn(resgisterInfo.getSsn())
                            .birthDate(resgisterInfo.getBirthDate())
                            .build());
        } else {
            instructorService.saveUser(
                    Instructor.builder()
                            .firstName(resgisterInfo.getFirstName())
                            .lastName(resgisterInfo.getLastName())
                            .email(resgisterInfo.getEmail())
                            .password(passwordEncoder.encode(resgisterInfo.getPassword()))
                            .phone(resgisterInfo.getPhone())
                            .school(resgisterInfo.getSchool())
                            .degree(resgisterInfo.getDegree())
                            .ssn(resgisterInfo.getSsn())
                            .birthDate(resgisterInfo.getBirthDate())
                            .hasPrivilege(false)
                            .build());
        }
        return ResponseEntity.status(201).body("resgistered successfully");
    }
    @RequestMapping("/oauth2/{role}")
    public ResponseEntity<Object> oauth_login(@PathVariable String role,@AuthenticationPrincipal OAuth2User oauth2User) {
        System.out.println("output is = "+oauth2User.getAttributes());
        Map<String,Object> data =oauth2User.getAttributes();
        System.out.println("email is = "+data.get("email"));
        System.out.println("role= "+role);
        if (studentService.emailTaken(data.get("email").toString()) ||
                instructorService.emailTaken(data.get("email").toString())
                || data.get("email").toString().equals("admin@admin.com")) {
            return ResponseEntity.status(409).body("email is taken");
        }

        if(role.equals("ROLE_STUDENT")){
            try {
                studentService.saveUser(
                        Student.builder()
                                .firstName(data.get("given_name").toString())
                                .lastName(data.get("family_name").toString())
                                .email(data.get("email").toString())
                                .password(passwordEncoder.encode(data.get("at_hash").toString()))
                                .phone(null)
                                .school(null)
                                .degree(null)
                                .ssn(null)
                                .birthDate(null)
                                .build());
            } catch (DataIntegrityViolationException e) {
                return ResponseEntity.status(401).body("Email is already taken for user");
            }

        }
        else if (role.equals("ROLE_INSTRUCTOR") || role.equals("ROLE_ADMIN") ){
            try {
                instructorService.saveUser(
                        Instructor.builder()
                                .firstName(data.get("given_name").toString())
                                .lastName(data.get("family_name").toString())
                                .email(data.get("email").toString())
                                .password(passwordEncoder.encode(data.get("at_hash").toString()))
                                .phone(null)
                                .school(null)
                                .degree(null)
                                .ssn(null)
                                .birthDate(null)
                                .build());
            } catch (DataIntegrityViolationException e) {
                return ResponseEntity.status(401).body("Email is already taken for user");
            }
        }

            return ResponseEntity.status(200).body("resgistered successfully");
    }



}
