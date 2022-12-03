import React, { useEffect } from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"
import './Homee.css'
import { useDispatch } from "react-redux"
import { authActions } from "../../../store"
const Home = () => {

  let dispatch = useDispatch()

   
  useEffect(()=>{
    dispatch(authActions.inHome())
  },[])

   
  return (
    <div className="Totall ">
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonal />
      <Hblog />
       
    </div>
  )
}

export default Home
