import { useRef } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {PROJECTS} from "../config/constants.jsx"
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);


const Projects = () => {

  const projectRef = useRef(null);

  useGSAP(()=>{

    const projectContainer = projectRef.current;
    const heading = projectRef.current.querySelector('.section_heading');
    const captionText = projectRef.current.querySelector('.section_text_p1');
    const subDetailBox = projectRef.current.querySelectorAll('.subdetail_container');
   
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: projectContainer,
      start: "top 80%",
      end: "bottom 70%",
      toggleActions: "play none none none",
      // markers: true,
    },
  });

  timeline.from(heading, {
    opacity: 0,
    y: 30,
    duration: 0.6,
  })
  .from(captionText, {
    opacity: 0,
    y: 30,
    duration: 0.6,
  })
  .from(subDetailBox, {
    opacity: 0,
    y: 50,
    duration: 0.6,
    stagger: 0.2
  });

}, { scope: projectRef });

  return (
    <Box ref={projectRef} as="section" id="projects">
      <Typography variant="caption" className="section_text_p1">Browse Through My</Typography>
      <Typography variant="h3" className="section_heading">Projects</Typography>
      <Box className="details_container">
      { PROJECTS?.length > 0 && PROJECTS.map((item) => (
          <Card variant="outlined" className="subdetail_container" key={item?.id}>
            <Box className="project-image">
              {item?.image}
            </Box>
            <Typography as="h3" sx={{marginTop: '8px'}}>{item?.title}</Typography>
            <Typography className="project-details" as="p">{item?.description}</Typography>
            <Box className="btn_container">
              <a className="view-project-btn" href={item?.link} target="_blank">View Project</a>
            </Box>

          </Card>
      ))}
      </Box>


      
    </Box>
  );
};

export default Projects;
