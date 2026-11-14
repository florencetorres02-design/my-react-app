import "./CssFile/cardProject.css";

export default function CardDevelopment(props){
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
             <p>
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
            </div>
        </div>
    )
}
