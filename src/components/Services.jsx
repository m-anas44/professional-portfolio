import React from "react";
// import frontend from "../assets/frontend.jpeg"
const services = [
  {
    title: "Frontend Development",
    description:
      "Crafting responsive, visually appealing, and user-friendly interfaces using modern tools like React and Tailwind CSS.",
    icon: "https://img.icons8.com/?size=100&id=qeExHHOSHwIU&format=png&color=000000",
  },
  {
    title: "Backend Development",
    description:
      "Building robust and scalable server-side applications using Node.js, Express, and MongoDB.",
    icon: "https://img.icons8.com/?size=100&id=9o42kRQ3hTYA&format=png&color=000000",
  },
  {
    title: "Full-Stack Development",
    description:
      "Delivering fully functional web solutions that integrate both frontend and backend seamlessly.",
    icon: "https://img.icons8.com/?size=100&id=9bABEOQC04Qe&format=png&color=000000",
  },
  {
    title: "Website Customizations",
    description:
      "Personalizing websites to meet your unique needs and ensuring smooth functionality.",
    icon: "https://img.icons8.com/?size=100&id=iqjkgVvnrkmP&format=png&color=000000",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Our Services</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-1 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl p-4 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 
        ring-inset ring-zinc-50/5 transition-colors reveal-up"
            >
              <img src={service.icon} alt={service.title} className="mb-3" />
              <div>
                <h3 className="title-1 mb-3">{service.title}</h3>
                <p className="text-zinc-400 mb-3">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
