import DataAnalysis from "../assets/data-analysis.png";
import DataAnalytics from "../assets/data-analytics.png";
import DataVisualization from "../assets/data-visualization.png";
import TechnicalWriting from "../assets/technical-writing.png";
import WebDevelopment from "../assets/front-end-web-development.png";
import Collaboration from "../assets/collaboration.png";
import Project1 from "../assets/Twitter.jpg";
import Project2 from "../assets/TextClassification.png";
import Project3 from "../assets/AiVIdeo.jpg";
import Project4 from "../assets/SocialMedia.jpg";
import Github from "../assets/github.jpg";
import Medium from "../assets/medium.png";
import LinkedIn from "../assets/linkedin.png";  // Added LinkedIn image import


const ABOUT = [
    "Data tells a story, and I make sure it’s heard. As a Data Scientist, I specialize in transforming raw information into powerful insights, bridging the gap between data and decision-making. From building scalable data pipelines to developing and deploying cutting-edge AI models, I have hands-on experience in NLP-based text classification, Deep Learning, and Machine Learning. Proficient in Python, SQL, and frameworks like TensorFlow and Flask, I craft efficient, production-ready solutions powered by AWS SageMaker and Docker. But data science is more than just models—it’s about impact. With strong problem-solving skills, storytelling with data, and a knack for compelling presentations, I turn complex analytics into business strategies. Whether it's leading projects, mentoring teams, or delivering AI-driven solutions, I thrive at the intersection of technology and business, making data-driven innovation a reality."
];

const PROFICIENCIES = {
    title: "I specialize in end-to-end Data Science solutions, from building scalable data pipelines to deploying AI-driven applications. My expertise spans Machine Learning, NLP, Cloud Deployment, Data Visualization, and Leadership, enabling impactful, data-driven decision-making.",
    details: [
        {
            id: 1,
            title: "Machine Learning & Deep Learning",
            image: <img src={DataAnalysis} alt="Machine Learning & Deep Learning" className="icon" />,
            description:"Transforming data into intelligence through predictive modeling and AI-driven solutions. With expertise in Machine Learning, Deep Learning, and NLP, I develop intelligent models for text classification, recommendation systems, and more. I leverage TensorFlow, SciKit-Learn, and AWS SageMaker to build and deploy scalable AI applications.",
        },
        {
            id: 2,
            title: "NLP & LLM-Based Applications",
            image: <img src={DataAnalytics} alt="NLP & LLM-Based Applications" className="icon" />,
            description: "I specialize in Natural Language Processing (NLP) and Large Language Models (LLMs) to extract insights from text, automate processes, and build AI-driven chatbots, sentiment analysis tools, and document classifiers. My work integrates Deep Learning, Transformers, and cutting-edge AI techniques.",
        },
        {
            id: 3,
            title: "Data Engineering & Pipelines",
            image: <img src={DataVisualization} alt="Data Engineering & Pipelines" className="icon" />,
            description: "Building robust data pipelines for scalable and efficient AI workflows. From data collection to model deployment, I design end-to-end data pipelines using Python, SQL, Pandas, and AWS. My expertise ensures clean, structured, and optimized data processing for real-time and batch applications.",
        },
        {
            id: 4,
            title: "AWS Cloud & Deployment",
            image: <img src={TechnicalWriting} alt="AWS Cloud & Deployment" className="icon" />,
            description: "Deploying AI solutions with scalability and efficiency. I have hands-on experience in deploying ML models using Flask APIs, Docker containers, and AWS SageMaker. I ensure models are production-ready, scalable, and optimized for performance in cloud-based environments.",
        }, 
        {
            id: 5,
            title: "Data Visualization & Business Storytelling",
            image: <img src={WebDevelopment} alt="Data Visualization & Business Storytelling" className="icon" />,
            description: "Turning raw data into compelling narratives for informed decision-making. I use Matplotlib, Seaborn, and Power BI to create impactful visualizations that communicate data-driven insights. My storytelling approach helps businesses make strategic decisions backed by clear and actionable analytics.",
        }, 
        {
            id: 6,
            title: "Leadership, Collaboration & Mentorship",
            image: <img src={Collaboration} alt="Leadership, Collaboration & Mentorship" className="icon" />,
            description: "Driving innovation through teamwork, knowledge sharing, and leadership. Beyond technical skills, I excel in leading projects, mentoring aspiring Data Scientists, and collaborating across teams. With strong presentation and problem-solving abilities, I bridge the gap between technical complexity and business strategy.",
        }
    ]
}

const PROJECTS = [
    {
        id: 1,
        title: "Twitter Sentiments Analysis",
        description: "Uncovering public sentiment through AI-driven text analysis. This project analyzes tweets to determine sentiment—positive, negative, or neutral—using Natural Language Processing (NLP) and Machine Learning. It involves data preprocessing, text vectorization, and classification using Deep Learning models. The system is trained on a labeled dataset and deployed via Flask and AWS, making it scalable for real-time analysis. This solution helps brands and businesses gain insights into customer opinions and trends.",
        image: <img src={Project1} alt="Twitter Sentiments Analysis" className="project_img" />
        
    },
    {
        id: 2,
        title: "Text Classification",
        description: "This project classifies text into predefined categories using Natural Language Processing (NLP) and Deep Learning techniques. It involves data preprocessing, tokenization, and feature extraction using libraries like TensorFlow and SciKit-Learn. A neural network-based model is trained to accurately categorize text, making it applicable for spam detection, sentiment analysis, and document classification. The model is deployed using Flask and AWS, ensuring real-time and scalable predictions.",
        image: <img src={Project2} alt="Text Classification" className="project_img" />
        
    },
    {
        id: 3,
        title: "AI Video Creator",
        description: "This project leverages Generative AI and Deep Learning to create videos from text-based inputs. It integrates Natural Language Processing (NLP) and Computer Vision to generate relevant visuals, animations, and voiceovers. Using LLMs, AI-powered video synthesis, and AWS cloud services, the system converts scripts into engaging video content. This solution is ideal for content creators, businesses, and automated storytelling, enabling scalable and high-quality video production with minimal manual effort.",
        image: <img src={Project3} alt="AI Video Creator" className="project_img" />
        
    },
    {
        id: 4,
        title: "Automate Social Media Content Uploader",
        description: "Seamlessly scheduling and uploading content with AI-powered automation. This project automates the process of uploading videos, images, and captions to social media platforms like Instagram, Twitter, and LinkedIn. Using Python, Selenium, and API integrations, it streamlines content scheduling, hashtag management, and post customization. The system is configurable via a JSON-based setup, allowing users to enable or disable features like thumbnail usage, captions, and logging. Designed for content creators and businesses, this tool enhances efficiency by eliminating manual uploads and ensuring consistent online engagement.",
        image: <img src={Project4} alt="Automate Social Media Content Uploader" className="project_img" />
        
    },
];

const OTHER_PLATFORMS = [
    {
        id: 1,
        title: "GitHub",
        description: "Explore my projects, experiments, and open-source contributions.",
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
        description: "Deep dive into my insights on Data Science, AI, and beyond.",
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
        description: "Connect with me for professional networking and career updates.",
        link: "https://www.linkedin.com/in/raviikrds/",
        image: (
            <a href="https://www.linkedin.com/in/raviikrds/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn} alt="LinkedIn" className="project_img" />
            </a>
        )
    }
];

const CONTACTINFO=[
"Rajiv Gandhi Infotech Park, Maan Phase 3, Pune",
        "Maharashtra, India",
        "411057",
        "raviikrds@gmail.com",
];


export {
    ABOUT,
    PROFICIENCIES,
    PROJECTS,
    OTHER_PLATFORMS,
    CONTACTINFO
}