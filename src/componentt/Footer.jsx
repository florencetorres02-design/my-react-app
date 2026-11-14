import about from "./image/about.png";
import contact from "./image/contact.png";
import project from "./image/projecticon.png";
import support from "./image/heart.png";
import logo from "./image/logo.png";
import intagram from "./image/instagram.png";
import facebook from "./image/facebook.png";
import twitter from "./image/twitter.png";

import "./CssFile/footer.css";

export default function Footer(){
   return(
       <footer>
        <div className="row-one-footer">
            <p className="footer-role-owner">
              BS Computer Science Student | Aspiring Web Developer  
            </p>
            <nav className="footer-nav">
                <a href="" className="footer-a"><img src={about} alt="About Me" height={30} width={30}/>Abou Me</a>
                <a href="" className="footer-a"><img src={contact} alt="Contact Me" height={30} width={30}/>Contact Me</a>
                <a href="" className="footer-a"><img src={project} alt="Project Documentation" height={30} width={30}/>Project Documentation</a>
                <a href="" className="footer-a"><img src={support} alt="Support" height={30} width={30}/>Support?</a>
            </nav>
        </div>

        <div className="row-two-footer">
            <div className="footer-profile">
                <img src={logo}  alt="logo"  height={100} width={100}/>
                <h3 className="footer-name-owner">
                FLORENCE<br></br>
                LORICA
               </h3>
            </div>
            <nav className="footer-policy-nav">
                <a href="" className="rules-link">Privacy Use |</a>
                <a href=""  className="rules-link">Term of Use |</a>
                <a href=""  className="rules-link">Disclaimer |</a>
                <a href="" className="rules-link">Cookie Policy</a>
            </nav>
            <p className="credit">@2026 Florence Lorica.All Rights Reserved</p>
            <p className="made">Made With React</p>
         </div>

        <div className="row-three-footer">
              <h2>Visit Me</h2>
              <nav className="footer-media-nav">
                <a href="" className="footer-media"><img src={intagram} alt="twitter" className="footer-media-pic" /></a>
                <a href="" className="footer-media"><img src={facebook} alt="github"  className="footer-media-pic" /></a>
                <a href="" className="footer-media"><img src={twitter} alt="twitter"  className="footer-media-pic" /></a>
         </nav>
        </div>
    </footer>
   )
}