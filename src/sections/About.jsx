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
      <div className="grid grid-cols-1 gap-6 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="grid-default-color grid-1 relative flex items-center justify-center px-4 py-8 md:py-12">
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
            <p className="headtext text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white break-words">
              Hi, I'm Sai Krishna Grandhi
            </p>
            <p className="subtext mt-4 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-100">
              Data Analyst with 3+ years of experience turning raw datasets into actionable insights for e‑commerce and SaaS clients. Delivered a 12% ROI lift and reduced reporting time by 30% via automation and BI dashboards. Proficient in Python, SQL, Tableau, Power BI, and cloud warehouses (Snowflake, BigQuery, Redshift) with hands‑on ETL pipeline development and applied statistical modeling.
            </p>
          </div>
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div className="flex flex-col w-full p-4 sm:p-6">
            <p className="text-2xl sm:text-3xl lg:text-4xl text-gold mb-2 sm:mb-4">Skills</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-4 justify-items-center">
              <div className="w-24 sm:w-28 lg:w-32 h-10 sm:h-12 flex items-center justify-center 
                      text-sm sm:text-base lg:text-lg text-center rounded-full ring ring-gold/50 
                      font-extralight bg-black/80 border border-gold/30 text-gold tracking-wide">
                Python
              </div>
              <div className=" w-24 sm:w-28 lg:w-32 h-10 sm:h-12 flex items-center justify-center 
                      text-sm sm:text-base lg:text-lg text-center rounded-full ring ring-gold/50 
                      font-extralight bg-black/80 border border-gold/30 text-gold tracking-wide">
                SQL
              </div>
              <div className=" w-24 sm:w-28 lg:w-32 h-10 sm:h-12 flex items-center justify-center 
                      text-sm sm:text-base lg:text-lg text-center rounded-full ring ring-gold/50 
                      font-extralight bg-black/80 border border-gold/30 text-gold tracking-wide">
                Tableau
              </div>
              <div className=" w-24 sm:w-28 lg:w-32 h-10 sm:h-12 flex items-center justify-center 
                      text-sm sm:text-base lg:text-lg text-center rounded-full ring ring-gold/50 
                      font-extralight bg-black/80 border border-gold/30 text-gold tracking-wide">
                Power BI
              </div>
              <div className=" w-24 sm:w-28 lg:w-32 h-10 sm:h-12 flex items-center justify-center 
                      text-sm sm:text-base lg:text-lg text-center rounded-full ring ring-gold/50 
                      font-extralight bg-black/80 border border-gold/30 text-gold tracking-wide">
                Airflow
              </div>
              <div className=" w-24 sm:w-28 lg:w-32 h-10 sm:h-12 flex items-center justify-center 
                      text-sm sm:text-base lg:text-lg text-center rounded-full ring ring-gold/50 
                      font-extralight bg-black/80 border border-gold/30 text-gold tracking-wide">
                Snowflake
              </div>
              <div className="w-24 sm:w-28 lg:w-32 h-10 sm:h-12 flex items-center justify-center 
                      text-sm sm:text-base lg:text-lg text-center rounded-full ring ring-gold/50 
                      font-extralight bg-black/80 border border-gold/30 text-gold tracking-wide">
                BigQuery
              </div>
              <div className="w-24 sm:w-28 lg:w-32 h-10 sm:h-12 flex items-center justify-center 
                      text-sm sm:text-base lg:text-lg text-center rounded-full ring ring-gold/50 
                      font-extralight bg-black/80 border border-gold/30 text-gold tracking-wide">
                NumPy
              </div>
            </div>
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
