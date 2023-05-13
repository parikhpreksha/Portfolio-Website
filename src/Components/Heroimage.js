import "./HeroimageStyle.css";
import React from 'react'

import Homebg from "../assets/Homebg.jpg";
import { Link } from "react-router-dom";
const Heroimage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={Homebg} alt="Homebg"/>
      </div>
      <div className="content">
        <p>HI,I'M A PREKSHA PARIKH.</p>
        <h1>Web Developer</h1>
        <div>
            <Link to="/Project" className="btn">Projects</Link>
            <Link to="/Contact" className="btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Heroimage
