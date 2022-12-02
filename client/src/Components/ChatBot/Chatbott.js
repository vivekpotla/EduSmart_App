import React, { useState } from 'react'
import ChatBot from 'react-simple-chatbot';
import {Button} from 'react-bootstrap';
import  {useSelector} from 'react-redux';
import { FcAssistant} from "react-icons/fc";
import { SlClose } from "react-icons/sl";
import './Chatbott.css';

function Chatbott() {

    const isLoggedIn = useSelector((state)=>state.isLoggedIn);
    const userType = localStorage.getItem("userType");
  
   const[displaychat,setDisplay] = useState(false);
  
    // CHAT-BOT DATA 
var steps;
if(!isLoggedIn)
{
    steps = [

        {
          id: "Greet",
          message: "Hi! Iam Jarvis, from support team of eduSmart",
          trigger: "Done",
    
        },
    
        {
          id: "Done",
          message: "Please enter your name!",
          trigger: "waiting1",
    
        },
    
        {
          id: "waiting1",
          user: true,
          trigger: "Name",
    
        },
        {
          id: "Name",
          message: "Hi {previousValue}, Please select your issue",
          trigger: "issues",
    
        },
    
        {
        id: "issues",
          options: [
            {
              value: "Login",label: "Login",trigger: "Login",
            },
            { value: "Signup", label: "Signup", trigger: "Signup" },
    
          ],
    
        },
    
        {
    
          id: "Login",
          message:"Thanks for letting your Login issue, Our team will resolve your issue ASAP",
          end: true,
    
        },
        {
          id: "Signup",
          message: "Thanks for letting your Signup issue, Our team will resolve your issue ASAP",
          end: true,
        },
    
      ]; 
}
else
{
    steps = [

        {
          id: "Greet",
          message: "Hi! Iam Jarvis, from support team of eduSmart",
          trigger: "Done",
    
        },
    
        {
          id: "Done",
          message: "Please enter your name!",
          trigger: "waiting1",
    
        },
    
        {
          id: "waiting1",
          user: true,
          trigger: "Name",
    
        },
        {
          id: "Name",
          message: "Hi {previousValue}, Please select your issue",
          trigger: "issues",
    
        },
    
        {
        id: "issues",
          options: [
            {
              value: "classroom",label: "classroom",trigger: "classroom",
            },
            { value: "Fastest-Fingers", label: "Fastest-Fingers", trigger: "Fastest-Fingers" },
    
          ],
    
        },
    
        {
    
          id: "classroom",
          message:"Thanks for letting your classroom issue, Our team will resolve your issue ASAP",
          end: true,
    
        },
        {
          id: "Fastest-Fingers",
          message: "Thanks for letting your Fastest-Fingers issue, Our team will resolve your issue ASAP",
          end: true,
        },
    
      ]; 
}
  

  return (
    <div>
        {displaychat && <> <ChatBot headerTitle="Support"  className="chatbot" recognitionEnable={true} steps={steps}/>
        <h1 onClick={()=> {setDisplay(false)}} className='chatbotcross'  >  <SlClose size="0.7em" color='white' /></h1>
        </> 
        }
        {/* <BsChatTextFill/> */}
        {!displaychat && <h1 onClick={()=> {setDisplay(true)}} className='chatbotbtn'> <FcAssistant  size="1.5em"/></h1>}
    </div>

  )
}

export default Chatbott