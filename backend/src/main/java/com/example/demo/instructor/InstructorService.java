package com.example.demo.instructor;

import com.example.demo.systemUser.SystemUserService;
import org.springframework.stereotype.Service;

@Service
public class InstructorService extends SystemUserService<Instructor, InstructorRepository> {

    public InstructorService(InstructorRepository repository) {
        super(repository);
    }

    @Override
    public Class<Instructor> getEntityClass() {
        return Instructor.class;
    }

}
