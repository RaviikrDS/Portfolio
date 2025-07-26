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
import IconButton from '@mui/material/IconButton';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

import { CERTIFICATIONS } from "../config/constants.jsx";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
  const platformRef = useRef(null);
  const scrollRef = useRef(null);
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

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <Box ref={platformRef} sx={{ padding: '2rem', textAlign: 'center' }}>
      <Typography className="section_text_p1" variant="caption">
        Explore My
      </Typography>
      <Typography className="section_heading" variant="h3" fontWeight="bold" gutterBottom>
        Achievements & Certifications
      </Typography>

      {/* Navigation Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
        <IconButton onClick={scrollLeft}>
          <ArrowBackIos />
        </IconButton>

        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            gap: 2,
            px: 2,
            width: '100%',
            '&::-webkit-scrollbar': { display: 'none' }
          }}
        >
          {CERTIFICATIONS.map((cert, index) => (
            <Card
              key={index}
              className="cert-card"
              sx={{
                minWidth: 500,
                maxWidth:550,
                height: 350,
                boxShadow: 5,
                borderRadius: 2,
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.03)' },
              }}
            >
              <CardMedia
                component="img"
                image={cert.image}
                alt={cert.title}
                sx={{ height: 180, objectFit: 'contain', padding: '1rem' }}
              />
              <CardContent sx={{ paddingBottom: '1rem !important' }}>
                <Typography variant="h6" fontSize="1rem" gutterBottom>{cert.title}</Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>{cert.platform}</Typography>
                <Box sx={{ mt: 1 }}></Box>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{ px: 2, py: 1, fontweight: 600, textTransform: 'none', borderColor: '#1976d2', color: '#1976d2', '&:hover': { backgroundColor: '#1976d2', color: '#fff', borderColor: '#1976d2',}
                   }}
                  onClick={() => handleOpen(cert)}
                >
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>

        <IconButton onClick={scrollRight}>
          <ArrowForwardIos />
        </IconButton>
      </Box>

      {/* Dialog Popup */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>{selectedCert?.title}</DialogTitle>
        <DialogContent>
          <img
            src={selectedCert?.image}
            alt={selectedCert?.title}
            style={{ width: '100%', height: 'auto', marginBottom: '1rem' }}
          />
          <Typography variant="body1" gutterBottom>
            {selectedCert?.description || "This certification demonstrates my understanding and completion of a professional-level course."}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button onClick={handleClose} variant="outlined">Close</Button>
            {selectedCert?.link && (
              <Button
                variant="contained"
                color="primary"
                href={selectedCert.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Certificate
              </Button>
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Certifications;
