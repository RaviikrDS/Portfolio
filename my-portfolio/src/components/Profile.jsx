import { useRef } from "react";
import Box from "@mui/material/Box";
import ProfileImg from "../assets/profile.png";
import Typography from "@mui/material/Typography";
import { useGSAP } from "@gsap/react";
import Button from "@mui/material/Button";
import { TbDownload } from "react-icons/tb";
import gsap from "gsap";

const Profile = ({ timeline }) => {
  const profileRef = useRef(null);

  useGSAP(
    () => {
      const profilePic = profileRef.current.querySelector(
        ".profile-pic-img-box"
      );
      const greetingText = profileRef.current.querySelector(
        ".profile-gretting-text"
      );
      const profileGreetindName = profileRef.current.querySelector(
        ".profile-gretting-name"
      );
      const profileGreetindDesc = profileRef.current.querySelector(
        ".profile-gretting-text-2"
      );
      const resumeButtonBox =
        profileRef.current.querySelector(".resume-btn-box");
      const resumeIcon = profileRef.current.querySelector(".resume-icon");

      // Add animation to the passed timeline
      timeline.from(
        profilePic,
        {
          opacity: 0,
          duration: 0.5,
          scale: 0.5,
        },
        "-=0.3"
      );

      timeline.from(greetingText, {
        x: 100,
        opacity: 0,
        duration: 0.4,
      });

      timeline.from(profileGreetindName, {
        x: -100,
        opacity: 0,
        duration: 0.4,
      });

      timeline.from(profileGreetindDesc, {
        x: 100,
        opacity: 0,
        duration: 0.4,
      });

      timeline.from(resumeButtonBox, {
        opacity: 0,
        duration: 0.4,
      });

      gsap.fromTo(
        resumeIcon,
        { y: -10 },
        {
          y: 10,
          duration: 0.8,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut", // smoother motion
        }
      );
    },
    { scope: profileRef, dependencies: [timeline] }
  );

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/RAVI_KUMAR_RESUME.pdf";
    link.download = "RAVI_KUMAR_RESUME.pdf";
    link.click();
  };

  return (
    <Box
      ref={profileRef}
      as="section"
      id="profile"
      sx={{
        display: "flex", // make sure flex is set
      }}
    >
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
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
            className="resume-btn-box"
          >
            <Button
              className="view-project-btn"
              variant="contained"
              endIcon={<TbDownload className="resume-icon" />}
              onClick={handleDownload}
            >
              Resume
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
