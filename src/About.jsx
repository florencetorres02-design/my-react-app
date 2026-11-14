
import { createContext, useContext, useState } from "react"
import rubyKurosawa from "./image/ruby.png";

import react from "./programming/react.png";
import mysql from "./programming/mysql.png";
import java from "./programming/java.png";
import python from "./programming/python.webp";

import "./About.css";
import Header from "./componentt/Header";
import Footer from  "./componentt/Footer";
import "./Certificate.css";

import home from "./image/home.png";
import about from "./image/about.png";
import contact from "./image/contact.png";
import project from "./image/projecticon.png";
import certificate from "./image/certificate.png";
import skills from "./image/skills.png";



const LinkContext = createContext(null);


function Content(){

 const link = useContext(LinkContext);
 
     

 return(
  <>
 <div className="container-About">
  <Header link = {link} isSticky = {true}></Header>
  <main className="main-content-about" >
       <div className="about-me-content">
        <div className="context-about-me">
          <h1 >About Me</h1>
          <p className="about-me-details">
            Hello! I'm Florence, a Computer Science student passionate about software development and technology.
            I enjoy building websites, exploring programming concepts, and understanding how software systems work. 
            My current focus is on front-end development, particularly HTML, CSS, JavaScript, and React.
            Beyond web development, I'm continuously expanding my knowledge of Python, PHP, databases, data structures and algorithms, 
            and computer networking.
            I believe that becoming a good developer requires continuous learning, practical experience, and the willingness to solve challenging problems
            My goal is to become a skilled software developer who can create innovative, efficient, and user-friendly applications.
          </p>
        </div>
        <div className="programming-skills">
          <img src={mysql} alt="mysql" className="programming-skills-pic" />
          <img src={java} alt="java" className="programming-skills-pic"/>
          <img src={react} alt="react" className="programming-skills-pic" />
          <img src={python} alt="python" className="programming-skills-pic" />
          </div>
         <img src={rubyKurosawa} alt=""  className="ruby-nee-about"/>
      </div>
   </main>
   <Footer></Footer>
  </div>


 </>
 );
}


export default function About() {
    const links = [
          {name:"HOME", path:"/", icon: home},
          {name:"ABOUT", path:"/about", icon: about},
          {name:"CONTACT", path:"/contact", icon: contact},
          {name:"PROJECTS", path:"/project", icon: project},
          {name:"CERTIFICATE", path:"/certificate", icon: certificate},
          {name:"SKILLS", path:"/skills", icon: skills}
      ];
     return(
     <>
     <LinkContext.Provider value = {links}>
          <Content/>
    </LinkContext.Provider>
    </>
    
  )
}