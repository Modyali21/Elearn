package com.example.demo.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@RestController
@CrossOrigin
public class CourseController {
    @Autowired
    private CourseService courseService;

    @PostMapping("/addCourse")
    public String addCourse(@RequestBody Course course){
        //check if course already exists
        if(courseService.getCourseById(course.getCourseCode())!=null){
            return "the course already exists";
        }
        Course addedCourse=  courseService.savaCourseDetails(course);

        return "course has been added successfully";
    }

}
