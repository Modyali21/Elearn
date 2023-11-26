package com.example.demo.registeration;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.instructor.Instructor;
import com.example.demo.instructor.InstructorService;
import com.example.demo.student.Student;
import com.example.demo.student.StudentService;

@RestController
@CrossOrigin
public class RegisterController {

    private StudentService studentService;
    private InstructorService instructorService;
    private PasswordEncoder passwordEncoder;

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
}
