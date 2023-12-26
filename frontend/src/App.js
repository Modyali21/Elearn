import './App.css';
import {ElearningPage,Header,CourseEnroll,MakeCourse,Signup,Login,StudentProfile, Course} from "./components/index"
import {UpdateProfile} from "./components/index"
import {Admin} from "./components/index"
import {BrowserRouter,Route, Routes} from "react-router-dom"
import { CookiesProvider, useCookies } from "react-cookie";
function App() {

  const [cookies, setCookie] = useCookies(["user"]);

  function handleLogin(user) {
    setCookie("user", user, { path: "/" });
  }
  return (

    <> 
      <BrowserRouter>
        <Routes>
          <Route path="/course" element={<Course />} />
          <Route path="/courseenroll" element={<CourseEnroll user={cookies.user} />} />
          <Route path="/makecourse" element={<MakeCourse user={cookies.user} />} />
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
          } />
          <Route path="/signup" element={<Signup />} />
          <Route path="/updateprofile" element={
          <>
            <Header/>
            <UpdateProfile user={cookies.user}/>
          </>
          } />
          <Route path="/profile" element={
            <ElearningPage>
              <Header/>
              <StudentProfile user={cookies.user}/>
            </ElearningPage >
          }/>
          </Routes>
      </BrowserRouter>
      
    </>
      

  );
}

export default App;
