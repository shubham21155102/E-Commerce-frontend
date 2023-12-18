import React, { useEffect, useState } from 'react'
import Classes from "./style/contact.module.css"
const ContactUs = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [url,setUrl]=useState('');
    useEffect(()=>{
      try{
        const url=localStorage.getItem('url');
        setUrl(url);
      }
      catch(err){
        console.log(err)
      }
    
    },[url])
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            email: email,
            message: message,
            subject: subject,
            url:url
        }
        console.log(data)
        fetch("/api/contactus", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)

        })
        alert("Email sent successfully")
    }

  return (
   <>
      <form className={Classes.container} onSubmit={handleSubmit}>
                <label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={Classes.input_name}
                    required
                  />
                  <input
                    type="text"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={Classes.input_mail}

                    required
                  />
                  <input 
                  type='text'
                    placeholder='Subject'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className={Classes.input_mail}
                    required
                    />
                  <input
                    type="text"
                    value={message}
                    placeholder="Tell us about anything and everything"
                    onChange={(e) => setMessage(e.target.value)}
                    className={Classes.input}
                    required
                  />
                  
                </label>
                <button type="submit" className={Classes.button}
                // onClick={contactUs}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="34"
                    viewBox="0 0 33 34"
                    fill="none"

                  >
                    <path
                      d="M1.79297 31.5817L30.2794 3.09534"
                      stroke="#4F44A7"
                      stroke-width="3"
                      stroke-linecap="round"
                    /> <path
                      d="M11.4961 2.15625H28.9044C30.009 2.15625 30.9044 3.05168 30.9044 4.15625V20.3124"
                      stroke="#4F44A7"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </form>
   </>
  )
}

export default ContactUs