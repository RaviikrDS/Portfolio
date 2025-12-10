import DataAnalysis from "../assets/aiml.png";
import DataAnalytics from "../assets/data-analytics.png";
import DataVisualization from "../assets/data-visualization.png";
import TechnicalWriting from "../assets/technical-writing.png";
import WebDevelopment from "../assets/front-end-web-development.png";
import Collaboration from "../assets/collaboration.png";
import Project1 from "../assets/tubenotes.png";
import Project2 from "../assets/faq.png";
import Project3 from "../assets/AiVIdeo.jpg";
import Project4 from "../assets/SocialMedia.jpg";
import Github from "../assets/github.jpg";
import Medium from "../assets/medium.png";
import LinkedIn from "../assets/linkedin.png";  // Added LinkedIn image import

import CourseraLogo from "../assets/certificates/Crash_Course_on_Python.png";
import DatabricksLogo from "../assets/certificates/Databricks_Fundamentsals.png";
import LeadersLogo from "../assets/certificates/Emerging_Leadership_Program.png";
import ComputerVisionLogo from "../assets/certificates/Introduction_to_Computer_Vision_with_TensorFlow.png";


const ABOUT = [
    "Building scalable solutions with AI, Machine Learning, NLP, Generative AI, and Agentic AI to solve complex real-world business challenges, optimize decision-making, and drive meaningful impact at scale."
];

const PROFICIENCIES = {
  title:
    "Designing and delivering end-to-end AI solutions by integrating Machine Learning, NLP, Generative AI, and Agentic AI with robust engineering and system design practices. Experienced in building scalable applications deployed across cloud platforms, with well-structured backend services and intuitive frontend interfaces—ensuring intelligent, reliable, and impactful systems at scale.",
  details: [
    {
      id: 1,
      title: "AI, ML & GenAI",
      image: <img src={DataAnalysis} alt="AI/ML" className="icon" />,
      description: (
        <ul>
          <li>Model Development: ML & Deep Learning</li>
          <li>Natural Language Processing</li>
          <li>GenAI (LLMs, Prompt Engineering)</li>
          <li>Retrieval-Augmented Generation(RAG)</li>
          <li>Agentic AI Systems</li>
        </ul>
      ),
    },
    {
      id: 2,
      title: "Data Engineering & Pipelines",
      image: <img src={DataAnalytics} alt="Data Engineering" className="icon" />,
      description: (
        <ul>
          <li>Databricks & Spark</li>
          <li>End-to-End ML Pipelines</li>
          <li>ETL Workflows</li>
          <li>Data Processing & Transformation Tools</li>
        </ul>
      ),
    },
    {
      id: 3,
      title: "Programming & Development",
      image: <img src={DataVisualization} alt="Programming" className="icon" />,
      description: (
        <ul>
          <li>Python (Core, OOP, ML Libraries)</li>
          <li>Data Structures & Algorithms</li>
          <li>SQL for Analytics & Transformation</li>
          <li>FastAPI for Backend APIs</li>
          <li>Streamlit for Interactive Apps</li>
        </ul>
      ),
    },
    {
      id: 4,
      title: "MLOps & Automation",
      image: <img src={TechnicalWriting} alt="MLOps" className="icon" />,
      description: (
        <ul>
          <li>Docker for Containerization</li>
          <li>CI/CD with GitHub Actions</li>
          <li>Automated Testing & Deployment</li>
          <li>Monitoring & Versioning</li>
        </ul>
      ),
    },
    {
      id: 5,
      title: "Cloud Platforms",
      image: <img src={TechnicalWriting} alt="Cloud Platforms" className="icon" />,
      description: (
        <ul>
          <li>AWS (S3, Lambda, SageMaker, Bedrock, Redshift, Step Function)</li>
          <li>GCP (Vertex AI, Agent Space, Cloud Functions)</li>
          <li>Cloud-Native App Deployment</li>
        </ul>
      ),
    },
    {
      id: 6,
      title: "Visualization & BI",
      image: <img src={WebDevelopment} alt="Visualization" className="icon" />,
      description: (
        <ul>
          <li>Power BI Dashboards</li>
          <li>Streamlit Visualizations</li>
          <li>Data Storytelling for Stakeholders</li>
        </ul>
      ),
    },
    {
      id: 7,
      title: "Leadership & Collaboration",
      image: <img src={Collaboration} alt="Leadership" className="icon" />,
      description: (
        <ul>
          <li>Team Mentorship & Knowledge Sharing</li>
          <li>Cross-Functional Collaboration</li>
          <li>Technical Ownership & Project Leadership</li>
        </ul>
      ),
    },
    {
      id: 8,
      title: "System Design & Architecture",
      image: <img src={Collaboration} alt="Architecture" className="icon" />,
      description: (
        <ul>
          <li>End-to-End AI/ML System Design</li>
          <li>Scalable Architecture & Optimization</li>
          <li>Modular, Reusable Component Design</li>
        </ul>
      ),
    },
  ],
};

const PROJECTS = [
    {
        id: 1,
        title: "TubeNotes AI",
        description: "Tubenotes AI transforms YouTube video content into concise, organized notes using advanced AI. Save time, improve retention, and turn any YouTube video into actionable insights in your preferred language.",
        image: <img src={Project1} alt="TubeNotes AI" className="project_img" />,
        link: "https://github.com/RaviikrDS/TubeNotes-AI.git"
        
    },
    {
        id: 2,
        title: "Smart FaQ Chatbot",
        description: "A lightweight, free, and fully local chatbot for answering common questions using document embeddings - powered by FAISS, HuggingFaceEmbeddings, and a FastAPI + Streamlit stack.",
        image: <img src={Project2} alt="Smart FaQ Chatbot" className="project_img" />,
        link: "https://github.com/RaviikrDS/smart_faq_chatbot.git/"
        
    },
    // {
    //     id: 3,
    //     title: "Nina - IT Assistant",
    //     description: "This project leverages Generative AI and Deep Learning to create videos from text-based inputs. It integrates Natural Language Processing (NLP) and Computer Vision to generate relevant visuals, animations, and voiceovers. Using LLMs, AI-powered video synthesis, and AWS cloud services, the system converts scripts into engaging video content. This solution is ideal for content creators, businesses, and automated storytelling, enabling scalable and high-quality video production with minimal manual effort.",
    //     image: <img src={Project3} alt="AI Video Creator" className="project_img" />,
    //     link: "https://ai-video-creator.streamlit.app/"
        
    // },
    // {
    //     id: 4,
    //     title: "Auto Insta Content Uploader",
    //     description: "Seamlessly scheduling and uploading content with AI-powered automation. This project automates the process of uploading videos, images, and captions to social media platforms like Instagram, Twitter, and LinkedIn. Using Python, Selenium, and API integrations, it streamlines content scheduling, hashtag management, and post customization. The system is configurable via a JSON-based setup, allowing users to enable or disable features like thumbnail usage, captions, and logging. Designed for content creators and businesses, this tool enhances efficiency by eliminating manual uploads and ensuring consistent online engagement.",
    //     image: <img src={Project4} alt="Automate Social Media Content Uploader" className="project_img" />,
    //     link: "https://auto-insta-content-uploader.streamlit.app/"
        
    // },
];

const CERTIFICATIONS = [
  {
    id: 1,
    title: "Crash Course on Python | Google",
    platform: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/LMLTQFFQPMP3",
    image: CourseraLogo,
    description: "Earned a Google-endorsed certification that validates my ability to write, debug, and apply Python code effectively.",
  },
  {
    id: 2,
    title: "Databricks Fundamentals | Databricks Academy",
    platform: "Databricks",
    // link: "https://coursera.org/verify/your-cert-id-2",
    image: DatabricksLogo,
    description: "Completed core training in Databricks fundamentals, covering unified analytics, collaborative data engineering workflows, and essential machine learning concepts",
  },
  {
    id: 3,
    title: "Emerging Leaders Program | Havard Business",
    platform: "Havard Learnings",
    // link: "https://coursera.org/verify/your-cert-id-3",
    image: LeadersLogo,
    description: "Developed a strong foundation in leadership principles, behavior frameworks, and strategic leadership skills through a Harvard Business program.",
  },
  {
    id: 4,
    title: "Introduction to Computer Vision with TensorFlow | Coursera",
    platform: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/6EC5TGTLWN2Z",
    image: ComputerVisionLogo,
    description: "A certification demonstrating foundational knowledge of computer vision concepts using TensorFlow.",
  },
];

const OTHER_PLATFORMS = [
    {
        id: 1,
        title: "GitHub",
        description: "Explore my projects, Learning Path, open-source contributions and technical experiments.",
        link: "https://github.com/RaviikrDS",
        image: (
            <a href="https://github.com/RaviikrDS" target="_blank" rel="noopener noreferrer">
                <img src={Github} alt="GitHub" className="project_img" />
            </a>
        )
    },
    {
        id: 2,
        title: "Medium",
        description: "Read my in-depth articles on Data Science, AI, Machine Learning and emerging technologies.",
        link: "https://medium.com/@ravikumaarDS",
        image: (
            <a href="https://medium.com/@ravikumaarDS" target="_blank" rel="noopener noreferrer">
                <img src={Medium} alt="Medium" className="project_img" />
            </a>
        )
    },
    {
        id: 3,
        title: "LinkedIn",
        description: "Let’s connect professionally - follow my latest updates, posts and collaborations.",
        link: "https://www.linkedin.com/in/raviikrds/",
        image: (
            <a href="https://www.linkedin.com/in/raviikrds/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn} alt="LinkedIn" className="project_img" />
            </a>
        )
    }
];

const CONTACTINFO=[
"Rajiv Gandhi Infotech Park, Hinjewadi Phase 3, Pune",
        "Maharashtra, India",
        "411057",
        "raviikrds@gmail.com",
];


export {
    ABOUT,
    PROFICIENCIES,
    PROJECTS,
    CERTIFICATIONS,
    OTHER_PLATFORMS,
    CONTACTINFO
}