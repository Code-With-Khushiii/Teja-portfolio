import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="relative flex items-center justify-center min-h-screen px-4 py-12">
          {/* Background Image */}
          <img
            src="assets/coding-pov.png"
            alt="Background Illustration"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />

          {/* Dark overlay (optional for text readability) */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Text Content */}
          <div className="relative z-10 max-w-3xl text-center md:text-left">
            <p className="headtext text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Hi, I'm Alekhya Mandava
            </p>
            <p className="subtext mt-4 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-100">
              Senior Software Engineer with 6+ years of experience building scalable enterprise applications using Java, Spring Boot, and React.js. Expertise
              spans event-driven systems, cloud-native development (AWS/GCP), and performance optimization across distributed systems. Led CI/CD
              automation using Jenkins, Docker, and Kubernetes while managing Agile teams to deliver secure, resilient solutions. Reduced production issues
              by 40% and accelerated deployment speed across high-impact projects in healthcare, banking, and logistics.
            </p>
          </div>
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gold">
              Skills
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="react.js"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="MongoDB"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="OpenShift "
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="RESTful APIs,"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="JWT Authentication"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/mongodb.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/react.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/docker.png"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Mars, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center !text-black headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
