import React from "react";
import { FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoNodejs } from "react-icons/io";
import { FaCss3 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { motion } from "framer-motion";

const Hero3 = () => {
  const icoData = [
    { ico: <FaHtml5 />, color: "#e34f26" },
    { ico: <IoLogoJavascript />, color: "#f0db4f" },
    { ico: <FaReact />, color: "#61dafb" },
    { ico: <IoLogoNodejs />, color: "#3c873a" },
  ];

  return (
    <div className="flex h-[90vh] flex-col items-center justify-center bg-[#191919] px-10 py-20 font-sfui md:relative">
      <h1 className="text-center text-[6.5vw] font-black text-white md:text-6xl">
        Technologies I prefer
      </h1>
      <ul className=" flex justify-center gap-8 pt-16">
        {icoData.map((item, index) => (
          <IconCard key={index} ico={item.ico} color={item.color} />
        ))}
      </ul>
      <FaCss3 className="absolute left-[10%] top-[20%] hidden  text-5xl text-[#303030] md:block" />
      <SiTailwindcss className="absolute left-[15%] top-[70%] hidden  text-5xl text-[#303030] md:block" />
      <DiMongodb className="absolute right-[20%] top-[70%] hidden  text-5xl text-[#303030] md:block" />
      <SiRedux className="absolute right-[15%] top-[20%] hidden  text-5xl text-[#303030] md:block" />
      <FaFigma className="absolute right-[10%] top-[50%] hidden  text-5xl text-[#303030] md:block" />
      <SiNetlify className="absolute left-[10%] top-[50%] hidden  text-5xl text-[#303030] md:block" />
    </div>
  );
};

const IconCard = ({ ico, color }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.9 }}
      className="cursor-pointer text-[14vw] md:text-8xl"
      style={{ color: "#fff" }}
    >
      {ico}
    </motion.div>
  );
};

export default Hero3;
