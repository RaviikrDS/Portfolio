// import { useState, useEffect} from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {PROJECTS} from "../config/constants.jsx"
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

const Projects = () => {
  return (
    <Box as="section" id="projects">
      <Typography variant="caption" className="section_text_p1">Browse Through My</Typography>
      <Typography variant="h3" className="section_heading">Projects</Typography>
      <Box className="details_container">
      { PROJECTS?.length > 0 && PROJECTS.map((item) => (
          <Card variant="outlined" className="subdetail_container" key={item?.id}>
            {item?.image}
            <Typography as="h3">{item?.title}</Typography>
            <Typography as="p">{item?.description}</Typography>
            <Box className="btn_container">
              <button className="view-project-btn" href={item?.link} target="_blank">View Project</button>
            </Box>

          </Card>
      ))}
      </Box>


      
    </Box>
  );
};

export default Projects;
