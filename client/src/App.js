import SignUp from './Components/SignUpComponent/SignUp'
import Login from './Components/LoginComponent/Login'
import React from 'react'
import {Routes,Route} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import { authActions } from './store';
import {useEffect} from 'react';
import Navbarr from './Components/Navbarr';
// import Home from './Components/Home';
import AddClassroom from './Components/classroom/AddClassroom';
import MainClassroom from './Components/classroom/MainClassroom';
import Typing from "./Components/TypingComponent/Typing";
import Chatbott from './Components/ChatBot/Chatbott.js';
import DetailedClass from './Components/classroom/DetailedClass';
import Home from "./Components/Landing/home/Homee"
//import './App.css'


function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state)=>state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(()=>
  {
    if(localStorage.getItem("userId"))
    {
      dispatch(authActions.login());
    }
  },[dispatch]);
  const userType = localStorage.getItem("userType");






  return (
    <div>
      <Navbarr/>
      <hr className='text-dark'/>
      
      <Routes>
        {!isLoggedIn && 
        <>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/' element={<Home/>} />
        </>}
        {isLoggedIn && 
        <>
        <Route path='/' element={<Home/>} />
        {userType === "faculty" && <Route path='/addclass' element={<AddClassroom/>} />}
         <Route path='/mainclass' element={<MainClassroom/>} />
         <Route path='/typing' element={<Typing/>} />
         <Route path='/mainclass/:id' element={<DetailedClass/>} />
        </>}

      
      </Routes>
      
     <Chatbott/>
    
      
    </div>
  )
}

export default App