package com.example.demo.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {
    @Autowired
    CourseRepository courseRepository;
    public Course saveCourseDetails(Course course){
        return courseRepository.save(course);
    }
    public List<Course> getAllCourses(){
        return courseRepository.findAll();
    }
    public Course getCourseById(String courseCode){
        return courseRepository.findById(courseCode).orElse(null);
    }
    public String deleteCourse(Course course){
        courseRepository.deleteById(course.getCourseCode());
        return "deleted Successfully the course ";
    }
    public List<Course> sortBy(String criteria){
        List<Course> courses = courseRepository.findAll();
        if(criteria.equalsIgnoreCase("courseName")){
            courses.sort((o1, o2) -> o1.getCourseName().compareTo(
                    o2.getCourseName()));
            return courses;
        }
        else if(criteria.equalsIgnoreCase("deadline")){
            courses.sort((o1, o2) -> o1.getDeadLine().compareTo(
                    o2.getDeadLine()));
            return courses;
        }
        return null;
    }

}
