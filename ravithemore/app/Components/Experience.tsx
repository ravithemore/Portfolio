import type { WorkExp } from "@/components/work-experience";
import WorkExperience from "@/components/work-experience";
import softechLogo from "@/public/softech-logo.png";
import Labmetix from "@/public/logoh1.webp";

const Experience = () => {
  return (
    <div className="w-full border-b border-neutral-200 dark:border-neutral-900">
      <div className="w-full max-w-2xl border-x flex flex-col p-3 gap-4 border-neutral-200 dark:border-neutral-900 mx-auto">
        <p className="text-2xl font-bold font-[Neue] text-left mt-8">
          Experience
        </p>
        <WorkExperienceDemo />
      </div>
    </div>
  );
};

export default Experience;

function WorkExperienceDemo() {
  return <WorkExperience experience={WORK_EXPERIENCE} />;
}
const WORK_EXPERIENCE: WorkExp[] = [
  {
    id: "tcs",
    companyName: "Tata Consultancy Services (TCS)",
    companyLogo: Labmetix,
    companyWebsite: "https://www.tcs.com",
    positions: [
      {
        id: "1",
        title: "Full-Stack Developer",
        employmentPeriod: {
          start: "06.2025",
          end: "",
        },
        employmentType: "Full-Time",
        description: `Built and maintained REST APIs using Java and Spring Boot across multiple DMRO platform microservices—covering shop certification, slot planning, bulk upload, parking lot, and master-data workflows.
Designed JPA entities, DTOs, repositories, and Flyway migration scripts for live PostgreSQL schema changes; documented all APIs with Swagger/ OpenAPI annotations following enterprise patterns.
Developed dynamic Angular UIs with component-driven architecture, RxJS data flows, and responsive layouts; handled Angular version upgrades, fixing build toolchain and compiler issues to maintain CI/CD compatibility.
Developed an advanced Excel template generator featuring dynamic dropdowns, sheet protection, freeze panes, and JSZip XML injection for workbook structure locking — ensuring compatibility across Microsoft Excel, LibreOffice, and Google Sheets.
Wrote JUnit and Mockito unit tests including Java Reflection-based tests for private methods, pushing new code coverage past SonarQube's mandatory 80% quality gate across multiple services.
Implemented OAuth 2.0 client credentials flow and security endpoint whitelisting for enterprise SSO integration; resolved Node.js microservice blockers including Redis/ioredis-mock injection and hybrid local-cloud proxy configuration.
Collaborated in Agile sprints, participated in code reviews, and resolved CI/CD build issues across AWS CodeBuild and Jenkins pipelines to ensure smooth releases.`,
        skills: [
          "Java",
          "Spring Boot",
          "Angular",
          "TypeScript",
          "PostgreSQL",
          "JPA",
          "Flyway",
          "JUnit",
          "Mockito",
          "OAuth 2.0",
          "AWS",
          "Jenkins",
          "Git",
          "REST APIs",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "neuronexus",
    companyName: "NeuroNexus Innovations",
    companyLogo: Labmetix, // TODO: replace with actual NeuroNexus logo, add image to /public first
    companyWebsite: "",
    positions: [
      {
        id: "1",
        title: "Machine Learning Intern",
        employmentPeriod: {
          start: "07.2024",
          end: "03.2025",
        },
        employmentType: "Remote",
        description: `Developed machine learning models for customer churn prediction and spam detection using Python and Scikit-learn.
Performed data preprocessing, feature engineering, and exploratory data analysis on structured datasets.
Improved model performance through hyperparameter tuning and validation techniques.`,
        skills: [
          "Python",
          "Scikit-learn",
          "Pandas",
          "NumPy",
          "Feature Engineering",
          "Data Analysis",
        ],
      },
    ],
    isCurrentEmployer: false,
  },
];
