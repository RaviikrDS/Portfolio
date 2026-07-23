import { useRef } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { FaArrowRight, FaGithub, FaKaggle, FaLinkedin, FaMedium } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { OTHER_PLATFORMS } from "../config/constants.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const platformIcons = { GitHub: FaGithub, Medium: FaMedium, LinkedIn: FaLinkedin, Kaggle: FaKaggle };

const OtherPlatform = () => {
  const platformRef = useRef(null);

  useGSAP(() => {
    const platformContainer = platformRef.current;
    const caption = platformContainer?.querySelector(".section_text_p1");
    const heading = platformContainer?.querySelector(".section_heading");
    const cards = platformContainer?.querySelectorAll(".platform-card");
    if (!platformContainer || !caption || !heading) return undefined;

    const timeline = gsap.timeline({
      scrollTrigger: { trigger: platformContainer, start: "top 80%", toggleActions: "play none none none" },
    });
    timeline
      .from(caption, { opacity: 0, y: 30, duration: 0.6 })
      .from(heading, { opacity: 0, y: 30, duration: 0.6 }, "<")
      .from(cards, { opacity: 0, y: 24, duration: 0.5, stagger: 0.12 });
    return () => timeline.kill();
  }, { scope: platformRef });

  const settings = {
    dots: false, infinite: true, centerMode: true, centerPadding: "24px", slidesToShow: 3, slidesToScroll: 1,
    autoplay: true, speed: 6000, autoplaySpeed: 2000, pauseOnHover: true, cssEase: "linear", arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2, centerPadding: "16px" } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerPadding: "10px" } },
    ],
  };

  return (
    <Box ref={platformRef} component="section" id="other-platforms" className="portfolio-section platforms-section">
      <Typography variant="caption" className="section_text_p1">Beyond the portfolio</Typography>
      <Typography variant="h3" className="section_heading">Explore My Work</Typography>
      <Typography component="p" className="platforms-intro">Explore my open-source projects, technical articles, machine learning notebooks, and professional journey across the platforms where I actively build, learn, and share.</Typography>

      <Box className="platforms-carousel">
        <Slider {...settings}>
          {OTHER_PLATFORMS.map((item) => {
            const Icon = platformIcons[item.title];
            return (
              <div key={item.id}>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="platform-link">
                  <Card variant="outlined" className="subdetail_container platform-card">
                    <Box className={`platform-media platform-media--${item.title.toLowerCase()}`} aria-hidden="true"><Icon /></Box>
                    <Box className="platform-card__content">
                      <Typography component="h3" className="platform-card__title">{item.title}</Typography>
                      <Typography component="p" className="platform-card__description">{item.description}</Typography>
                      <span className="platform-card__action">{item.cta} <FaArrowRight /></span>
                    </Box>
                  </Card>
                </a>
              </div>
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
};

export default OtherPlatform;
