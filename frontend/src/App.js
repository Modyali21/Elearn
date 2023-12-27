import './App.css';
import {ElearningPage,Header,CourseEnroll,MakeCourse,Signup,Login,StudentProfile, Course,MakeLecture,HomePage,MakeAnnounm,NotFound} from "./components/index"
import {UpdateProfile} from "./components/index"
import {Admin} from "./components/index"
import {BrowserRouter,Route, Routes} from "react-router-dom"
import { CookiesProvider, useCookies } from "react-cookie";
import React, { useState } from 'react';

function App() {
  const [cookies, setCookie] = useCookies(["user"]);
  const [courseId,setCourseId] = useState()
  function handleLogin(user) {
    setCookie("user", user, { path: "/" });
  }
  function handleCourseId(course) {
    setCourseId(course);
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/elearning"
            element={
              <>
                <Header />
                <HomePage />
              </>
            }
          />
          <Route path="/course" element={<Course />} user={cookies.user} />
          <Route path="/courseenroll" element={<CourseEnroll user={cookies.user} />} />
          <Route path="/makecourse" element={<MakeCourse user={cookies.user} />} />
          <Route path="/makelecture" element={<MakeLecture user={cookies.user} cid={courseId} />} />
          <Route path="/makeannoun" element={<MakeAnnounm user={cookies.user}  cid={courseId}/>} />
          <Route path="*" element={<NotFound user={cookies.user} />} />
          <Route path="/admin" element={<><Header/><Admin user={cookies.user} /></>} />
          <Route index  element={
            <CookiesProvider>

                <div>
                  {cookies.user || !cookies.user ? (
                    <Login onLogin={handleLogin} />
                  ) : (
                    <></>
                  )}
                </div>
              </CookiesProvider>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/updateprofile"
            element={
              <>
                <Header />
                <UpdateProfile user={cookies.user} />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <ElearningPage>
                <Header />
                <StudentProfile user={cookies.user} courseId = {handleCourseId} />
              </ElearningPage>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
