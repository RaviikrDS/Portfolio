import DataAnalysis from "../assets/data-analysis.png";
import DataAnalytics from "../assets/data-analytics.png";
import DataVisualization from "../assets/data-visualization.png";
import TechnicalWriting from "../assets/technical-writing.png";
import WebDevelopment from "../assets/front-end-web-development.png";
import Collaboration from "../assets/collaboration.png";
import Cyclist from "../assets/cyclistic.png";
import Github from "../assets/github.jpg";
import Medium from "../assets/medium.png";


const ABOUT = [
    "I have a background in Mechanical Engineering and my journey into data science and machine learning is a captivating evolution. I've always been drawn to the world of problem-solving, and data provides the perfect canvas for my curious mind to explore and innovate.",
    "What excites me most about this field is its constant evolution, dynamic challenges and the continuous learning it demands. I firmly believe in the transformative power of data to reshape industries and drive innovation, and I'm here to be a part of that transformation",
    "What excites me most about this field is its constant evolution, dynamic challenges and the continuous learning it demands. I firmly believe in the transformative power of data to reshape industries and drive innovation, and I'm here to be a part of that transformation"
];

const PROFICIENCIES = {
    title: "I can optimize your data for better results, informed decisions and cost savings. My proficiency in technical tools like SQL, Python, HTML, CSS, Power BI and Tableau, combined with strong soft skills, enables me to deliver impactful data solutions.",
    details: [
        {
            id: 1,
            title: "Data Analysis",
            image: <img src={DataAnalysis} alt="Data Analysis" className="icon" />,
            description:"Uncover hidden insights and patterns within your data to identify trends, anomalies and opportunities for data-driven decision-making.",
        },
        {
            id: 2,
            title: "Data Analysis",
            image: <img src={DataAnalytics} alt="Data Analytics" className="icon" />,
            description: "Harness the power of advanced analytics, including predictive models and machine learning solutions to forecast outcomes, optimize processes and gain a competitive edge.",
        },
        {
            id: 3,
            title: "Data Visualization",
            image: <img src={DataVisualization} alt="Data Visualization" className="icon" />,
            description: "Transform complex data into clear and compelling visual narratives. Create custom dashboards and reports for enhanced data communication and understanding.",
        },
        {
            id: 4,
            title: "Technical Writing",
            image: <img src={TechnicalWriting} alt="Technical Writing" className="icon" />,
            description: "Translate intricate technical concepts into clear and concise documentation. From reports to comprehensive materials, I ensure your data projects are well-documented and readily accessible.",
        }, 
        {
            id: 5,
            title: "Web Development",
            image: <img src={WebDevelopment} alt="Web Development" className="icon" />,
            description: "Craft intuitive web interfaces that deliver information in an accessible format. Design and build data-driven web solutions, seamlessly blending functionality and aesthetics to present data solutions that engage and inform.",
        }, 
        {
            id: 6,
            title: "Data Collaboration",
            image: <img src={Collaboration} alt="Data Collaboration" className="icon" />,
            description: "Collaborate seamlessly with your team to integrate data solutions into your business processes. Whether it's short-term projects or ongoing data-driven initiatives, I'm here to support your success.",
        }
    ]
}

const PROJECTS = [
    {
        id: 1,
        title: "Project 1",
        description: "A comprehensive analysis of Cyclistic Bike-Share program, featuring Exploratory Data Analysis (EDA), A/B Testing, SARIMA Time Series Forecasting and interactive Tableau dashboards to uncover user behavior, trends and marketing strategies for growth.",
        image: <img src={Cyclist} alt="Project 1" className="project_img" />
    },
    {
        id: 2,
        title: "Project 2",
        description: "A comprehensive analysis of Cyclistic Bike-Share program, featuring Exploratory Data Analysis (EDA), A/B Testing, SARIMA Time Series Forecasting and interactive Tableau dashboards to uncover user behavior, trends and marketing strategies for growth.",
        image: <img src={Cyclist} alt="Project 1" className="project_img" />
    },
    {
        id: 3,
        title: "Project 3",
        description: "A comprehensive analysis of Cyclistic Bike-Share program, featuring Exploratory Data Analysis (EDA), A/B Testing, SARIMA Time Series Forecasting and interactive Tableau dashboards to uncover user behavior, trends and marketing strategies for growth.",
        image: <img src={Cyclist} alt="Project 3" className="project_img" />
    },
    {
        id: 4,
        title: "Project 4",
        description: "A comprehensive analysis of Cyclistic Bike-Share program, featuring Exploratory Data Analysis (EDA), A/B Testing, SARIMA Time Series Forecasting and interactive Tableau dashboards to uncover user behavior, trends and marketing strategies for growth.",
        image: <img src={Cyclist} alt="Project 4" className="project_img" />
    },
];

const OTHER_PLATFORMS = [
    {
        id: 1,
        title: "GitHub",
        description:"All things code",
        image: <img src={Github} alt="GitHub" className="project_img" />

    },
    {
        id: 2,
        title: "Medium",
        description:"Catch my thoughts and insights on data",
        image: <img src={Medium} alt="Medium" className="project_img" />
    }
];

const CONTACTINFO=[
"Navtollia, Mathurapur, Khagaria",
        "Bihar, India",
        "845401",
        "4z2Ml@example.com",
];


export {
    ABOUT,
    PROFICIENCIES,
    PROJECTS,
    OTHER_PLATFORMS,
    CONTACTINFO
}