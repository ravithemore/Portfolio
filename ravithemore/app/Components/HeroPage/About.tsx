const About = () => {
  return (
    <div className="border w-full  border-b  border-neutral-100 dark:border-neutral-800 dark:bg-[#09090B]">
      <div className="mx-auto border-b py-0.5 px-4 relative w-full max-w-2xl border-neutral-200 dark:border-neutral-900   border-r border-l ">
        {" "}
        <p className="text-3xl text-neutral-900 dark:text-neutral-100 font-[Neue] ">
          About
        </p>
      </div>
      <div className="relative mx-auto w-full max-w-2xl flex-wrap border-x border-neutral-200 p-4 sm:p-6 dark:border-neutral-900">
        <h1 className="text-base sm:text-md md:text-md leading-relaxed">
          I build digital products from concept to production.
          <br /><br />
          My core expertise lies in backend engineering with Java, Spring Boot, microservices, and cloud platforms, but I'm equally passionate about AI, machine learning, and modern web technologies. Whether it's designing APIs, optimizing databases, building intelligent applications, or creating polished user experiences, I enjoy owning the entire journey from idea to deployment.
          <br /><br />
          I'm driven by curiosity, continuous learning, and the challenge of solving real problems through technology. Currently exploring the intersection of software engineering, AI, automation, and product development.
        </h1>
      </div>
    </div>
  );
};

export default About;
