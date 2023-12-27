package com.example.demo.course;

import com.example.demo.student.Student;
import com.example.demo.student.StudentRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.Root;
import jakarta.persistence.criteria.Subquery;
import jakarta.persistence.metamodel.Attribute;
import jakarta.persistence.metamodel.EntityType;
import jakarta.persistence.metamodel.Metamodel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
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
    public ResponseEntity<String> enrollCourse(String courseCode, Student student){
        Set<Course> courseSet = null;
        Course course=null;

        /// get the course with specified course code
        if(courseRepository.findById(courseCode).isPresent())
         course = courseRepository.findById(courseCode).get();
        else {
            return ResponseEntity.status(409).body("the course doesn't exist");
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

    public Specification<Course> enrolled(long studentId){
        return (root,cq,cb)->{
            Subquery<Long> sq = cq.subquery(Long.class);
            Root<Student> student = sq.from(Student.class);
            sq.select(student.get("id")).where(cb.equal(student.get("id"), studentId));
            return cb.not(root.get("studentSet").in(sq));
        };
    }

    public List<Course> test(long studentId){
        return courseRepository.findAll(enrolled(studentId));
    }

}
