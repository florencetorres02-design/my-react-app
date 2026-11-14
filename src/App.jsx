import { BrowserRouter, Route, Routes } from "react-router";


import Contact from "./Contact";
import Project from "./Project";
import Home from "./Home";
import Skills from "./Skills";
import About from "./About";
import Certicate from "./Certificate";
import LetsSTalk from "./LetsTalk";

import { HashRouter } from "react-router";






function App() {
    
   
     return(
     <>
       <HashRouter>
          <Routes>
             <Route path="/"  element = {<Home/>}/>
             <Route path="/about"  element = {<About/>}/>
             <Route path="/project"  element = {<Project/>}/>
             <Route path="/skills"  element = {<Skills/>}/>
             <Route path="/contact" element = {<Contact/>}/>
             <Route path="/certificate" element = {<Certicate/>}/>
             <Route path="/letstalk" element = {<LetsSTalk/>}/>
          </Routes>
       </HashRouter>
       
     </>
    )
      
        
}

export default App
