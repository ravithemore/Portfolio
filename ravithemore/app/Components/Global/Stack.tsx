import React from "react";
import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiSpringboot,
  SiApachemaven,
  SiAngular,
  SiJenkins,
  SiTerraform,
  SiAnsible,
  SiGit,
  SiGithub,
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiOpencv,
  SiApachekafka,
  SiApachespark,
  SiIntellijidea,
  SiPostman,
  SiFigma,
  SiApachehadoop,
  SiApachehive,
  SiVscodium
} from "react-icons/si";
import { FaJava, FaReact, FaAws, FaChartBar, FaChartPie } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { GrCluster } from "react-icons/gr";

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: <FaJava color="#007396" size={16} /> },
      { name: "Python", icon: <SiPython color="#3776AB" size={16} /> },
      { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" size={16} className="bg-black" /> },
      { name: "SQL", icon: <SiMysql color="#4479A1" size={16} /> },
      { name: "HTML", icon: <SiHtml5 color="#E34F26" size={16} /> },
      { name: "CSS", icon: <SiCss color="#1572B6" size={16} /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" size={16} /> },
      { name: "REST APIs", icon: <TbApi color="#009688" size={16} /> },
      { name: "Microservices", icon: <GrCluster color="#FF5722" size={14} /> },
      { name: "Maven", icon: <SiApachemaven color="#C71A36" size={16} /> },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "ReactJS", icon: <FaReact color="#61DAFB" size={16} /> },
      { name: "Angular", icon: <SiAngular color="#DD0031" size={16} /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql color="#4479A1" size={16} /> },
      { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" size={16} /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" size={16} /> },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: <FaAws color="#FF9900" size={16} /> },
      { name: "Jenkins", icon: <SiJenkins color="#D24939" size={16} /> },
      { name: "Terraform", icon: <SiTerraform color="#7B42BC" size={16} /> },
      { name: "Ansible", icon: <SiAnsible color="#EE0000" size={16} /> },
      { name: "Git", icon: <SiGit color="#F05032" size={16} /> },
      { name: "GitHub", icon: <SiGithub size={16} className="text-black dark:text-white" /> },
    ],
  },
  {
    title: "Data & AI",
    skills: [
      { name: "Machine Learning", icon: <SiPython color="#3776AB" size={16} /> },
      { name: "TensorFlow", icon: <SiTensorflow color="#FF6F00" size={16} /> },
      { name: "PyTorch", icon: <SiPytorch color="#EE4C2C" size={16} /> },
      { name: "Pandas", icon: <SiPandas color="#150458" size={16} /> },
      { name: "NumPy", icon: <SiNumpy color="#013243" size={16} /> },
      { name: "OpenCV", icon: <SiOpencv color="#5C3EE8" size={16} /> },
    ],
  },
  {
    title: "Data Engineering",
    skills: [
      { name: "Apache Kafka", icon: <SiApachekafka size={16} className="text-black dark:text-white" /> },
      { name: "Spark", icon: <SiApachespark color="#E25A1B" size={16} /> },
      { name: "Hadoop", icon: <SiApachehadoop color="#66A5AD" size={16} /> },
      { name: "Hive", icon: <SiApachehive color="#F2B705" size={16} /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "VS Code", icon: <SiVscodium color="#007ACC" size={16} /> },
      { name: "IntelliJ", icon: <SiIntellijidea color="#000000" size={16} className="dark:bg-white rounded" /> },
      { name: "Postman", icon: <SiPostman color="#FF6C37" size={16} /> },
      { name: "Figma", icon: <SiFigma color="#F24E1E" size={16} /> },
      { name: "Power BI", icon: <FaChartBar color="#F2C811" size={16} /> },
      { name: "Tableau", icon: <FaChartPie color="#E97627" size={16} /> },
    ],
  },
];

const Badge = ({ name, icon }: { name: string; icon: React.ReactNode }) => (
  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-dashed border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0f0f11] text-neutral-700 dark:text-neutral-300 text-xs font-medium hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors cursor-default select-none whitespace-nowrap">
    <span className="shrink-0">{icon}</span>
    {name}
  </div>
);

const Stack = () => {
  return (
    <div className="border-b w-full dark:border-neutral-900 border-neutral-200">
      <div className="max-w-2xl p-4 gap-4 flex flex-col w-full mx-auto border-x dark:border-neutral-900 border-neutral-200">
        <div>
          <p className="text-xl text-neutral-900 dark:text-neutral-100 font-[Neue] font-semibold mb-2">
            Skills & Technologies
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
          {SKILL_CATEGORIES.map((cat, index) => (
            <div
              key={index}
              className="p-3.5 rounded-xl border border-neutral-100 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-[#09090b]/40 backdrop-blur-xs flex flex-col gap-2.5 hover:border-neutral-200 dark:hover:border-neutral-800 transition duration-200"
            >
              <span className="text-[11px] font-mono font-bold uppercase tracking-[2px] text-zinc-400 dark:text-zinc-500">
                {cat.title}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill, sIdx) => (
                  <Badge key={sIdx} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stack;
