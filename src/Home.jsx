import { createContext, useContext, useState } from "react"

import facebook from "./social Media/facebook.png";
import twitter from "./social Media/twitter.png";
import instagram  from "./social Media/instagram.png";
import ruby from "./image/ruby.png";
import Header from "./componentt/Header";
import Footer from "./componentt/Footer";


import home from "./image/home.png";
import about from "./image/about.png";
import contact from "./image/contact.png";
import project from "./image/projecticon.png";
import certificate from "./image/certificate.png";
import skills from "./image/skills.png";


import "./Home.css";
import { useNavigate } from "react-router";









const LinkContext = createContext(null);


function Content(){
  const link = useContext(LinkContext);
  const navigate = useNavigate();
 


 return(
  <div className="container-home">
  <Header link = {link}></Header>
  <main className="main-content-home" >
        <div className="container-title-home">
        <h1 className="role-home">SOFTWARE<br></br>DEVELOPER</h1>
        <h3 className="detail-role-home">FULLSTACK DEVELOPER</h3>
        <p className="description-role-home">I'm a passionate aspiring software developer who 
            enjoys creating innovative software solutions and continuously 
            exploring new technologies. I'm always eager to learn, improve my 
            programming skills, and expand my knowledge to grow as a 
            developer.
         </p>
       </div>
       <div className="home-container-layer-button">
         <div className="button-layer-home">
              <button className="button-home" onClick={()=> navigate("/project")}>See Project</button>
              <button className="button-home" onClick={()=> navigate("/contact")}>Hire Me</button>
         </div>
         <nav className="social-media-home">
           <a href="" className="social-media-link-home">
           <img src={twitter} alt="twitter"  className="social-media-link-home" />
           </a>
           <a href="">
           <img src={facebook} alt="facebook"  className="social-media-link-home" />
           </a>
           <a href="">
           <img src={instagram} alt="instagram"  className="social-media-link-home"/>
           </a>
         </nav>
      </div>
   <img src={ruby} alt="ruby" className="ruby-nee-home" />
   </main>
   <Footer></Footer>
  </div>
 
  )
}
export default function Home() {
     
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