package com.example.demo.course;

import com.example.demo.instructor.Instructor;
import com.example.demo.student.Student;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@Table(name = "course",uniqueConstraints =
        {@UniqueConstraint(columnNames = "course_code")})
@NoArgsConstructor
public class Course {
    @Id
    @Column(name = "course_code")
    private String courseCode;

    @Column(name = "course_name")
    private String courseName;

    @Column(name = "description")
    private String description;
    ///List of Lectures TODO
    @Column(name = "deadline")
    private Date deadLine;

    //    @ManyToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "fk_instructor_id",referencedColumnName = "id")
//    private Instructor instructor;
    @Column(name = "instructor_id")
    private long instructorId;

    @JsonIgnore
    @ManyToMany(mappedBy = "enrolledCourses")
    Set<Student> studentSet= new HashSet<>();


    public Course(String courseCode, String courseName, String description, Date deadline, long instructorId) {
        this.courseCode = courseCode;
        this.courseName = courseName;
        this.description = description;
        this.deadLine = deadline;
        this.instructorId = instructorId;
    }
}