import { useRef } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {PROFICIENCIES} from "../config/constants.jsx"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Proficiencies = () => {
  const proficienciesRef = useRef(null);

  useGSAP(() => {
    const proficienciesContainer = proficienciesRef.current;
    const heading = proficienciesRef.current.querySelector('.section_heading');
    const captionText = proficienciesRef.current.querySelector('.section_text_p1');
    const aboutTexts = proficienciesRef.current.querySelectorAll('.section_text_p2');
    const subDetailBox = proficienciesRef.current.querySelectorAll('.sub-detail-box');
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: proficienciesContainer,
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
    })

    .from(subDetailBox, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.2
    });
  
  }, { scope: proficienciesRef });


  return (
    <Box ref={proficienciesRef} as="section" id="proficiencies">
      <Typography variant="caption" className="section_text_p1">Here Are My</Typography>
      <Typography variant="h3" className="section_heading">Proficiencies</Typography>
      <Box mt={4} className="text-container">
        <Typography as="p" variant="body1" sx={{textAlign:"start"}} className="section_text_p2">{PROFICIENCIES?.title}</Typography>
      </Box>

      <Box as="div" mt={4} className="article_container">
        { PROFICIENCIES?.details.map((item) => (
          <Box as="article" key={item?.id} className="sub-detail-box">
              {item?.image}
              <Typography as="h3">{item?.title}</Typography>
              <Typography variant="body1" component="div" className='prof-content'>{item?.description}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Proficiencies;
