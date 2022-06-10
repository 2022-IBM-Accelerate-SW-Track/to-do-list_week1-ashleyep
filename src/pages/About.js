import React, { Component } from 'react';
import "./About.css";
import profile_pic_name from "../assets/profile_pic_name.jpeg";
import prom_pic from "../assets/prom_pic.JPG";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
           <div className="centered"> 
           <img 
              className="profile_image"
              src = {profile_pic_name}
              alt="Profile Pic"
            ></img> 

            <img 
              className = "profile_image"
              src = {prom_pic}
              alt = "Prom Pic"
            ></img>
          
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Ashley Philip</div>
            <div className="brief_description">
               I am a rising sophomore at the University of Michigan. I'm studying Computer 
               Science in the College of Engineering, with a minor in Art and Design. 
               Some of my favorite activities include: reading, watching TV, playing with my dog, 
               crocheting and knitting. 
            </div>
          </div>
        </div>
      </div>
    )
  }
}