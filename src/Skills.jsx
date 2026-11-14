
import SkillCard from "./componentt/SkillsCard";
import Header from "./componentt/Header";
import Fotter from "./componentt/Footer";


import java from "./programming/java.png";
import php from "./programming/php.png";
import luau from "./programming/luau.png";
import python from "./programming/python.webp";
import jS from "./programming/javascript.webp";

import react from "./programming/react.png";
import laverel from "./programming/lavarel.png";
import tailwind from "./programming/tailwind.png";
import mysql from "./programming/mysql.png";
import mongoDB from "./programming/mongoDB.png";

import home from "./image/home.png";
import about from "./image/about.png";
import contact from "./image/contact.png";
import project from "./image/projecticon.png";
import certificate from "./image/certificate.png";
import skills from "./image/skills.png";


import "./Skills.css";

export default function Skills(){
     const programming = [{title: "Java", image: java}, {title: "PHP", image: php}, {title: "Luau", image: luau},
      {title: "Python", image: python}, {title: "javaScript", image: jS}
     ];
     
     const framework = [{title: "React", image: react}, {title: "Lavarel", image: laverel}, {title: "Tailwind", image: tailwind}];
    
     const query = [{title: "MySQL", image: mysql}, {title: "mongoDB", image: mongoDB}]; 
       const links = [
                    {name:"HOME", path:"/", icon: home},
                    {name:"ABOUT", path:"/about", icon: about},
                    {name:"CONTACT", path:"/contact", icon: contact},
                    {name:"PROJECTS", path:"/project", icon: project},
                    {name:"CERTIFICATE", path:"/certificate", icon: certificate},
                    {name:"SKIILS", path:"/skills", icon: skills}
                ];
    


     return(
        
        <> 
         
<div className="container-skills">
    <Header link={links} />

    <h1>Programming Skills</h1>
    <div className="container-skills-card">
        {programming.map((item) => (
            <SkillCard
                key={item.title}
                title={item.title}
                image={item.image}
            />
        ))}
    </div>

    <h1>Framework</h1>
    <div className="container-skills-card">
        {framework.map((item) => (
            <SkillCard
                key={item.title}
                title={item.title}
                image={item.image}
            />
        ))}
    </div>

    <h1>Query Language</h1>
    <div className="container-skills-card">
        {query.map((item) => (
            <SkillCard
                key={item.title}
                title={item.title}
                image={item.image}
            />
        ))}
    </div>
    <Fotter></Fotter>
</div>

         
                 
        </>
    )
}