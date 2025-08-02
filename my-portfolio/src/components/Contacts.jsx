import { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { CONTACTINFO } from "../config/constants";
import Button from '@mui/material/Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import axios from 'axios';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const contactRef = useRef(null);

  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(""); // success or error message

  useGSAP(() => {
    const contactContainer = contactRef.current;
    const heading = contactRef.current.querySelector('.section_heading');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contactContainer,
        start: "top 80%",
        end: "bottom 70%",
        toggleActions: "play none none none",
      }
    });

    tl.from(heading, {
      opacity: 0,
      y: 30,
      duration: 0.6,
    });
  }, []);

  const handleChange = (e) => {
    setContactInfo({
      ...contactInfo,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await axios.post("http://localhost:8000/contact", contactInfo);   //Need to update when backend is ready
      if (response.status === 200) {
        setStatus("Message sent successfully!");
        setContactInfo({ name: "", email: "", message: "" }); // reset
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred while sending the message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box ref={contactRef} as="section" id="contacts">
      <Typography variant="h3" className="section_heading">
        Contact Me
      </Typography>
      <Box className="contact-container" sx={{ mt: "4rem" }}>
        <Box className="contact-card">
          <Grid container spacing={3} alignItems="center" justifyContent="center">
            <Grid item xs={12} sm={7}>
              <TextField
                id="name"
                label="Name"
                variant="standard"
                value={contactInfo.name}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={7}>
              <TextField
                id="email"
                label="Email"
                variant="standard"
                value={contactInfo.email}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={7}>
              <TextField
                id="message"
                label="Message"
                multiline
                rows={4}
                variant="standard"
                value={contactInfo.message}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Button
                className="view-project-btn"
                variant="contained"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              {status && (
                <Typography sx={{ mt: 2 }} color={status.includes("success") ? "green" : "error"}>
                  {status}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Box>
        <Box className="contact-info">
          <Typography as="h3" sx={{ mb: 2 }}>Contact information</Typography>
          {CONTACTINFO?.map((item, idx) => (
            <Typography key={idx} as="p">{item}</Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
