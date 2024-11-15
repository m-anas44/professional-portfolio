import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  const skillItem = [
    {
      imgSrc:
        "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000",
      label: "Figma",
      desc: "Design tool",
    },
    {
      imgSrc:
        "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
      label: "CSS",
      desc: "User Interface",
    },
    {
      imgSrc:
        "https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000",
      label: "Bootstrap",
      desc: "User Interface",
    },
    {
      imgSrc:
        "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
      label: "JavaScript",
      desc: "Interaction",
    },
    {
      imgSrc:
        "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
      label: "NodeJS",
      desc: "Web Server",
    },
    {
      imgSrc:
        "https://img.icons8.com/?size=100&id=PZQVBAxaueDJ&format=png&color=000000",
      label: "ExpressJS",
      desc: "Node Framework",
    },
    {
      imgSrc:
        "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
      label: "MongoDB",
      desc: "Database",
    },
    {
      imgSrc:
        "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
      label: "React",
      desc: "Framework",
    },
    {
      imgSrc:
        "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
      label: "TailwindCSS",
      desc: "User Interface",
    },
    {
      imgSrc:
        "https://img.icons8.com/?size=100&id=r2OarXWQc7B6&format=png&color=ffffff",
      label: "Next.js",
      desc: "Framework",
    },
    {
      imgSrc:
        "https://img.icons8.com/?size=100&id=hZoFARJE2jOO&format=png&color=000000",
      label: "Sanity",
      desc: "Headless CMS",
    },
    {
      imgSrc:
        "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000",
      label: "Typescript",
      desc: "Programming Language",
    },
    {
      imgSrc: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
      label: "Python",
      desc: "Programming Language",
    }
  ];
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential tool I use</h2>
        <p className="max-w-[50ch] text-zinc-400 mt-3 mb-8 reveal-up">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div className=" grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              key={key}
              classes={"reveal-up"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
