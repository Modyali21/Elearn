package com.example.demo.announcement;

import com.example.demo.course.Course;
import com.example.demo.course.CourseRepository;
import com.example.demo.instructor.Instructor;
import com.example.demo.student.Student;
import com.example.demo.student.StudentRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.metamodel.EntityType;
import jakarta.persistence.metamodel.Metamodel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Service
public class AnnouncementServices {
    @Autowired
    AnnouncementRepository announcementRepository;
    @Autowired
    CourseRepository courseRepository;

    @Autowired
    private EntityManager entityManager;


    public ResponseEntity<String> addAnnounce(Instructor instructor,AnnouncementDTO announcementDTO){
        if(announcementRepository.findById(announcementDTO.getAnnouncementName())
                .isPresent()){
            return ResponseEntity.status(400).body("Announcement already exists");
        }
        if(!courseRepository.findById(announcementDTO.getCourseCode()).isPresent()){
            return ResponseEntity.status(400).body("No course has this code");
        }
        Announcement announcement = new Announcement(
                announcementDTO.getAnnouncementName(),
                java.sql.Timestamp.valueOf(LocalDateTime.now()),
                announcementDTO.getDescription(),
                courseRepository.findById(announcementDTO.getCourseCode()).orElseThrow(),
                instructor
                );
        announcementRepository.save(announcement);
        return ResponseEntity.status(200).body("Announcement has been added successfully");
    }
    public ResponseEntity<String> deleteAnnounce(String name){
        if(!announcementRepository.findById(name).isPresent()){
            return ResponseEntity.status(400).body("Doesn't Exists");
        }
        announcementRepository.deleteById(name);
        return ResponseEntity.status(200).body("deleted Successfully the announcement ");
    }
    public List<Announcement> getAllAnnounceOfCourse(String courseCode){
        if(!courseRepository.findById(courseCode).isPresent()){
            return null;
        }
        String jpql = "SELECT a FROM Announcement a WHERE a.course.courseCode = :courseCode";
        return entityManager.createQuery(jpql, Announcement.class)
                .setParameter("courseCode", courseCode)
                .getResultList();
    }

}
