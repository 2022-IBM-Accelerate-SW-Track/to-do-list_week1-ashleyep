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
              <ul>
                <li>University of Michigan Class of 2025</li>
                <li>Major: Computer Science Engineering</li>
                <li>Minor: Art & Design </li>
              </ul>
              Hobbies 
              <ul>
                <li>Reading, Watching TV, Listening to Music </li>
                <li>Crocheting, Knitting, Painting, Drawing</li>
                <li>Playing with my Dog</li>
              </ul>
              Fun Facts
              <ul>
                <li>I've had 3 beta fishes all named Oceay but with "Junior" and "Junior Junior" tacked on</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}