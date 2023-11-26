package com.example.demo.utilities;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.instructor.InstructorService;
import com.example.demo.student.StudentService;
import com.example.demo.systemUser.SystemUser;

import lombok.Getter;

@Service
@Getter
public class GeneralUserService {

    private StudentService studentService;
    private InstructorService instructorService;

    public GeneralUserService(StudentService studentService, InstructorService instructorService) {
        this.studentService = studentService;
        this.instructorService = instructorService;
    }

    public boolean emailTaken(String email) {
        return studentService.emailTaken(email) || instructorService.emailTaken(email);
    }

    public boolean ssnTaken(String ssn) {
        return studentService.ssnTaken(ssn) || instructorService.ssnTaken(ssn);
    }

    public Optional<? extends SystemUser> findByEmail(String email) {
        Optional<? extends SystemUser> user;
        user = studentService.findByEmail(email);
        if (user.isPresent()) {
            return user;
        } else {
            user = instructorService.findByEmail(email);
            return user;
        }
    }
}
