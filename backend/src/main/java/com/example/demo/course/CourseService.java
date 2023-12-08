package com.example.demo.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {
    @Autowired
    CourseRepository courseRepository;
    public Course savaCourseDetails(Course course){
        return courseRepository.save(course);
    }
    public List<Course> getAllCourses(){
        return courseRepository.findAll();
    }
    public Course getCourseById(String courseCode){
        return courseRepository.findById(courseCode).orElse(null);
    }
}
