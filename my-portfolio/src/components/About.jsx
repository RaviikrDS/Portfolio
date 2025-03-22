// import { useState, useEffect} from 'react';
import Box from "@mui/material/Box";
import ProfileImg from "../assets/profile.png";
import Typography from "@mui/material/Typography";
import {ABOUT} from "../config/constants"

const Profile = () => {
  return (
    <Box as="section" id="about">
      <Typography variant="caption" className="section_text_p1">Get To Know More</Typography>
      <Typography variant="h3" className="section_heading">About Me</Typography>
      <Box mt={4} className="text-container">
         { ABOUT?.length > 0 && ABOUT.map((item, index) => (
            <Typography as="p" key={index} variant="body1" sx={{textAlign:"start"}} className="section_text_p2">{item}</Typography>
         ))}
      </Box>
    </Box>
  );
};

export default Profile;
