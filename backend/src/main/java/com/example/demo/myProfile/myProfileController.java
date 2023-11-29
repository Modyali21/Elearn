package com.example.demo.myProfile;

import com.example.demo.systemUser.SystemUser;
import com.example.demo.userProfile.userProfileDTO;
import com.example.demo.userProfile.userProfileService;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/profile")
public class myProfileController {
    myProfileService mps ;

    public void myProfileController( myProfileService service){
        this.mps = service;
    }


    @GetMapping("/myprofile")
    public myProfileDTO showProfileData(@PathVariable String email) {
        return mps.showProfileData(email);

    }


@PostMapping("/myprofile")
public SystemUser edit(@RequestBody SystemUser data) {
    return mps.edit(data);

}
}