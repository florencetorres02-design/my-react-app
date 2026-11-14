import { act, useState } from "react"
import "./CssFile/sidebar.css";
import { NavLink, useNavigate } from "react-router";
import logo from "./image/logo.png";

import facebook from "./follow/facebook.png";
import github from "./follow/githubs.png";
import twitter from "./follow/twitter.png";
import talk from "./image/talk.png";






export default function SideBar(props){
     const [isOpen, setIsOpen] = useState(false);
     const navigate = useNavigate();
  
     return (
       <>
             <button className="menu-btn" 
             onClick={() => setIsOpen(true)}
              > ☰ </button>
          

            {/* Background overlay */}
            <div
                className={`backdrop ${isOpen ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
            />

            
            <aside className={`sidebar ${isOpen ? "open" : ""}`}>
                  <div className="sidebar-header">
                     <img  src={logo} alt ="logo" height={70} width={70}></img>
                     <button
                        className="close-btn"
                        onClick={() => setIsOpen(false)}
                     >
                        ✕
                     </button>
                 </div>

                 <nav className="sidebar-nav" style={{display: "flex"}}>
                   <h2 className="menu-heading">MENU</h2>
                     {props.link.map((link, index) => (
                     <NavLink key={index} to={link.path} style={{display: "flex", alignItems: "center", gap: "1rem"}} 
                     className={({isActive}) => isActive ? "active" : ""} >
                     <img src={link.icon} width={30} height={30} />
                     {link.name}
                     </NavLink >
                     ))}
                     
                     <NavLink to = "/letstalk" 
                     style={{display: "flex", alignItems: "center", gap: "1rem", color:"black"}}>
                       <img src={talk} width={30} height={30} />
                      LET'T TALK
                     </NavLink>
                  </nav>
                 <hr className="sidebar-line" />
                 <nav className="sidebar-nav" style={{display: "flex"}}>
                  <h2 className="menu-heading">VISIT ON ME</h2>
                  <a href=""  style={{display: "flex", alignItems: "center", gap: "1rem"}}>
                    <img src={facebook} alt="facebook" width={30} height={30} />
                    FACEBOOK
                  </a>
                  <a href="" style={{display: "flex", alignItems: "center", gap: "1rem"}}>
                     <img src={github} alt="github" width={30} height={30}/>
                    GITHUB
                    </a>
                  <a href=""  style={{display: "flex", alignItems: "center", gap: "1rem"}}>
                    <img src={twitter} alt="twitter" width={30} height={30}/>
                    TWITTER(X)
                  </a>
                 </nav>
                  <hr className="sidebar-line" />
                 <div className="profile-sidebar-container">
                   <div className="profile-sidebar-pic"></div>
                     
                    <div className="profile-pic-sidebar"></div>
                     <div className="profile-name-sidebar">
                       <h3>Florence Lorica</h3>
                       <span>florencelorica02@yahoo.com</span>
                    </div>
                  </div>

             </aside> 
            </>
        
    );

}