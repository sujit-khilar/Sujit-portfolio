import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const Contact = () => {
  return (
    <>
      <section className="container contact" id='contact'>
         <h1>CONTACT ME</h1>
         <div className="contact-icon" data-aos='zoom-in-up'
          data-aos-duration='1000'>
            <a className="items"><FaInstagram className='icons'/>
            </a>
            <a className="items"><CiFacebook className='icons'/>
            </a>
            <a href='https://www.linkedin.com/in/sujit-kumar-khilar/' className="items"><CiLinkedin className='icons'/>
            </a>
            <a className="items"><FaSquareXTwitter className='icons'/>
            </a>
            <a href='https://github.com/sujit-khilar' className="items"><FaGithub className='icons'/>
            </a>
            <a href='mailto:sujitkhilar06@gmail.com' className="items"><SiGmail className='icons'/>
            </a>
         </div>
      </section>
    </>
  )
}

export default Contact