import { useRef } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { OTHER_PLATFORMS } from "../config/constants.jsx";
import Card from "@mui/material/Card";

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

  const platformRef = useRef(null);

  useGSAP(() => {
    const platformContainer = platformRef.current;
    const caption = platformRef.current.querySelector('.section_text_p1');
    const heading = platformRef.current.querySelector('.section_heading');
    const subDetailBox = platformRef.current.querySelectorAll('.subdetail_container');

    
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: platformContainer,
            start: "top 80%",
            end: "bottom 70%",
            toggleActions: "play none none none",
            // markers: true,
        }
    });

    tl.from( caption, {
        opacity: 0,
        y: 30,
        duration: 0.6,
    })
    .from(heading, {
        opacity: 0,
        y: 30,
        duration: 0.6,
    })
    .from(subDetailBox, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.2
    });

}, { scope: platformRef });

  return (
    <Box ref={platformRef} as="section" id="other-platforms">
      <Typography variant="caption" className="section_text_p1">Explore My</Typography>
      <Typography variant="h3" className="section_heading">Other Platforms</Typography>
      <Box className="details_container">
        {OTHER_PLATFORMS?.length > 0 && OTHER_PLATFORMS.map((item) => (
          <Card variant="outlined" className="subdetail_container" key={item?.id}>
            <Box>
              {/* Ensure item?.image is an <img> or JSX element */}
              {typeof item?.image === "string" ? (
                <img src={item?.image} alt={item?.title} className="platform-image" />
              ) : (
                item?.image
              )}
              <Typography component="h3" className="text-center">{item?.title}</Typography>
              <Typography component="p" className="text-center">{item?.description}</Typography>
          </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;