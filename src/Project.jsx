
import Header from "./componentt/Header";
import SeeProjectCard from "./componentt/SeeProject";
import CardProject from "./componentt/CardProject";
import  CardDevelopment from "./componentt/CardDevelopment";
import Footer from  "./componentt/Footer";

import pokemon from "./image/pokemon.jpg";
import aqoursimg from "./image/aqours.png";
import finding from "./image/finding.png";
import development from "./image/under development.png";
import projectimg from "./image/project.png";


import home from "./image/home.png";
import about from "./image/about.png";
import contact from "./image/contact.png";
import project from "./image/projecticon.png";
import certificate from "./image/certificate.png";
import skills from "./image/skills.png";




import "./Project.css";


export default function Project(){
    const links = [
             {name:"HOME", path:"/", icon: home},
             {name:"ABOUT", path:"/about", icon: about},
             {name:"CONTACT", path:"/contact", icon: contact},
             {name:"PROJECTS", path:"/project", icon: project},
             {name:"CERTIFICATE", path:"/certificate", icon: certificate},
             {name:"SKILLS", path:"/skills", icon: skills}
          ];
   
   const pokemonApi = ["js", "HTML", "CSS", "API"]; 
   const aqoursWeb = ["HTML", "CSS"]

   const pokemonDeatail = [
     " Developed a Pokémon project using React and the Pokémon API to dynamically fetch and display Pokémon data, including their name images, types, and abilities."
   ];

   const aqours = "A fan-made Love Live! Sunshine!! website dedicated to Aqours, featuring its members, profiles, music, and memorable moments from the series."
   const cvsu_lost_and_found = "A Lost and Found Management System that allows users to report missing items, browse found belongings, and help reunite lost possessions with their rightful owners."

   const eCommerce = "An E-Commerce platform currently under development, designed to provide users with a seamless online shopping experience through product browsing, search, and purchasing features.";
   const enrollment = "An Enrollment Management System designed to simplify student registration, manage academic records, and streamline the enrollment process.";
   const novel = "An interactive Visual Novel that lets players experience an engaging story through character dialogues, meaningful choices, and multiple possible endings.";

   const schedule = "A Schedule Monitoring System that helps track project timelines, monitor task progress, manage deadlines, and ensure projects stay on schedule.";
   const AI = "An AI-powered application that integrates external AI APIs to generate intelligent responses, process user inputs, and provide automated assistance.";

   const Game = "Developed Roblox games using Luau scripting, implementing interactive gameplay mechanics, player systems, and engaging in-game experiences.";
    return(
      <>
        <div className="container-project">
        <Header link = {links}></Header>
         <div className="project-board">
           <SeeProjectCard></SeeProjectCard>
         </div>
     
       <main className="projects-container">
           <h1 className="title-project">Completed</h1>
           <div className="card-container">
             <CardProject link = {pokemonApi} details = {pokemonDeatail} title = {"Pokemon API"} image = {pokemon} />
             <CardProject link = {aqoursWeb} details = {aqours} title = {"Aqours Webiste"} image = { aqoursimg }/>
             <CardProject link = {["React", "CSS", "PHP", "Mysql" ]} details ={cvsu_lost_and_found} title = {"Lost & Found"} image = {finding}></CardProject>
           </div>
            <h1 className="title-project">In Progress</h1>
              <div className="card-container">
              <CardDevelopment  link = {["React", "CSS", "Kotlin","Java", "Mysql", "Lavarel", "PHP"]} details ={eCommerce} title = {"E-Commerce"} image ={development}></CardDevelopment>
              <CardDevelopment  link = {["React", "CSS", "Lavarel", "Mysql", "PHP" ]} details ={enrollment} title = {"Enrollment System"} image ={development}></CardDevelopment>
              <CardDevelopment  link = {["Python", "Ren'Py", "PHP", "Mysql" ]} details ={novel} title = {"Visual Novel"} image ={development}></CardDevelopment>
           </div>

            <h1 className="title-project">Planned</h1>
              <div className="card-container">
              <CardDevelopment  link = {["React", "CSS", "Kotlin","Java","Mysql", "Lavarel", "PHP"]} details ={schedule} title = {"Schedule Monitoring"}  image = {projectimg}></CardDevelopment>
              <CardDevelopment  link = {["React", "CSS", "Lavarel", "Mysql", "PHP", "Kotlin", "AI" ]} details ={AI} title = {"AI API"} image = {projectimg}></CardDevelopment>
              <CardDevelopment  link = {["Luau"]} details ={Game} title = {"Roblox Game"}image = {projectimg}></CardDevelopment>
           </div>
           </main>
            <Footer></Footer>
          </div>
         </>
    )
}