package com.example.demo.myProfile;

import com.example.demo.config.CustomUserDetails;

import com.example.demo.systemUser.SystemUser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin


public class MyProfileController {

    @Autowired
    MyProfileService mps;


    @GetMapping("/myprofile")
    public ProfileInfoDTO showProfileData(@AuthenticationPrincipal CustomUserDetails customUser) {
        try {
            return mps.showProfileData(customUser);
        } catch (Exception e) {
            return null;
        }
    }


    @PostMapping("/myprofile")
    public ResponseEntity<String> edit(@RequestBody EditFormDTO data,
                                       @AuthenticationPrincipal CustomUserDetails customUser) {
        try {


            boolean result = mps.edit(data, customUser.getUsername());
            if (result) return ResponseEntity.status(201).body("Done");
            else return ResponseEntity.status(409).body("E-mail is taken");

        } catch (Exception e) {
            return ResponseEntity.status(409).body("user doesn't exist");
        }
    }


}