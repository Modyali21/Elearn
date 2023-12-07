package com.example.demo.myProfile;

import com.example.demo.systemUser.SystemUser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin


public class MyProfileController {

    @Autowired
    MyProfileService mps ;




    @GetMapping("/myprofile/{id}")
     public SystemUser showProfileData(@PathVariable(name="id") String email) {
        return mps.showProfileData(email) ;

    }




@PostMapping("/myprofile")
public SystemUser edit(@RequestBody EditFormDTO data) {
    SystemUser profileInfo = mps.edit(data);
    if(profileInfo==null) {
        System.out.println("this E-mail is used");

    }


        return profileInfo;
    }


}