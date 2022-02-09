import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
import insta from "./images/instagram.png"
import twitter from "./images/twitter.png"



const Footer = () => {
  const year = new Date().getFullYear();
  
  {/* <style>
  .footer {
     position: fixed;
     left: 0;
     bothrefm: 0;
     width: 100%;
     background-color: red;
     color: white;
     text-align: center;
  }
  </style> */}
 
 
  return (
    <footer>
    <a href="https://www.instagram.com/beast0o7"
        target={"_blank"}>
        <img className="social mx-1" src={insta} alt="Instagram" />
      </a>
      <a href="https://twitter.com/beast0o7"
        target={"_blank"}>
        <img className="social mx-1" src={twitter} alt="Instagram" />
      </a>
      <p className='pb-0 mb-0'>Mahad Ansari ⓒ {year}</p>
    </footer>
  );
  
  
  
 
};

export default Footer;
