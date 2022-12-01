
import SignUp from './Components/SignUpComponent/SignUp'
import Login from './Components/LoginComponent/Login'
import React from 'react'
import {Routes,Route} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import { authActions } from './store';
import {useEffect} from 'react';
import Navbarr from './Components/Navbarr';
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
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
    </div>
  )
}

export default App