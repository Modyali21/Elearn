package com.example.demo.myProfile;

import com.example.demo.config.CustomUserDetails;
import com.example.demo.systemUser.SystemUser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin


public class MyProfileController {

    @Autowired
    MyProfileService mps ;




    @GetMapping("/myprofile")
     public ProfileInfoDTO showProfileData(@AuthenticationPrincipal CustomUserDetails customUser) {
        return mps.showProfileData(customUser) ;

    }




@PostMapping("/myprofile")
public ResponseEntity<String> edit(@RequestBody EditFormDTO data, @AuthenticationPrincipal CustomUserDetails customUser) {
    boolean result = mps.edit(data, customUser.getUsername());
    if(result)
            return ResponseEntity.status(201).body("Done");
    else
            return ResponseEntity.status(409).body("E-mail is taken");

    }


}