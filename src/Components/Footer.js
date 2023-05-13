import "./Footerstyle.css";
import React from 'react'
import {FaHome , FaPhone ,FaMailBulk, FaLinkedin, FaGithub} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
      <div className="left">
        <div className="location">
           <h4><FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/></h4>
            <div>
            <p>123,Madhuvan Society
            Nadiad</p>
            <br></br>
            <div className="phone">
           <h4> <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                  90816147--</h4>
                   </div>
        <div className="email">
       <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
           parikhpreksha10@gmail.com
       </h4>
            
        </div>  
           </div>
        </div>
        
      </div>
      <div className="right">
        
        <p>Here,you can Connect to my Social</p>
        <br></br>
        {/* <div className="social">
        <div className="phone"> */}
       <FaLinkedin size={20} style={{color:"#fff",marginRight:"2rem"}}/>
        <p>https://www.linkedin.com/in/parikh-preksha-087b39208/</p>  
        <br></br>
       <FaGithub size={20} style={{color:"#fff",marginRight:"2rem"}}/>
       <p>https://github.com/parikhpreksha</p>
        </div>
        </div>
      </div>

    //   </div>
    // </div>
  )
}

export default Footer
