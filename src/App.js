import './App.css';
import {ElearningPage,ProfileImage, Header,UserInfo,SideBar,EnrolledCourses,MutualFriends,EnrolledCP} from "./components/index"
import {UpdateProfile} from "./components/index"

function App() {

  return (
    <>
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
        <UpdateProfile/>
      </ElearningPage>
    </>
  );
}

export default App;
