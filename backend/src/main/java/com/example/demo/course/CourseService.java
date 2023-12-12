package com.example.demo.course;

import com.example.demo.student.Student;
import com.example.demo.student.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Service
public class CourseService {
    @Autowired
    CourseRepository courseRepository;
    @Autowired
    StudentRepository studentRepository;
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
    public String enrollCourse(String courseCode,long studentId){
        Set<Course> courseSet = null;
        Student student=null;
        Course course=null;

        ///get the student with specified id
        if(studentRepository.findById(studentId).isPresent())
            student= studentRepository.findById(studentId).get();
        else{
            return "this student doesn't exists";
        }

        /// get the course with specified course code
        if(courseRepository.findById(courseCode).isPresent())
         course = courseRepository.findById(courseCode).get();
        else {
            return "this course doesn't exist";
        }

        ///comparing deadlines
        LocalDateTime localDateTime = LocalDateTime.now();
        Date date = java.sql.Timestamp.valueOf(localDateTime);
        int comparisonResult=course.getDeadLine().compareTo(date);
        if (comparisonResult < 0) {
            return "Your date is in the past.";
        }


        //fetch the set of course the student is enrolled, then add the new course
        courseSet = student.getEnrolledCourses();
        courseSet.add(course);
        student.setEnrolledCourses(courseSet);
        studentRepository.save(student);
        return"enrolled successfully";
    }

}
