
import { NavLink, useNavigate } from "react-router";
import "./CssFile/header.css";
import SideBar from "./SideBar";

import logo from "./image/logo.png";


import { useState, useEffect } from "react";


function useViewportWidth(){
   
    // Initialize as undefined to prevent Server-Side Rendering (SSR) errors
    const [width, setWidth] = useState(undefined);
    console.log(width)

    useEffect(()=>{
      const handleResize = ()=>{
        setWidth(window.innerWidth);
      };
     
       // Set the initial width once the component mounts on the client
      handleResize();
      window.addEventListener('resize', handleResize);
      // Clean up the event listener when the component unmounts
      return ()=> window.removeEventListener('resize', handleResize);

    },[]); 

    return width;
  }

  const swapButton = () => {
      const viewport = useViewportWidth();
      if(viewport <= 770){
        return true
      }else{
        return false
      }
  } 


export default function Header(props){
  
  const positionSticky = {
     position: "sticky",
     top: 0,
     zIndex: 100
  }

  const navigate = useNavigate();
   const defaultPosition = {
    position: "static"
  }
  const swap = swapButton();
  

   return(
    <header className="header-content" style={true ? positionSticky : defaultPosition}>
     <div className="logo-container">
       <img src={logo} alt="" />
      <h2>Florence<br></br>Lorica</h2>
     </div>
     <div className="second-Container">
     <nav className="navDekstop">
        {props.link.map((link, index) => (
        <NavLink key={index} to={link.path} style={{fontSize: "1rem", textDecoration: "none", fontWeight: "bold"}}
         className={({isActive}) => isActive ? "active" : ""}
        >
        {link.name}
        
      </NavLink>
       ))}
     </nav>
       {
         swap ? <SideBar link = {props.link}/> :  <button className="lets-talk" onClick={()=>navigate('/letstalk')}>Let's Talk</button>
       }
     </div>
   </header>
    )
}