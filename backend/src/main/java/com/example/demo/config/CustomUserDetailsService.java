package com.example.demo.config;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.example.demo.instructor.InstructorService;
import com.example.demo.student.StudentService;
import com.example.demo.systemUser.SystemUser;

public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private StudentService studentService;
    @Autowired
    private InstructorService instructorService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if (username.equals("admin@admin.com")) {
            return User.builder()
                    .username("admin@admin.com")
                    .password("$2a$10$4uwaYV99.XeHuS/rxzFsEu1hKPuWDLW6YIMDToiyqtUD1e0kxHAGu")
                    .roles("ADMIN")
                    .build();
        }
        Optional<? extends SystemUser> user;
        user = studentService.findByEmail(username);
        if (!user.isPresent()) {
            user = instructorService.findByEmail(username);
        }
        if (user.isPresent()) {
            return new CustomUserDetails(user.get());
        } else {
            throw new UsernameNotFoundException("email isn't resgistered");
        }
    }

}
