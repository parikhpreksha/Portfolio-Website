import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Heroimg2 from '../Components/Heroimg2';
import AboutContent from '../Components/AboutContent';
const About = () => {
  return (
    <div>
   <Navbar/>
   <Heroimg2 heading="About Me and My skills." text="I'm a friendly web developer"/>

   <AboutContent/>
  
      <Footer/>
    </div>
  )
}

export default About
