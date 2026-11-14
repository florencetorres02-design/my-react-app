

import { useRef, useState } from "react";

import "./CssFile/ContactForm.css";
export default function Cont(){
    const inputRef = useRef(null);

    const [error, setError] = useState("");
    const [email, setEmail] = useState("");

 
     function errorMessage(){
        const  checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(!checkEmail.test(email)){
          setError("Please enter a valid email address (e.g., example@gmail.com).");
        }else{
            return 
        }
     }

     const handleClick = ()=>{
        inputRef.current.focus();
        errorMessage();
     }
     
     

   

    
      return(
         
    <section className="contact-section">
      <form
        className="contact-container"
        action="https://formsubmit.co/florencelorica757@gmail.com"
        method="POST"
      >
        <input
            type="hidden"
            name="_subject"
            value="New Portfolio Contact Message"
        />

        <input
            type="hidden"
            name="_captcha"
            value="true"
        />

        <div className="contact-header">
            <h1 className="contant-me">Contact Me</h1>
            <p className="info-header">
                Have a project or opportunity?
                Feel free to send me a message.
            </p>
        </div>

        <div className="contact-form">

            <div className="form-group">
                <input
                    type="text"
                    id="fullname"
                    name="name"
                    placeholder=" "
                    maxLength={100}
                    required
                />
                <label htmlFor="fullname">Full Name</label>
            </div>

            <div className="form-group">
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder=" "
                    maxLength={254}
                    onChange={(e)=> setEmail(e.target.value)}
                    ref={inputRef}
                    required
                />
                 
                <label htmlFor="email">Email Address</label>
              </div>
             {
                   error  && <p className="error-message">{error}</p>
                }

            <div className="form-group">
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder=" "
                    maxLength={150}
                    required
                />
                <label htmlFor="subject">Subject</label>
            </div>

            <div className="form-group textarea-group">
                <textarea
                    id="message"
                    name="message"
                    placeholder=" "
                    rows="5"
                    maxLength={3000}
                    required
                />
                <label htmlFor="message">Your Message</label>
            </div>

            <div className="privacy-group">
                <input
                    type="checkbox"
                    id="privacy"
                    required
                />
                <label htmlFor="privacy">
                    I agree to the processing of my
                    personal information for the
                    purpose of responding to my inquiry.
                </label>
            </div>

            <button type="submit" className="submit-btn" onClick={handleClick}>
                Send Message
            </button>

        </div>
    </form>
</section>

    )


}