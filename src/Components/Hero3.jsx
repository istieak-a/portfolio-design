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

const Hero3 = () => {
  const icoData = [
    { ico: <FaHtml5 />, color: "#e34f26" },
    { ico: <IoLogoJavascript />, color: "#f0db4f" },
    { ico: <FaReact />, color: "#61dafb" },
    { ico: <IoLogoNodejs />, color: "#3c873a" },
  ];

  return (
    <div className="md:relative flex h-[90vh] flex-col items-center justify-center bg-[#191919] px-10 py-20 font-sfui">
      <h1 className="text-center text-[6.5vw] font-black text-white md:text-6xl">
        Technologies I prefer
      </h1>
        <ul className=" flex justify-center gap-8 pt-16">
          {icoData.map((item, index) => (
            <IconCard key={index} ico={item.ico} color={item.color} />
          ))}
        </ul>
        <FaCss3 className="absolute hidden md:block text-[#303030]  top-[20%] left-[10%] text-5xl"/>
        <SiTailwindcss className="absolute hidden md:block text-[#303030]  top-[70%] left-[15%] text-5xl"/>
        <DiMongodb className="absolute hidden md:block text-[#303030]  top-[70%] right-[20%] text-5xl"/>
        <SiRedux className="absolute hidden md:block text-[#303030]  top-[20%] right-[15%] text-5xl"/>
        <FaFigma className="absolute hidden md:block text-[#303030]  top-[50%] right-[10%] text-5xl"/>
        <SiNetlify className="absolute hidden md:block text-[#303030]  top-[50%] left-[10%] text-5xl"/>

    </div>
  );
};

const IconCard = ({ ico, color }) => {
  return (
    <div
      className="cursor-pointer text-[14vw] md:text-8xl"
      style={{ color: "#fff" }}
    >
      {ico}
    </div>
  );
};

export default Hero3;
