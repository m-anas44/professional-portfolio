import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Review from "./components/Review";
import Skills from "./components/Skills";
import Work from "./components/Work";
import ReactLenis from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Certification from "./components/Certification";
gsap.registerPlugin(useGSAP, ScrollTrigger);
function App() {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          scrub: true,
          start: "-180 bottom",
          end: "bottom 80%",
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });
  });
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Certification />
        {/* <Review /> */}
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
}

export default App;
