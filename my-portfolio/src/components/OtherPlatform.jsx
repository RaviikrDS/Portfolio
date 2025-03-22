// import { useState, useEffect} from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {OTHER_PLATFORMS} from "../config/constants.jsx"
import Card from '@mui/material/Card';

const Projects = () => {
  return (
    <Box as="section" id="other-platforms">
      <Typography variant="caption" className="section_text_p1">Explore My</Typography>
      <Typography variant="h3" className="section_heading">Other Platforms</Typography>
      <Box className="details_container">
      { OTHER_PLATFORMS?.length > 0 && OTHER_PLATFORMS.map((item) => (
          <Card variant="outlined" className="subdetail_container" key={item?.id}>
             <a href="#" className="platform-link"> 
            {item?.image}
            <Typography as="h3" className="text-center">{item?.title}</Typography>
            <Typography as="p" className="text-center">{item?.description}</Typography>
             </a>

          </Card>
      ))}
      </Box>


      
    </Box>
  );
};

export default Projects;
