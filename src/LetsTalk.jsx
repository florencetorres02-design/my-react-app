import Header from "./componentt/Header";
import Footer from "./componentt/Footer";
import "./letsTalk.css";
import telegram from "./image/telegram.png";
import whatsapp from "./image/whatsapp.png";
import messenger from "./image/messenger.png";


import home from "./image/home.png";
import about from "./image/about.png";
import contact from "./image/contact.png";
import project from "./image/projecticon.png";
import certificate from "./image/certificate.png";
import talk from "./image/talk.png";
import skills from "./image/skills.png";


export default function LetSTalk(){

     const links = [
         {name:"HOME", path:"/", icon: home},
         {name:"ABOUT", path:"/about", icon: about},
         {name:"CONTACT", path:"/contact", icon: contact},
         {name:"PROJECTS", path:"/project", icon: project},
         {name:"CERTIFICATE", path:"/certificate", icon: certificate},
         {name:"SKILLS", path:"/skills", icon: skills}
         ];
   
    return (
<>
<Header link = {links}></Header>
<div className="container-lets-talk">
    <div className="lets-connect-card">
        <div className="lets-coneect-container">

            <div className="lets-connect-profile">
                <div className="lets-talk-profile"></div>
                <h2>Let's Connect</h2>
                <p>Choose your preferred way to reach me.</p>
            </div>

            <nav className="lets-connect-nav">

                <a href="https://web.telegram.org/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="lets-connect-a">
                    <img src={telegram}
                         alt="Telegram"
                         className="lets-connect-image" height={35} width={35}/>
                    Telegram
                </a>

                <a href="https://wa.me/YOUR_PHONE_NUMBER"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="lets-connect-a">
                    <img src={whatsapp}
                         alt="WhatsApp"
                         className="lets-connect-image"  height={35} width={35}/>
                    WhatsApp
                </a>

                <a href="https://www.messenger.com/"
                   className="lets-connect-a">
                    <img src={messenger}
                         alt="Email"
                         className="lets-connect-image"  height={35} width={35}/>
                    Email
                </a>
        </nav>
        </div>
        
    </div>

   </div>
    <Footer></Footer>
   </>

    )
}