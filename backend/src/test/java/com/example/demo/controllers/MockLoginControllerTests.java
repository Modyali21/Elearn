package com.example.demo.controllers;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.core.Authentication;
import org.springframework.test.web.servlet.MockMvc;

import com.example.demo.config.CustomUserDetailsService;
import com.example.demo.utilities.Helper;

@SpringBootTest
@AutoConfigureMockMvc
public class MockLoginControllerTests {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private AuthenticationManager authenticationManager;
    
    @MockBean
    private CustomUserDetailsService customUserDetailsService;

    private String path = "src/test/resources/loginTestFiles/";

    /**
     * Wrong password
     *
     * @throws Exception
     */
    @Test
    public void test1() throws Exception {
        when(authenticationManager.authenticate(any(Authentication.class))).thenThrow(new BadCredentialsException(""));
        mockMvc.perform(post("/login").contentType(MediaType.APPLICATION_JSON)
                        .content(Helper.readFile(path + "test2.json")))
                .andExpect(status().is(401))
                .andExpect(content().string("the email or password is wrong"));
    }

    /**
     * Locked user
     *
     * @throws Exception
     */
    @Test
    public void test2() throws Exception {
        when(authenticationManager.authenticate(any(Authentication.class))).thenThrow(new LockedException(""));
        mockMvc.perform(post("/login").contentType(MediaType.APPLICATION_JSON)
                        .content(Helper.readFile(path + "test2.json")))
                .andExpect(status().is(401))
                .andExpect(content().string("the account is locked, contact the admin"));
    }

    /**
     * Disabled user
     *
     * @throws Exception
     */
    @Test
    public void test3() throws Exception {
        when(authenticationManager.authenticate(any(Authentication.class))).thenThrow(new DisabledException(""));
        mockMvc.perform(post("/login").contentType(MediaType.APPLICATION_JSON)
                        .content(Helper.readFile(path + "test2.json")))
                .andExpect(status().is(401))
                .andExpect(content().string("the account is disabled, contact the admin"));
    }

    /**
     * registered user
     *
     * @throws Exception
     */
    @Test
    public void test4() throws Exception {
        mockMvc.perform(post("/login").contentType(MediaType.APPLICATION_JSON)
                        .content(Helper.readFile(path + "test1.json")))
                .andExpect(status().isOk())
                .andExpect(content().string("welcome back"));
    }
}
