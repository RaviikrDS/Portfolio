import AIML from "../assets/aiml.png";
import Programming from "../assets/programming.png";
import MLOps from "../assets/MLOps.png";
import Cloud from "../assets/cloud.png";
import Visualization from "../assets/front-end-web-development.png";
import SoftSkills from "../assets/softskills.png";
import Project1 from "../assets/tubenotes.png";
import Project2 from "../assets/faq.png";
import Project3 from "../assets/AiVIdeo.jpg";
import Project4 from "../assets/SocialMedia.jpg";
import Github from "../assets/github.jpg";
import Medium from "../assets/medium.png";
import LinkedIn from "../assets/linkedin.png";
import CourseraLogo from "../assets/certificates/Crash_Course_on_Python.png";
import DatabricksLogo from "../assets/certificates/Databricks_Fundamentsals.png";
import LeadersLogo from "../assets/certificates/Emerging_Leadership_Program.png";
import ComputerVisionLogo from "../assets/certificates/Introduction_to_Computer_Vision_with_TensorFlow.png";
import { FaKaggle } from "react-icons/fa6";

const ABOUT = [
    "Building scalable solutions with AI, Machine Learning, NLP, Generative AI, and Agentic AI to solve complex real-world business challenges, optimize decision-making, and drive meaningful impact at scale."
];

const PROFICIENCIES = {
  details: [
    {
      id: 1,
      title: "AI & Machine Learning",
      image: <img src={AIML} alt="AI/ML" className="icon" />,
      badges: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "TensorFlow", "PyTorch", "Scikit-learn"],
    },
    {
      id: 2,
      title: "Generative AI & LLMs",
      image: <img src={Programming} alt="Programming Languages" className="icon" />,
      badges: ["LLMs", "RAG", "Prompt Engineering", "Embeddings", "Vector Databases", "LangChain", "AI Agents"],
    },
    {
      id: 3,
      title: "Data Science & Analytics",
      image: <img src={MLOps} alt="MLOps" className="icon" />,
      badges: ["Python", "Pandas", "NumPy", "SQL", "Data Visualization", "Feature Engineering", "Statistics"],
    },
    {
      id: 4,
      title: "Backend & APIs",
      image: <img src={Cloud} alt="Cloud Platforms" className="icon" />,
      badges: ["FastAPI", "REST APIs", "Pydantic", "Docker", "Streamlit", "Async Python", "API Design"],
    },
    {
      id: 5,
      title: "MLOps & Cloud",
      image: <img src={Visualization} alt="Visualization" className="icon" />,
      badges: ["AWS", "Lambda", "S3", "API Gateway", "CI/CD", "GitHub Actions", "Monitoring"],
      groups: [
        { label: "Cloud", items: ["AWS", "Lambda", "S3", "API Gateway"] },
        { label: "Automation", items: ["CI/CD", "GitHub Actions", "Monitoring"] },
      ],
    },
    {
      id: 6,
      title: "Production AI Systems",
      image: <img src={SoftSkills} alt="Leadership" className="icon" />,
      badges: ["Model Evaluation", "Experiment Tracking", "Model Serving", "Data Pipelines", "Testing", "Observability", "Deployment"],
    },
  ],
};

const PROJECTS = [
    {
        id: 1,
        title: "TubeNotes AI",
        summary: "An AI-powered assistant that turns long-form YouTube videos into concise, structured notes for faster learning and review.",
        problem: "YouTube videos are rich in information but hard to scan quickly, especially for students and professionals who need actionable takeaways.",
        features: ["AI Summarization", "Multi-language output", "Export-ready notes", "Cloud-ready deployment"],
        techStack: ["Python", "FastAPI", "Gemini", "Streamlit", "AWS"],
        metrics: ["LLM Assistant", "FastAPI Backend", "Cloud Ready"],
        architecture: ["YouTube URL", "FastAPI", "Gemini AI", "Structured notes"],
        outcome: "Transforms long-form video into scannable, export-ready learning notes in minutes.",
        image: <img src={Project1} alt="TubeNotes AI" className="project_img" />,
        link: "https://github.com/RaviikrDS/TubeNotes-AI.git",
        demoLink: "https://tubenotes-ai.streamlit.app/"
    },
    {
        id: 2,
        title: "Smart FaQ Chatbot",
        summary: "A lightweight document-grounded chatbot that answers domain questions using embeddings and a simple local-first architecture.",
        problem: "Teams often need a fast, low-friction way to answer recurring questions without depending on a large support team.",
        features: ["Context-aware responses", "Local deployment", "Document retrieval", "FastAPI backend"],
        techStack: ["Python", "FastAPI", "FAISS", "HuggingFace", "Streamlit"],
        metrics: ["RAG Workflow", "Vector Search", "FastAPI API"],
        architecture: ["Documents", "Embeddings", "FAISS retrieval", "Answer generation"],
        outcome: "Gives teams a focused, low-friction way to surface answers from their internal documents.",
        image: <img src={Project2} alt="Smart FaQ Chatbot" className="project_img" />,
        link: "https://github.com/RaviikrDS/smart_faq_chatbot.git/"
    },
    {
        id: 3,
        title: "Cloud-Native Portfolio Platform",
        summary: "A portfolio platform with a React experience and a serverless FastAPI contact backend on AWS.",
        problem: "Provides a reliable way for recruiters and collaborators to contact me while demonstrating production cloud architecture.",
        features: ["Serverless contact API", "Notification workflow", "Cloud-ready deployment", "Responsive portfolio UI"],
        techStack: ["React", "FastAPI", "AWS Lambda", "API Gateway", "DynamoDB", "S3", "SNS"],
        metrics: ["Serverless Backend", "AWS Lambda", "Event Notifications"],
        architecture: ["React UI", "API Gateway", "Lambda", "DynamoDB & SNS"],
        outcome: "Combines a recruiter-friendly portfolio with a scalable cloud-native contact workflow.",
        image: (
          <div className="portfolio-project-visual" aria-label="Cloud-native portfolio architecture">
            <span>Cloud-Native Portfolio</span>
            <div><b>React</b><i>→</i><b>FastAPI</b><i>→</i><b>AWS</b></div>
          </div>
        ),
        link: "https://github.com/RaviikrDS"
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
        highlights: ["AI Projects", "Open Source", "Learning Journey"],
        cta: "Visit GitHub",
        link: "https://github.com/RaviikrDS",
        image: <img src={Github} alt="GitHub" className="project_img" />
    },
    {
        id: 2,
        title: "Medium",
        description: "Read my in-depth articles on Data Science, AI, Machine Learning and emerging technologies.",
        highlights: ["AI Articles", "LLM Tutorials", "Learning Notes"],
        cta: "Read Articles",
        link: "https://medium.com/@ravikumaarDS",
        image: <img src={Medium} alt="Medium" className="project_img" />
    },
    {
        id: 3,
        title: "LinkedIn",
        highlights: ["AI Engineering", "Professional Journey", "Collaboration"],
        cta: "Connect on LinkedIn",
        description: "Let’s connect professionally - follow my latest updates, posts and collaborations.",
        link: "https://www.linkedin.com/in/raviikrds/",
        image: <img src={LinkedIn} alt="LinkedIn" className="project_img" />
    },
    {
        id: 4,
        title: "Kaggle",
        description: "Explore my notebooks, competitions, and data science experiments in the Kaggle community.",
        highlights: ["ML Notebooks", "Data Science", "Competitions"],
        cta: "Explore Kaggle",
        link: "https://www.kaggle.com/raviikrds",
        image: (
            <span className="platform-fallback">
                <FaKaggle />
            </span>
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
