package com.example.demo.controllers;

import com.example.demo.instructor.Instructor;
import com.example.demo.instructor.InstructorService;
import com.example.demo.student.Student;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.example.demo.student.StudentService;
import com.example.demo.utilities.Helper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import java.sql.Date;

@SpringBootTest
@AutoConfigureMockMvc
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_CLASS)
public class LoginControllerTests {
    @Autowired
    private StudentService studentService;
    @Autowired
    private InstructorService instructorService;
    @Autowired
    private MockMvc mockMvc;
    private String path = "src/test/resources/loginTestFiles/";

    public void setUp() {
        studentService.saveUser(Student.builder()
                .firstName("ahmed")
                .lastName("mohamed")
                .email("ahmed@gmail.com")
                .password("$2a$10$4uwaYV99.XeHuS/rxzFsEu1hKPuWDLW6YIMDToiyqtUD1e0kxHAGu")
                .phone("01127311987")
                .school("high school")
                .degree("PHD")
                .ssn("56728292929")
                .birthDate(Date.valueOf("2023-10-2"))
                .build());
        instructorService.saveUser(Instructor.builder()
                .firstName("ahmed")
                .lastName("samy")
                .email("samy@gmail.com")
                .password("$2a$10$4uwaYV99.XeHuS/rxzFsEu1hKPuWDLW6YIMDToiyqtUD1e0kxHAGu")
                .phone("01127311987")
                .school("private high school")
                .degree("PHD")
                .ssn("78728728")
                .birthDate(Date.valueOf("2023-10-2"))
                .hasPrivilege(false)
                .build());
    }


    @Test
    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    public void test1() throws Exception {
        setUp();
        mockMvc.perform(post("/login").contentType(MediaType.APPLICATION_JSON).content(Helper.readFile(path + "test1.json"))).andExpect(status().isOk()).andExpect(content().string("welcome back"));
    }

    @Test
    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    public void test2() throws Exception {
        setUp();
        mockMvc.perform(post("/login").contentType(MediaType.APPLICATION_JSON).content(Helper.readFile(path + "test2.json"))).andExpect(status().isOk()).andExpect(content().string("welcome back"));
    }

    @Test
    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    public void test3() throws Exception {
        setUp();
        mockMvc.perform(post("/login").contentType(MediaType.APPLICATION_JSON).content(Helper.readFile(path + "test3.json"))).andExpect(status().isOk()).andExpect(content().string("welcome back"));
    }

    @Test
    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    public void test4() throws Exception {
        setUp();
        mockMvc.perform(post("/login").contentType(MediaType.APPLICATION_JSON).content(Helper.readFile(path + "test4.json"))).andExpect(status().is(401)).andExpect(content().string("the email or password is wrong"));
    }
}
