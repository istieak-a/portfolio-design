import React from "react";
import { FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoNodejs } from "react-icons/io";

const Hero3 = () => {
  const icoData = [
    { ico: <FaHtml5 />, color: "#e34f26" },
    { ico: <IoLogoJavascript />, color: "#f0db4f" },
    { ico: <FaReact />, color: "#61dafb" },
    { ico: <IoLogoNodejs />, color: "#3c873a" },
  ];

  return (
    <div className="h-[90vh] bg-[#191919] flex flex-col justify-center items-center px-10 py-20 font-sfui">
      <h1 className="text-center text-[6.5vw] font-black text-white">
        Technologies I prefer
      </h1>
      <ul className="flex pt-16 gap-8 justify-center">
        {icoData.map((item, index) => (
          <IconCard key={index} ico={item.ico} color={item.color} />
        ))}
      </ul>
    </div>
  );
};

const IconCard = ({ ico, color }) => {
    return (
        <div className="text-[14vw] cursor-pointer" style={{ color: '#fff' }}>
         {ico}
        </div>
    );
};

export default Hero3;
