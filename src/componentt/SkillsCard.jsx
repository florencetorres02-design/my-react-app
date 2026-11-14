
import "./CssFile/skillCard.css";

export default function SkillsCard(props){
   
    return(
    <div className="skills-card">
        <img src={props.image} alt= {props.title} className="tech-pic" />
        <h3>{props.title}</h3>
    </div>
    )
}