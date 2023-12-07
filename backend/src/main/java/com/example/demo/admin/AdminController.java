package com.example.demo.admin;

import com.example.demo.instructor.Instructor;
import com.example.demo.instructor.InstructorService;
import com.example.demo.student.Student;
import com.example.demo.student.StudentService;
import com.example.demo.systemUser.filterOptions;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/admin")
public class AdminController {
    private final StudentService studentService;
    private final InstructorService instructorService;

    public AdminController(StudentService studentService, InstructorService instructorService) {
        this.studentService = studentService;
        this.instructorService = instructorService;
    }

    @PostMapping("/students")
    public List<Student> findStudents(@RequestBody filterOptions filterOptions){
        return studentService.find(filterOptions);
    }

    @PostMapping("/instructors")
    public List<Instructor> findInstructors(@RequestBody filterOptions filterOptions){
        return instructorService.find(filterOptions);
    }
}
