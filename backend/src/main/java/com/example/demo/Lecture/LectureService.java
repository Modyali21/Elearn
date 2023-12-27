package com.example.demo.Lecture;


import com.example.demo.instructor.Instructor;
import com.example.demo.course.Course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.Optional;

@Service
public class LectureService {
    @Autowired
    LectureRepository lr;

     public void createLecture(AddLectureFormDTO info, Course course , Instructor instructor){
         Lecture lecture = new Lecture(course,instructor, info.getVideoPath(), info.getTitle(), info.getDescription(), new java.sql.Date(System.currentTimeMillis()));
         lr.save(lecture);



     }
     public boolean deleteLecture(long lid,Course course){
         LectureId id = new LectureId();
         id.setId(lid);
         id.setCourse(course);


        if(!lr.existsById(id)){
            return false;
        }
        else{
            lr.deleteById(id);
            return true;


        }




     }
}
