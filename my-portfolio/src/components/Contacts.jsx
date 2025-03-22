import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { CONTACTINFO } from "../config/constants";
import Button from '@mui/material/Button';

const Projects = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setContactInfo({
      ...contactInfo,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <Box as="section" id="contacts">
      {/* <Typography variant="caption" className="section_text_p1">Browse Through My</Typography> */}
      <Typography variant="h3" className="section_heading">
        Contact Me
      </Typography>
      <Box className="contact-container" sx={{mt:"4rem"}}>
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
             <Button className="view-project-btn" variant="contained">Send Message</Button>
             </Grid>
          </Grid>
        </Box>
        <Box className="contact-info">
        <Typography as="h3" sx={{mb:2}}>Contact information</Typography>
        {CONTACTINFO?.map((item) => (
            <Typography as="p">{item}</Typography>
        ))}
        
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
