package com.example.demo.student;


 import java.sql.Date;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import com.example.demo.course.Course;
import com.example.demo.systemUser.SystemUser;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.sql.Date;
import java.util.Collections;
import java.util.List;

@Entity

@Getter
@Setter
@Table(name = "student", uniqueConstraints = { @UniqueConstraint(name = "uk_email", columnNames = "email"),
        @UniqueConstraint(name = "uk_ssn", columnNames = "ssn") })

public class Student extends SystemUser {

    public Student() {
        super();
    }
    @ManyToMany
    @JoinTable(name = "student_course",
            joinColumns = @JoinColumn(name = "student_id"),
            inverseJoinColumns = @JoinColumn(name = "course_code")
    )
    Set<Course> enrolledCourses=new HashSet<>();

    @Builder
    public Student(String firstName, String lastName, String email, String password, String phone, String school,
                   String degree, String ssn, Date birthDate) {
        super(firstName, lastName, email, password, phone, school, degree, ssn, birthDate);
    }

    @Override
    public List<String> getRole() {
        return Collections.singletonList("ROLE_STUDENT");
    }

}
