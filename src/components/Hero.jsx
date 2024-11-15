import React from "react";
import heroImg from "../assets/hero-image.png";
import heroSectionImg from "../assets/hero-img.png";
import { ButtonOutline, ButtonPrimary } from "./Button";
const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className=" w-9 object-cover object-top relative">
              <img
                src={heroImg}
                alt="personal image"
                width={40}
                height={40}
                className="img-cover grayscale-[20]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18181b] from-20% to-65% via-transparent to-transparent"></div>
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute rounded-full bg-emerald-400 inset-0 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] mt-5 mb-8 lg:mb-10">
            Building Scalable Modern Websites for the Future
          </h2>
          <div className="flex items-center gap-3">
            <ButtonPrimary label="Download CV" icon="download" />{" "}
            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto overflow-hidden">
            <img
              src={heroSectionImg}
              alt=""
              className="w-full bg-gradient-to-t from-sky-400 from-1% to-65% rounded-3xl "
              width={656}
              height={800}
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
