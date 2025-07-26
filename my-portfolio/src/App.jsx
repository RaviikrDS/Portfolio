import { useState, useLayoutEffect } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header from "./components/Header.jsx";
import Profile from "./components/Profile.jsx";
import About from "./components/About.jsx";
import Proficiencies from "./components/Proficiencies.jsx";
import Projects from "./components/Projects.jsx";
import Certifications from "./components/Certifications.jsx";
import OtherPlatform from "./components/OtherPlatform.jsx";
import Contacts from "./components/Contacts.jsx";

import gsap from 'gsap';

function App() {

  const timeline = gsap.timeline();

  useLayoutEffect(() => {
    // Timeline plays automatically in order
    // You can also add delay here if needed
  }, []);

  return (
    <>
      <Header timeline={timeline} />
      <Box
        as="main"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        className="main"
      >
        <Profile timeline={timeline}/>
        <About timeline={timeline} />
        <Proficiencies />
        <Projects />
        <Certifications />
        <OtherPlatform />
        <Contacts />
        <Box as="footer">
            <Typography as="p" variant="subtitle1" className="section_text_p1">Copyright &copy; 2023 Ravi Kumar. All Rights Reserved</Typography>
        </Box>
      </Box>
    </>
  );
}

export default App;
