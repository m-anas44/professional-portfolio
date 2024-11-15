import React from "react";
import ProjectCard from "./ProjectCard";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";

const Work = () => {
  const works = [
    {
      imgSrc: project1,
      title: "Full stack music app",
      tags: ["API", "MVC", "Development"],
      projectLink: "https://musify-5al0.onrender.com/",
    },
    {
      imgSrc: project2,
      title: "Free stock photo app",
      tags: ["API", "SPA"],
      projectLink: "https://pixstock-official.vercel.app/",
    },
    {
      imgSrc: project1,
      title: "Recipe app",
      tags: ["Development", "API"],
      projectLink: "",
    },
    {
      imgSrc: project2,
      title: "Real state website",
      tags: ["Web-design", "Development"],
      projectLink: "https://github.com/codewithsadee-org/wealthome",
    },
    {
      imgSrc: project1,
      title: "eCommerce website",
      tags: ["eCommerce", "Development"],
      projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
    },
    {
      imgSrc: project2,
      title: "vCard Personal portfolio",
      tags: ["Web-design", "Development"],
      projectLink: "https://github.com/codewithsadee/vcard-personal-portfolio",
    },
  ];
  return (
    <section className="section" id="work">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Projects Highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ title, tags, imgSrc, projectLink }, key) => (
            <ProjectCard
              title={title}
              tags={tags}
              imgSrc={imgSrc}
              projectLink={projectLink}
              key={key}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
