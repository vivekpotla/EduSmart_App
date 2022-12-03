import React, { useState } from "react"
import "./header.css"
import { useSelector } from "react-redux"
import { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import { useDispatch } from 'react-redux';
import { Link, useNavigate,  } from 'react-router-dom';
import { authActions } from '../../../../store';
import Icon from '../../../../images/logo.png'

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  let [click, setClick] = useState(false)
  var headerStyle = useSelector((state=>state.headerStyle))
 
 

  return (
    <>
      <header>
        
        <nav className={headerStyle}>
        
        {isLoggedIn?  <ul className={click ? "mobile-nav pb-0" : "flexSB pb-0 "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'><img src={Icon} className='pe-2 '></img>EduSmart</Link>
            </li>
            <li>
              <Link to='/mainclass'>ClassRooms</Link>

            </li>
            {userType == "student" &&
            <li>
              <Link to='/typing'>Fastest-Fingers</Link>
            </li>
            }
          </ul>
          :<ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
          <li>
              <Link to='/'>Home</Link>
            </li>
            
          </ul>
          }
         { isLoggedIn && <div className="start active">
                  <Link className="text-white h3" to='/' onClick={() => {
                      localStorage.removeItem("userId");
                      localStorage.removeItem("userType");
                      dispatch(authActions.logout());
                      navigate("/");
                    }}>Logout</Link>
                    </div>}
          {!isLoggedIn && <div className='start'>
            <Link className="text-white h3"  to = "/signup">SignUp</Link>
                    
            <Link className="text-white h3 ps-4"  to = "/login">Login</Link>
          </div>}
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
