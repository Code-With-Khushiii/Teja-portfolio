import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Python", "SQL", "AWS", "Splunk", "ServiceNow", "ETL", "Power BI"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 text-center rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex items-center">
        <motion.h1
          className="text-4xl font-medium text-gold"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm
        </motion.h1>
        <div className="flex flex-col items-center">
          <motion.p
            className="text-5xl font-medium text-white text-center"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Teja Sunkara
            <br /> Data & BI Analyst 
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-gold text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-white text-center"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
           Cloud & IT Support Engineer
          </motion.p>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col space-y-6 md:hidden items-center">
        <motion.p
          className="text-4xl font-medium text-gold"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Teja Sunkara
        </motion.p>
        <div className="text-center">
          <motion.p
            className="text-5xl font-black text-white"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Skilled in
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-gold text-7xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-black text-white"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
           Cloud & IT Support Engineer
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
