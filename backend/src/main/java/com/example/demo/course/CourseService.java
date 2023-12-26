package com.example.demo.course;

import com.example.demo.student.Student;
import com.example.demo.student.StudentRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.metamodel.Attribute;
import jakarta.persistence.metamodel.EntityType;
import jakarta.persistence.metamodel.Metamodel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Service
public class CourseService {
    @Autowired
    CourseRepository courseRepository;
    @Autowired
    StudentRepository studentRepository;
    @Autowired
    private EntityManager entityManager;
    public Course saveCourseDetails(Course course){
        return courseRepository.save(course);
    }
    public List<Course> getAllCourses(){
        return courseRepository.findAll();
    }
    public Course getCourseById(String courseCode){
        return courseRepository.findById(courseCode).orElse(null);
    }
    public ResponseEntity<String> deleteCourse(Course course){
        courseRepository.deleteById(course.getCourseCode());
        return ResponseEntity.status(200).body("deleted Successfully the course ");
    }
    public List<Course> sortBy(String criteria){
        Metamodel metamodel = entityManager.getMetamodel();
        EntityType<Course> courseEntityType = metamodel.entity(Course.class);
        Set<String> attributeNames = courseEntityType.getAttributes().stream()
                .map(Attribute::getName)
                .collect(java.util.stream.Collectors.toSet());
        if(!attributeNames.contains(criteria)){
            return null;
        }

        String jpqlQuery = "SELECT c FROM Course c ORDER BY c." + criteria;
        TypedQuery<Course> query = entityManager.createQuery(jpqlQuery, Course.class);
        return query.getResultList();

    }
    public ResponseEntity<String> enrollCourse(String courseCode, long studentId){
        Set<Course> courseSet = null;
        Student student=null;
        Course course=null;

        ///get the student with specified id
        if(studentRepository.findById(studentId).isPresent())
            student= studentRepository.findById(studentId).get();
        else{
            //bad request
            return ResponseEntity.status(400).body("this student doesn't exists");
        }

        /// get the course with specified course code
        if(courseRepository.findById(courseCode).isPresent())
         course = courseRepository.findById(courseCode).get();
        else {
            ///bad request
            return ResponseEntity.status(400).body("this student doesn't exists");
        }

        ///comparing deadlines
        LocalDateTime localDateTime = LocalDateTime.now();
        Date date = java.sql.Timestamp.valueOf(localDateTime);
        int comparisonResult=course.getDeadLine().compareTo(date);
        if (comparisonResult < 0) {
            return ResponseEntity.status(406).body("Your date is in the past.");
        }


        //fetch the set of course the student is enrolled, then add the new course
        courseSet = student.getEnrolledCourses();
        if(courseSet.contains(course)){
            return ResponseEntity.status(400).body("Already Enrolled");
        }
        courseSet.add(course);
        student.setEnrolledCourses(courseSet);
        studentRepository.save(student);
        return ResponseEntity.status(200).body("enrolled successfully");
    }
    public Set<Course> getEnrolledCourses(long studentId){
        Student student = studentRepository.findById(studentId).orElse(null);
        Set<Course> enrolled =student.getEnrolledCourses();
        return enrolled;
    }
    public List<Course> getUnEnrolledCourse(long studentId){
        Student student = studentRepository.findById(studentId).orElse(null);
        Set<Course> courseOfStudent= student.getEnrolledCourses();
        List<Course> allCourses= courseRepository.findAll();
        List<Course> unEnrolled= new ArrayList<>();
        for(Course c :allCourses){
            if(!courseOfStudent.contains(c)){
                unEnrolled.add(c);
            }
        }
        return unEnrolled;
    }

}
