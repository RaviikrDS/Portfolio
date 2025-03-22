// import { useState, useEffect} from 'react';
import Box from "@mui/material/Box";
import ProfileImg from "../assets/profile.png";
import Typography from "@mui/material/Typography";

const Profile = () => {
  return (
    <Box as="section" id="profile">
      <Box as="div" className="profile-pic-container">
        <Box className="profile-pic-img-box">
          <img src={ProfileImg} alt="Profile" className="profile-pic-img" />
        </Box>
      </Box>
      <Box className="profile-info">
        <Box display="flex" flexDirection="column">
          <Typography variant="caption" className="profile-gretting-text">
            Hello, I'm
          </Typography>
          <Typography
            variant="h1"
            className="profile-gretting-name"
            sx={{ fontSize: "48px", color: "black" }}
          >
            Ravi Kumar
          </Typography>
          <Typography
            variant="h6"
            className="profile-gretting-text-2"
            sx={{ fontSize: "48px", color: "black" }}
          >
            Data Scientist
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
