import { createElement, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FaBriefcase, FaBullseye, FaCloud, FaRocket } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const spotlightCards = [
  { title: "Experience", value: "5+ Years", detail: "AI Engineer", icon: FaBriefcase, tone: "blue" },
  { title: "Specialization", value: "GenAI & Agents", detail: "LLMs • RAG • Agentic AI", icon: FaBullseye, tone: "violet" },
  { title: "Cloud & Backend", value: "FastAPI", detail: "REST APIs • AWS", icon: FaCloud, tone: "cyan" },
  { title: "Open To", value: "AI Engineer", detail: "ML Engineer • Data Scientist", icon: FaRocket, tone: "rose" },
];

const technologyPills = ["Machine Learning", "LLMs", "FastAPI", "AWS", "Docker", "RAG"];

const About = () => {
  const aboutRef = useRef(null);

  useGSAP(() => {
    const aboutContainer = aboutRef.current;
    const heading = aboutContainer?.querySelector(".section_heading");
    const captionText = aboutContainer?.querySelector(".section_text_p1");
    const introCard = aboutContainer?.querySelector(".about-intro-card");
    const highlightCards = aboutContainer?.querySelectorAll(".about-highlight-card");

    if (!aboutContainer || !heading || !captionText || !introCard) return undefined;

    const timeline = gsap.timeline({
      scrollTrigger: { trigger: aboutContainer, start: "top 80%", toggleActions: "play none none none" },
    });

    timeline
      .from(heading, { opacity: 0, y: 30, duration: 0.6 })
      .from(captionText, { opacity: 0, y: 24, duration: 0.55 }, "<")
      .from(introCard, { opacity: 0, x: -24, duration: 0.6 })
      .from(highlightCards, { opacity: 0, y: 18, duration: 0.48, stagger: 0.12 }, "<0.12");

    return () => timeline.kill();
  }, { scope: aboutRef });

  return (
    <Box ref={aboutRef} component="section" id="about" className="about-section">
      <Typography variant="caption" className="section_text_p1">The engineer behind the work</Typography>
      <Typography variant="h3" className="section_heading">About Me</Typography>

      <Box className="about-story-shell">
        <Box className="about-intro-card">
          <span className="about-pill">Who I Am</span>
          <span className="about-divider" aria-hidden="true" />
          <Typography component="h3" className="about-title">
            I build practical, production-ready AI systems.
          </Typography>
          <Box className="about-mission">
            <span>Mission</span>
            <Typography component="p">Creating scalable AI solutions that are practical, maintainable, and impactful.</Typography>
          </Box>
          <Box className="about-tech-pills" aria-label="Core technologies">
            {technologyPills.map((technology) => <span key={technology}>{technology}</span>)}
          </Box>
        </Box>

        <Box className="about-highlights-grid">
          {spotlightCards.map(({ title, value, detail, icon, tone }) => (
            <Box className={`about-highlight-card about-highlight-card--${tone}`} key={title}>
              <span className="about-highlight-card__icon" aria-hidden="true">{createElement(icon)}</span>
              <Typography component="h3" className="about-highlight-card__title">{title}</Typography>
              <Typography component="p" className="about-highlight-card__value">{value}</Typography>
              <Typography component="p" className="about-highlight-card__detail">{detail}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default About;
