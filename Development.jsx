


import "./Project.css";



export default function Development(){ 
      const links = [
          {name:"HOME", path:"/"},
          {name:"ABOUT", path:"/about"},
          {name:"CONTACT", path:"/contact"},
         {name:"PROJECTS", path:"/project"}
        ];
        
        const pokemonApi = ["js", "HTML", "CSS", "API"]; 
        const aqoursWeb = ["HTML", "CSS"]
     
        const details = [
          " Developed a Pokémon project using React and the Pokémon API to dynamically fetch and display Pokémon data, including their name images, types, and abilities."
        ];
     
        const aqours = "A fan-made Love Live! Sunshine!! website dedicated to Aqours, featuring its members, profiles, music, and memorable moments from the series."
        const cvsu_lost_and_found = "A Lost and Found Management System that allows users to report missing items, browse found belongings, and help reunite lost possessions with their rightful owners."
     
         return(
           <>
             <div className="container">
             <Header link = {links}></Header>
             <SideBar link = {links}></SideBar>
              <nav className="project-link">
                <a href=""><h2>Finsihed</h2></a>
                <a href=""><h2 style={{color: "#A30707"}}>Under Development</h2></a>
                <a href=""><h2>Project Plans</h2></a>
             </nav>
             
             <main className="projects-container">
                <h1>Finished</h1>
                <div className="card-container">
                  <CardProject link = {pokemonApi} details = {details} title = {"Pokemon API"}/>
                  <CardProject link = {aqoursWeb} details = {aqours} title = {"Aqours Webiste"}/>
                  <CardProject link = {["React", "CSS", "PHP", "Mysql" ]} details ={cvsu_lost_and_found} title = {"Lost & Found"}></CardProject>
                 </div>
            </main>
            </div>
            </>
         )
}