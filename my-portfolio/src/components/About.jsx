import { useRef} from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {ABOUT} from "../config/constants"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const About = () => {
  const aboutRef = useRef(null);

  useGSAP(() => {
    const aboutContainer = aboutRef.current;
    const heading = aboutRef.current.querySelector('.section_heading');
    const captionText = aboutRef.current.querySelector('.section_text_p1');
    const aboutTexts = aboutRef.current.querySelectorAll('.section_text_p2');
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutContainer,
        start: "top 80%",
        end: "bottom 70%",
        toggleActions: "play none none none",
        // markers: true,
      },
    });
  
    tl.from(heading, {
      opacity: 0,
      y: 30,
      duration: 0.6,
    })
    .from(captionText, {
      opacity: 0,
      y: 30,
      duration: 0.6,
    })
  
    .from(aboutTexts, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.2,
    });
  
  }, { scope: aboutRef });


  return (
    <Box ref={aboutRef} as="section" id="about">
      <Typography variant="caption" className="section_text_p1">Get To Know More</Typography>
      <Typography variant="h3" className="section_heading">About Me</Typography>
      <Box mt={4} className="text-container">
         { ABOUT?.length > 0 && ABOUT.map((item, index) => (
            <Typography as="p" key={index} variant="body1" className="section_text_p2">{item}</Typography>
         ))}
      </Box>
    </Box>
  );
};

export default About;
