package com.example.demo.course;

import com.example.demo.config.CustomUserDetails;
import com.example.demo.instructor.Instructor;
import com.example.demo.instructor.InstructorService;
import com.example.demo.student.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;


@RestController
@CrossOrigin
@RequestMapping("/course")
public class CourseController {
    @Autowired
    private CourseService courseService;
    @Autowired
    private InstructorService instructorService;






    @GetMapping("/getAll")
    public List<Course> getAllCourses() {
        return courseService.getAllCourses();
    }




    @GetMapping("/sortedCourses")
    public List<Course> getSortedCriteriaCourses(@RequestBody String criteria) {
        return courseService.sortBy(criteria);
    }



    @GetMapping("/studentEnrolled")
    public Set<Course> getEnrolledCourses(@RequestBody long studentId) {
        return courseService.getEnrolledCourses(studentId);
    }

    @GetMapping("/studentUnEnrolled")
    public List<Course> getUnEnrolledCourses(@RequestBody long studentId) {
        return courseService.getUnEnrolledCourse(studentId);
    }

}
