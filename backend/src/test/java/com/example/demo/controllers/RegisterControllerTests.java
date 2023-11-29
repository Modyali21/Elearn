package com.example.demo.controllers;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.annotation.DirtiesContext.MethodMode;
import org.springframework.test.web.servlet.MockMvc;
import com.example.demo.utilities.Helper;

@SpringBootTest
@AutoConfigureMockMvc
public class RegisterControllerTests {

    @Autowired
    private MockMvc mockMvc;
    private String path = "src/test/resources/registerTestFiles/";

    /**
     * test case: a user tries to register with valid info.
     * 
     * @throws Exception
     */
    @Test
    @DirtiesContext(methodMode = MethodMode.AFTER_METHOD)
    public void test1() throws Exception {

        mockMvc.perform(post("/register").contentType(MediaType.APPLICATION_JSON)
                .content(Helper.readFile(path + "test1.json"))).andExpect(status().isCreated())
                .andExpect(content().string("resgistered successfully"));
    }

    /**
     * test case: a user (student) tries to register with a taken email(by student).
     * 
     * @throws Exception
     */
    @Test
    @DirtiesContext(methodMode = MethodMode.AFTER_METHOD)
    public void test2() throws Exception {

        mockMvc.perform(post("/register").contentType(MediaType.APPLICATION_JSON)
                .content(Helper.readFile(path + "test1.json"))).andExpect(status().isCreated())
                .andExpect(content().string("resgistered successfully"));

        mockMvc.perform(post("/register").contentType(MediaType.APPLICATION_JSON)
                .content(Helper.readFile(path + "test2.json"))).andExpect(status().is(409))
                .andExpect(content().string("email is taken"));
    }

    /**
     * test case: a user (student) tries to register with a taken ssn(by student).
     * 
     * @throws Exception
     */
    @Test
    @DirtiesContext(methodMode = MethodMode.AFTER_METHOD)
    public void test3() throws Exception {

        mockMvc.perform(post("/register").contentType(MediaType.APPLICATION_JSON)
                .content(Helper.readFile(path + "test3.json"))).andExpect(status().isCreated())
                .andExpect(content().string("resgistered successfully"));

        mockMvc.perform(post("/register").contentType(MediaType.APPLICATION_JSON)
                .content(Helper.readFile(path + "test4.json"))).andExpect(status().is(409))
                .andExpect(content().string("there is another user with the same SSN"));
    }

    /**
     * test case: a user (instructor) tries to register with a taken ssn(by instructor).
     * 
     * @throws Exception
     */
    @Test
    @DirtiesContext(methodMode = MethodMode.AFTER_METHOD)
    public void test4() throws Exception {

        mockMvc.perform(post("/register").contentType(MediaType.APPLICATION_JSON)
                .content(Helper.readFile(path + "test5.json"))).andExpect(status().isCreated())
                .andExpect(content().string("resgistered successfully"));

        mockMvc.perform(post("/register").contentType(MediaType.APPLICATION_JSON)
                .content(Helper.readFile(path + "test6.json"))).andExpect(status().is(409))
                .andExpect(content().string("there is another user with the same SSN"));
    }
}
