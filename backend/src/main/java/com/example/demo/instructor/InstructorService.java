package com.example.demo.instructor;

import org.springframework.stereotype.Service;

import com.example.demo.systemUser.SystemUserService;

@Service
public class InstructorService extends SystemUserService<Instructor, InstructorRepository> {

    public InstructorService(InstructorRepository repository) {
        super(repository);
    }

}
