
import "./CssFile/seeProject.css";
import project  from "./image/Project.png";
import gihhub from "./image/github.png";

export default function SeeProjectCard(){
  return(
    <>
     <div className="see-project-container">
         <div className="corner1">
            <h1>
              SEE MY<br></br>
              PROJECT
            </h1>
             <button className="project-button"><a href=""><img src={gihhub} alt="github" className="github" /> Github</a></button>
         </div>
         <img src={project} alt="project" className="project-image" />
     </div>
    </>

)
}

