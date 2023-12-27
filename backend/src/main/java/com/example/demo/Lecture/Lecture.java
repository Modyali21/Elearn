package com.example.demo.Lecture;

import com.example.demo.course.Course;
import com.example.demo.instructor.Instructor;
import jakarta.persistence.*;
import lombok.Data;

import lombok.NoArgsConstructor;


import java.sql.Date;

@Entity
@Table(name="lecture")
@IdClass(LectureId.class)
@Data
@NoArgsConstructor
public class Lecture {
    @Id @Column(name="id")
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
    @Id
    @ManyToOne(cascade = CascadeType.ALL )
    @JoinColumn(name = "course_code",referencedColumnName = "course_code")
    private Course course;



    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "instructorssn",referencedColumnName = "ssn")
    private Instructor instructor;

    @Column(name="video_link" , nullable = false)
    private String videoLink;

    @Column(name="title" ,nullable = false)
    private String title;

    @Column(name="description")
    private String description;

    @Column(name="date_created" , nullable = false )
    private Date date_created;


    public Lecture( Course course, Instructor instructor, String videoLink, String title, String description, Date date_created) {

        this.course = course;
        this.instructor = instructor;
        this.videoLink = videoLink;
        this.title = title;
        this.description = description;
        this.date_created = date_created;
    }
}


