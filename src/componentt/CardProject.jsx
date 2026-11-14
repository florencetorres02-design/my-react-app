import "./CssFile/cardProject.css";
import github from "./image/github.png";

export default function CardPrject(props){
      return(
        <div className="project-card" style={{
         backgroundImage: `
      linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 0.8)
      ),
      url(${props.image})
    `
  }}>
          <div className="project-content">
             <h2>{props.title}</h2>
             <p className="deatil-project">
               {
                  props.details
               }
             </p>
             <nav className="tech-feature">
               {
                  props.link.map((index)=>{
                     return <a key={index}>{index}</a>
                  })
               }
             </nav>
             <button className="button-view-project">
              <a href="">
                 <img src={github} alt="github" />
                 <span>Github</span>
              </a>
             </button>
          </div>
        </div>
    )
}

