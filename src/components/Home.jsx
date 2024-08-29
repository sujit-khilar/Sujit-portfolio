import React from 'react';
import pdf from '../pdf/Sujit-kumar-khilar-3.0.pdf';
import hero from './Data/hero.json';
import Typed from 'typed.js';
import { useEffect } from 'react';
import { useRef } from 'react';

const Home = () => {

  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile...",
        "My Name is Sujit Khilar..",
        "I'm Frontend developer!",
        "I'm Web developer!",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true, 
    }

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    }
  },[])


  return (
    <>
      <header className="container home" id='home'>
        <div className="home_left" data-aos='fade-up-right'
          data-aos-duration='1000'>
          <span ref={typedRef}/><br />
          <a href={pdf} download="Sujit.pdf" className="btn btn-outline-warning my-3">Download Resume</a>
        </div>
        <div className="home_right" data-aos='fade-up-left'
          data-aos-duration='1000'>
          <div className="img">
            <img src={`/assets/${hero.imgSrc}`} alt="sujit" />
          </div>
        </div>
      </header>
    </>
  )
}

export default Home