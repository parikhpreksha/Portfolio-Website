import "./Workcardstyle.css";
import "./Heroimg2style.css"; 

import React from 'react'
import ecommerce from "../assets/ecommerce.png";
const Workcard = () => {
  return (
    <div className="work-container">
    <h1 className="project-heading">Projects</h1>
    <div className="project-container"> 
    <div className="project-card">
    <img src={ecommerce} alt="image"/>
    <h2 className="project-title">Invisible-cloak</h2>
    <div className="pro-details">
      <p>In the Harry Potter franchise, there was a piece of magical cloak called ‘the indivisibility cloak’ that could make you invisible if you wear it. It looked so cool and caught everyone’s imaginations especially the children. But you know what is cooler – making your own invisibility cloak using OpenCV Python and we will teach you how to do it yourself.</p>
    </div>
</div>
<div className="project-card">
    <img src={ecommerce} alt="image"/>
    <h2 className="project-title">Millionaire App</h2>
    <div className="pro-details">
      <p>
Millionaire AppMillionaire App
It is a React.js, Real world project that has quiz. Player will earn the money on winning to each question. This is the Web quiz app like Kaun Banega Crorepati with its amazing background music.</p>
    </div>
</div>
<div className="project-card">
    <img src={ecommerce} alt="image"/>
    <h2 className="project-title">Real-Time Weather App</h2>
    <div className="pro-details">
      <p>It is Real-time weather app. It predicts the current weather Condition by using open weather map API. This Project is API based. It shows Real-time Weather data.</p>
    </div>
</div>
<div className="project-card">
    <img src={ecommerce} alt="image"/>
    <h2 className="project-title">Memories App</h2>
    <div className="pro-details">
      <p>This project is MERN STACK project. This app will store our memories created. Individuals can post their daily interesting Anecdotes. It's a social Platform where people can enjoy, share, read, like or dislike the stories of their friends and other people from all around the world.</p>
    </div>
</div>

<div className="project-card">
    <img src={ecommerce} alt="image"/>
    <h2 className="project-title">TO-DO-LIST</h2>
    <div className="pro-details">
      <p>This project is Created using React.js. This project helps in managing our tasks, listing the tasks. Trying to add one extra feature in this project that is store the data in separate database.</p>
    </div>
</div>

<div className="project-card">
    <img src={ecommerce} alt="image"/>
    <h2 className="project-title">Portfolio Website</h2>
    <div className="pro-details">
      <p> It is a React.js based portfolio website. It includes my Professional details.</p>
    </div>
</div>
   </div>
</div>

    
  )
}

export default Workcard
