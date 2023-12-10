package com.example.demo.course;

import com.example.demo.instructor.Instructor;
import com.example.demo.instructor.InstructorService;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin
public class CourseController {
    @Autowired
    private CourseService courseService;
    @Autowired
    private InstructorService instructorService;

    @PostMapping("/addCourse")
    public String addCourse(@RequestBody Course course){
        //check if course already exists
        if(courseService.getCourseById(course.getCourseCode())!=null){
            return "the course already exists";
        }
        Course addedCourse=  courseService.saveCourseDetails(course);

        return "course has been added successfully";
    }
    @GetMapping("/getAll")
    public List<Course> getInstructorCourses(@RequestBody Instructor instructor){
        List<Course> allCourses = courseService.getAllCourses();
        Instructor instructorFromDataBase= instructorService.findByEmail(instructor.getEmail());
        List<Course> filteredCourses = new ArrayList<>();
        for(Course c :allCourses){
            if(c.getInstructorId() == instructorFromDataBase.getId()){
                filteredCourses.add(c);
            }
        }
        return filteredCourses;
    }
    @PostMapping("/deleteCourse")
    public String deleteCourse(@RequestBody Course course){
        ///TODO : USER AUTHENTICATION
        if(courseService.getCourseById(course.getCourseCode())==null){
            return "the course doesn't exists";
        }
        return courseService.deleteCourse(course);
    }
    @GetMapping("/sortedCourses")
    public List<Course> getSortedCriteriaCourses(@RequestBody String criteria){
        return courseService.sortBy(criteria);
    }

}
