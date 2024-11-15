import React from "react";
import logo from "../assets/logo.png";
const aboutItems = [
  {
    label: "Project done",
    number: 10,
  },
  {
    label: "Years of experience",
    number: 2,
  },
];
const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 rounded-2xl p-7 md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Anas, a professional web developer with a knack
            for crafting visually stunning and highly functional websites.
            Combining creativity and technical expertise. I transform your
            vision into digital masterpiece that excels in both appearance and
            performance.
          </p>
          <div className="flex flex-wrap gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => {
              return (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">
                      {number}
                    </span>
                    <span className="text-sky-400 font-semibold md:text-3xl">
                      +
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              );
            })}
          </div>
          <img src={logo} alt="logo" width={40} className="ml-auto mt-3" />
        </div>
      </div>
    </section>
  );
};

export default About;
