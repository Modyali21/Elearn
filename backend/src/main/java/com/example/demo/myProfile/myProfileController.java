package com.example.demo.myProfile;

import com.example.demo.systemUser.SystemUser;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin

public class myProfileController {
    myProfileService mps ;

    public void myProfileController( myProfileService service){
        this.mps = service;
    }


    @PostMapping("/myprofile")
    public SystemUser showProfileData(@RequestBody  String email) {
        return mps.showProfileData(email);

    }




@PostMapping("/myprofile")
public SystemUser edit(@RequestBody editformDTO data) {
    return mps.edit(data);

}
}