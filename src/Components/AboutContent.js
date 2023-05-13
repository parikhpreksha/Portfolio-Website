import "./AboutContentstyle.css";
import React from 'react'
import "./Aboutstyle.css";

const AboutContent = () => {
  return (
    <div className="about">
    <div className="left">
<h1>Skills</h1>
<br></br>
    <p>
    <li>Html,Css,Javascript</li>
    <li>React js</li>
    <li>Bootstrap</li>
    <li>Basics of c,c++</li>
    <li>MongoDb</li>
    <li>SQL</li>
    <li>Computer Network</li>
    <li>Java</li>
    <li>Mysql</li>
    <li>Object oriented programming</li>
    <li>Data Structure and Algorithms</li>
    <li>Operating System</li>
    <li>Presentation Skill</li>
    <li>Python programming</li>
    <li>Time Management</li>
    </p>
   </div>
    <div className="right">
        <h1>About Me</h1>
        <p>I'm a Bachelor of Technology <br></br>GRADUATING in Information Technology <br></br>at Devang Patel Institute of<br></br> Advance Technology and Research, CHARUSAT.<br></br>I m a very Adaptive in nature,<br></br>I m very self-motivated and confident.<br></br>My areas of interest are Frontend, Backend, <br></br>UI/UX and Cloud. </p>
       <br></br> <a href="example.pdf" download class="download-button">Download Resume</a>
    </div>
    
      
    </div>
  )
}

export default AboutContent
