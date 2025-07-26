import { useRef, useState } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

import { CERTIFICATIONS } from "../config/constants.jsx";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
  const platformRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  useGSAP(() => {
    const caption = platformRef.current.querySelector('.section_text_p1');
    const heading = platformRef.current.querySelector('.section_heading');
    const subDetailBox = platformRef.current.querySelectorAll('.cert-card');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: platformRef.current,
        start: "top 80%",
        end: "bottom 70%",
        toggleActions: "play none none none",
      }
    });

    tl.from(caption, { opacity: 0, y: 30, duration: 0.6 })
      .from(heading, { opacity: 0, y: 30, duration: 0.6 })
      .from(subDetailBox, { opacity: 0, y: 30, duration: 0.6, stagger: 0.2 });

  }, { scope: platformRef });

  const handleOpen = (cert) => {
    setSelectedCert(cert);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCert(null);
  };

  return (
    <Box ref={platformRef} sx={{ padding: '2rem', textAlign: 'center' }}>
      <Typography className="section_text_p1" variant="caption">
        Explore My
      </Typography>
      <Typography className="section_heading" variant="h3" fontWeight="bold" gutterBottom>
        Achievements & Certifications
      </Typography>

      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1.5rem',
        justifyContent: 'center',
        mt: 4
      }}>
        {CERTIFICATIONS.map((cert, index) => (
          <Card
            key={index}
            className="cert-card"
            sx={{
              width: 250,
              height: 300,
              boxShadow: 3,
              borderRadius: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.03)' },
            }}
            onClick={() => handleOpen(cert)}
          >
            <CardMedia
              component="img"
              image={cert.image}
              alt={cert.title}
              sx={{ height: 180, objectFit: 'contain', padding: '1rem' }}
            />
            <CardContent>
              <Typography variant="h6">{cert.title}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>{selectedCert?.title}</DialogTitle>
        <DialogContent>
          <img
            src={selectedCert?.image}
            alt={selectedCert?.title}
            style={{ width: '100%', height: 'auto' }}
          />
          <Box sx={{ textAlign: 'right', mt: 2 }}>
            <Button onClick={handleClose} variant="outlined">Close</Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Certifications;
