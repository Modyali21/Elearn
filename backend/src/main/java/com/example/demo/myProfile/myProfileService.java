package com.example.demo.myProfile;

import com.example.demo.systemUser.SystemUser;
import com.example.demo.userProfile.userProfileDTO;
import com.example.demo.userProfile.userProfileRepository;

import java.util.Optional;

public class myProfileService {
    private myProfileRepository repo;
    private myProfileDTO profile;
    public void myProfileService( myProfileRepository repository){
        this.repo = repository;
    }

    public myProfileDTO showProfileData(String email){
        Optional<SystemUser> user = repo.findByEmail(email);
        if(user.isPresent()){
            if(user.get().getRole().equals("ROLE_STUDENT"))
                profile.setStudent(true);
            else
                profile.setStudent(false);
            profile.setId(user.get().getId());
            profile.setPassword(user.get().getPassword());
            profile.setBirthDate(user.get().getBirthDate());
            profile.setDegree(user.get().getDegree());
            profile.setEmail(user.get().getEmail());
            profile.setPhone(user.get().getPhone());
            profile.setSchool(user.get().getSchool());
            profile.setSsn(user.get().getSsn());
            profile.setFirstName(user.get().getFirstName());
            profile.setLastName(user.get().getLastName());
            return profile;


        }
        else
            return null;

    }


    public SystemUser edit(SystemUser data){
        Optional<SystemUser> user = repo.findById(data.getId());
         if(user.isPresent()){

        user.get().setPassword(data.getPassword());
        user.get().setBirthDate(data.getBirthDate());
        user.get().setDegree(data.getDegree());
        user.get().setEmail(data.getEmail());
        user.get().setPhone(data.getPhone());
        user.get().setSchool(data.getSchool());
        user.get().setSsn(data.getSsn());
        user.get().setFirstName(data.getFirstName());
        user.get().setLastName(data.getLastName());
        repo.save(user);


       return data;}
         else
             return null;


    }



}
