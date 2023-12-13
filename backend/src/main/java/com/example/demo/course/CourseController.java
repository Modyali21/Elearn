package com.example.demo.course;

import com.example.demo.config.CustomUserDetails;
import com.example.demo.instructor.Instructor;
import com.example.demo.instructor.InstructorService;
import com.example.demo.student.Student;
import com.example.demo.student.StudentService;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("/course")
public class CourseController {
    @Autowired
    private CourseService courseService;
    @Autowired
    private InstructorService instructorService;


    @PostMapping("/addCourse")
    public String addCourse(@AuthenticationPrincipal CustomUserDetails user, @RequestBody Course course){
        //check if course already exists
        if(courseService.getCourseById(course.getCourseCode())!=null){
            return "the course already exists";
        }
        if(!(user.getSystemUser() instanceof Instructor)){
            return "not an instructor";
        }
        Instructor instructor = (Instructor)user.getSystemUser();
        Course addedCourse=null;
        if(course.getInstructorId()==instructor.getId())
            addedCourse=  courseService.saveCourseDetails(course);
        else{
            return "not authorized";
        }

        return "course has been added successfully";
    }
    @GetMapping("/getAllOfInstructor")
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
    @GetMapping("/getAll")
    public List<Course> getAllCourses(){
        return courseService.getAllCourses();
    }


    @PostMapping("/deleteCourse")
    public String deleteCourse(@AuthenticationPrincipal CustomUserDetails user,@RequestBody Course course){
        Instructor instructor = (Instructor)user.getSystemUser();
        if(course.getInstructorId()!=instructor.getId()){
            return "not authorized";
        }
        if(courseService.getCourseById(course.getCourseCode())==null){
            return "the course doesn't exists";
        }
        return courseService.deleteCourse(course);
    }
    @GetMapping("/sortedCourses")
    public List<Course> getSortedCriteriaCourses(@RequestBody String criteria){
        return courseService.sortBy(criteria);
    }
    @PutMapping("/student/{studentId}/coursecode/{courseCode}")
    public String assignProjectToEmployee(@AuthenticationPrincipal CustomUserDetails user,
            @PathVariable Long studentId,
            @PathVariable String courseCode
    ){
        if(!(user.getSystemUser() instanceof Student)){
            return "not an instructor";
        }
        Student student = (Student) user.getSystemUser();
        if(studentId!=student.getId()){
            return "not authorized";
        }

        return courseService.enrollCourse(courseCode,studentId);
    }

}
