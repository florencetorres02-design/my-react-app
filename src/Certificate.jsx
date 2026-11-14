
import Header from "./componentt/Header";
import Footer from  "./componentt/Footer";

import rubyCry from "./image/ruby not found.png";

import "./Certificate.css";
import home from "./image/home.png";
import about from "./image/about.png";
import contact from "./image/contact.png";
import project from "./image/projecticon.png";
import certificate from "./image/certificate.png";
import skills from "./image/skills.png";


export default function Certicate(){
     const links = [
       {name:"HOME", path:"/", icon: home},
       {name:"ABOUT", path:"/about", icon: about},
       {name:"CONTACT", path:"/contact", icon: contact},
       {name:"PROJECTS", path:"/project", icon: project},
       {name:"CERTIFICATE", path:"/certificate", icon: certificate},
       {name:"SKILLS", path:"/skills", icon: skills}
      ];
     
   return (
      <div className="certificate-container">
        <Header link = {links} ></Header>
        <div className="certificate-404-not-found">
           <img src={rubyCry} alt="ruby not found" className="ruby-nee-cry" />
           <h1 className="heading-not-found">404 NOT FOUND</h1>
        </div>
        <Footer></Footer>
     </div>
   )
}