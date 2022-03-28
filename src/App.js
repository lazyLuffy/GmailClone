import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Mail from "./Mail";
import EmailList from "./EmailList";
import SendMail from "./SendMail";
import { useSelector } from "react-redux";
// import { selectUser } from "./features/userSlice";
import Login from "./Login";
import { useDispatch } from "react-redux";
import { auth } from "./Firebase";
import { login, logout } from "./features/userSlice";
// import { selectMessageOpen } from "./features/mailSlice";



function App() {
  const {messageOpen} = useSelector(state=>state.mail);
  const {user} = useSelector(state=>state.user);
  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user)
      {
        dispatch(login({
          displayName:user.displayName,
          email:user.email,
          photoUrl:user.photoURL
        }))
      }else{
        dispatch(logout())
      }
    })
  },[])
  // console.log("hey iam sendmessage is open and -- ", messageOpen)

  return (
    <Router>
        {!user ? (<Login/>) : (

      <div className="App">
        <Header />
        <div className="app__body">
          <Sidebar />
            <Routes>
              <Route path ="/mail" element= {<Mail />}>
                
              </Route>
              <Route path = "/" element={<EmailList />}>
                
              </Route>
            </Routes>
        </div>
         {messageOpen && (<SendMail/>)}
      </div>
        )}
    </Router>
  );
}

export default App;
