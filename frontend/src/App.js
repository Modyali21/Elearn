import './App.css';
// import {ElearningPage,ProfileImage, Header,UserInfo,SideBar,EnrolledCourses,MutualFriends,EnrolledCP,Signup,Login} from "./components/index"
// import {UpdateProfile} from "./components/index"
import {Admin} from "./components/index"
import {Header} from "./components/index"
// import {BrowserRouter,Route, Routes} from "react-router-dom"
function App() {
  
  return (
    <> 
      <Header/>
      <Admin />
      {/* <BrowserRouter>
        <Routes>
          <Route index  element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/updateprofile" element={
          <>
            <SideBar/>
            <UpdateProfile/>
          </>
          } />
          <Route path="/profile" element={
            
            <ElearningPage>
              <Header/>
              <SideBar/>
              <ProfileImage position={"Instructor"} name={"Mohamed Elnady"}/>
              <UserInfo information={
                {name : "Ziad Aly",
                dateofbirth : "20/5/2011",
                gender:"Male",
                school:"EL-Ekhlas",
                degree:"PHD"}
                }/>
              <EnrolledCP>
              <EnrolledCourses/>
              <MutualFriends/>
            </EnrolledCP>
            
        
        </ElearningPage>
          } />
          
        </Routes>
      </BrowserRouter> */}
    </>
      

  );
}

export default App;
