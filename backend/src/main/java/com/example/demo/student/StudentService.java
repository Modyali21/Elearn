package com.example.demo.student;

import org.springframework.stereotype.Service;

import com.example.demo.systemUser.SystemUserService;

@Service
public class StudentService extends SystemUserService<Student,StudentRepository>{

    public StudentService(StudentRepository repository) {
        super(repository);
    }

    
}
