package com.example.demo.student;

import com.example.demo.systemUser.SystemUser;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.Builder;

import java.sql.Date;
import java.util.Collections;
import java.util.List;

@Entity
@Table(name = "student", uniqueConstraints = { @UniqueConstraint(name = "uk_email", columnNames = "email"),
        @UniqueConstraint(name = "uk_ssn", columnNames = "ssn") })
public class Student extends SystemUser {

    public Student() {
        super();
    }

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
