import { projectBackgrounds, projectImages } from "@/lib/assest/project";
import { StaticImageData } from "next/image";
import { 
  SiPython, 
  SiFlask, 
  SiPandas, 
  SiNumpy, 
  SiScikitlearn, 
  SiStreamlit, 
  SiPhp, 
  SiMysql, 
  SiHtml5, 
  SiCss, 
  SiJavascript,
  SiSpringboot,
  SiPostgresql,
  SiRedis,
  SiNextdotjs,
  SiTailwindcss
} from "react-icons/si";
import { FaReact, FaJava } from "react-icons/fa";

interface ProjectCardProps {
  id: number;
  name: string;
  slug: string;
  type: string;
  description: string;
  isActive: boolean;
  backgroundImage: StaticImageData;
  projectImage: StaticImageData;
  link: string;
  video?: any;
  longDescription?: string;
  github?: string;
  stack: StackProp[];
}

interface StackProp {
  icon: React.ReactNode;
  label: string;
}

export const Project: ProjectCardProps[] = [
  {
    id: 5,
    name: "DogEar",
    slug: "dogear",
    type: "Social Reading Network",
    description: "A full-stack social reading network that lets you discover books through people, not algorithms.",
    isActive: true,
    backgroundImage: projectBackgrounds.bg1,
    projectImage: projectImages.shushiman,
    stack: [
      { icon: <FaJava size={18} color="#007396" />, label: "Java" },
      { icon: <SiSpringboot size={18} color="#6DB33F" />, label: "Spring Boot" },
      { icon: <SiNextdotjs size={18} color="#000000" />, label: "Next.js" },
      { icon: <SiPostgresql size={18} color="#4169E1" />, label: "PostgreSQL" },
      { icon: <SiRedis size={18} color="#FF3E30" />, label: "Redis" },
    ],
    link: "https://dog-ear-nu.vercel.app",
    github: "https://github.com/ravithemore/DogEar",
    video: "/Project/ProjectVideos/dogear.mp4",
  },
  {
    id: 6,
    name: "Expend-lens",
    slug: "expend-lens",
    type: "Financial Intelligence Platform",
    description: "A premium, privacy-first financial command center turning bank statement CSV files into beautiful interactive dashboards.",
    isActive: true,
    backgroundImage: projectBackgrounds.bg2,
    projectImage: projectImages.softtech,
    stack: [
      { icon: <FaJava size={18} color="#007396" />, label: "Java" },
      { icon: <SiSpringboot size={18} color="#6DB33F" />, label: "Spring Boot" },
      { icon: <SiNextdotjs size={18} color="#000000" />, label: "Next.js" },
      { icon: <SiPostgresql size={18} color="#4169E1" />, label: "PostgreSQL" },
      { icon: <SiTailwindcss size={18} color="#06B6D4" />, label: "Tailwind CSS" },
    ],
    link: "https://expend-lens.vercel.app/",
    github: "https://github.com/ravithemore/Expend-lens",
    video: "/Project/ProjectVideos/expand-lens.mp4",
  },
  {
    id: 1,
    name: "Bangalore House Price Prediction",
    slug: "bangalore-house-price-prediction",
    type: "Machine Learning Web Application",
    description: "A machine learning application that predicts house prices in Bangalore using Linear Regression and real estate market data.",
    isActive: false,
    backgroundImage: projectBackgrounds.bg1,
    projectImage: projectImages.flyyped,
    stack: [
      { icon: <SiPython size={18} color="#3776AB" />, label: "Python" },
      { icon: <SiFlask size={18} color="#000000" />, label: "Flask" },
      { icon: <SiPandas size={18} color="#150458" />, label: "Pandas" },
      { icon: <SiNumpy size={18} color="#013243" />, label: "NumPy" },
      { icon: <SiScikitlearn size={18} color="#F7931E" />, label: "Scikit-learn" },
    ],
    link: "",
    video: "",
  },
  {
    id: 2,
    name: "Software Developer Salary Prediction App",
    slug: "salary-prediction-app",
    type: "Machine Learning Application",
    description: "Predicts software engineer salaries using Stack Overflow survey data and machine learning models.",
    isActive: false,
    backgroundImage: projectBackgrounds.bg2,
    projectImage: projectImages.taskTracker,
    stack: [
      { icon: <SiPython size={18} color="#3776AB" />, label: "Python" },
      { icon: <SiStreamlit size={18} color="#FF4B4B" />, label: "Streamlit" },
      { icon: <SiPandas size={18} color="#150458" />, label: "Pandas" },
    ],
    link: "",
    video: "",
  },
  {
    id: 3,
    name: "Library Management System (LibraHub)",
    slug: "librahub",
    type: "Full Stack Web Application",
    description: "Web-based library management platform featuring authentication, book tracking, reporting, and administrative features.",
    isActive: false,
    backgroundImage: projectBackgrounds.bg3,
    projectImage: projectImages.shushiman,
    stack: [
      { icon: <SiPhp size={18} color="#777BB4" />, label: "PHP" },
      { icon: <SiMysql size={18} color="#4479A1" />, label: "MySQL" },
      { icon: <SiJavascript size={18} color="#F7DF1E" />, label: "JavaScript" },
      { icon: <SiHtml5 size={18} color="#E34F26" />, label: "HTML" },
      { icon: <SiCss size={18} color="#1572B6" />, label: "CSS" },
    ],
    link: "",
    video: "",
  },
  {
    id: 4,
    name: "P2P Chat Application",
    slug: "p2p-chat",
    type: "Communication Platform",
    description: "Decentralized peer-to-peer messaging platform built using React and Holepunch technology.",
    isActive: false,
    backgroundImage: projectBackgrounds.bg4,
    projectImage: projectImages.softtech,
    stack: [
      { icon: <FaReact size={18} color="#61DAFB" />, label: "ReactJS" },
      { icon: <SiJavascript size={18} color="#F7DF1E" />, label: "JavaScript" },
      { icon: <SiHtml5 size={18} color="#E34F26" />, label: "HTML" },
      { icon: <SiCss size={18} color="#1572B6" />, label: "CSS" },
    ],
    link: "",
    video: "",
  },
];
