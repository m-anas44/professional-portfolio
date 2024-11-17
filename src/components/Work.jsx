import React from "react";
import ProjectCard from "./ProjectCard";
import project1 from "../assets/project1.png";
import project2 from "../assets/ride.png";
import project3 from "../assets/ecommerce.png";
import project4 from "../assets/bootstrap.png";

const Work = () => {
  const works = [
    {
      imgSrc: project1,
      title: "Full Stack YouTube-like App",
      tags: ["react", "frontend", "backend", "resposive"],
      projectLink: "https://fullstack-youtube-like-webapp.vercel.app/",
      badge: "Pro",
    },
    {
      imgSrc: project2,
      title: "RideRentals",
      tags: ["react", "frontend", "resposive"],
      projectLink: "https://ride-rentals.vercel.app/",
      badge: "Pro",
    },
    {
      imgSrc: project3,
      title: "Ecommerce Web Design",
      tags: ["nextjs", "ecommerce", "frontend"],
      projectLink: "https://muhammad-anas-ui.vercel.app/",
    },
    {
      imgSrc: project4,
      title: "Responsive Design",
      tags: ["responsive", "bootstrap"],
      projectLink: "https://bootstrap-pro.vercel.app/",
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
          {works.map(({ title, tags, imgSrc, projectLink, badge }, key) => (
            <ProjectCard
              title={title}
              tags={tags}
              imgSrc={imgSrc}
              projectLink={projectLink}
              key={key}
              badge={badge}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
