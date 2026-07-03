import type { BlogDataProps } from "@/app/Components/Blogs";
import { BlogCard } from "@/app/Components/Blogs";
import type { Metadata } from "next";
const BlogMetaData: BlogDataProps[] = [
  {
    title: "My Experience with Syncloop API Development Platform",
    description: "A comprehensive look at Syncloop, a visual API development and deployment platform that speeds up backend development.",
    link: "https://ravithemore.hashnode.dev/my-experience-with-syncloop-api-development-platform",
    date: "25-07-2023",
  },
  {
    title: "Don't Get Caught in a License Trap: Choose the Right Open Source License for Your Project",
    description: "Navigating open source licenses (MIT, GPL, Apache) to ensure your software project is properly protected and compliant.",
    link: "https://ravithemore.hashnode.dev/dont-get-caught-in-a-license-trap-choose-the-right-open-source-license-for-your-project",
    date: "22-07-2023",
  },
  {
    title: "How to make a cool Github Profile",
    description: "Step-by-step guide to spice up your GitHub profile readme with custom status cards, widgets, and dynamic banners.",
    link: "https://ravithemore.hashnode.dev/how-to-make-a-cool-github-profile",
    date: "13-11-2022",
  },
  {
    title: "JavaScript Math functions for beginners.",
    description: "A beginner-friendly guide to understanding and using JavaScript's built-in Math object and its functions.",
    link: "https://ravithemore.hashnode.dev/javascript-math-functions-for-beginners",
    date: "31-10-2022",
  },
  {
    title: "Amazing Google Chrome Extensions",
    description: "A curated list of productivity-boosting Chrome extensions for web developers and designers.",
    link: "https://ravithemore.hashnode.dev/amazing-google-chrome-extensions",
    date: "05-06-2022",
  },
];

export const metadata: Metadata = {
  title: "Blog - Ravi Damor",
  description:
    "Notes on software, engineering, and things I learn while building.",
  alternates: {
    canonical: "/blogs",
  },
};

const Blogs = () => {
  return (
    <div className="w-full border-b font-mono tracking-tight dark:border-neutral-900 border-neutral-200">
      <div className="mx-auto border-x flex items-center justify-center flex-col dark:border-neutral-900 relative border-neutral-200 w-full max-w-2xl">
        <div className="w-full flex items-center justify-center p-4">
          {" "}
          {/* Increased padding slightly for better spacing */}
          <div className="w-full flex flex-col">
            <h2 className="relative font-[Neue] text-2xl inline-block font-semibold text-neutral-900 dark:text-neutral-100">
              Blogs
            </h2>

            {/* Added gap-4 to prevent item compression and layout issues seen in the image */}
            <div className="w-full flex flex-col mt-4 items-center gap-4">
              {BlogMetaData.map((blog, i) => (
                <BlogCard
                  key={i}
                  title={blog.title}
                  link={blog.link}
                  description={blog.description}
                  date={blog.date}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
