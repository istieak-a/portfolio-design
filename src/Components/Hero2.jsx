import { Button } from "keep-react";
import React from "react";
import dotsnline from "../assets/png/dotsnline.png";
import dots from "../assets/png/dots.png";
import dots2 from "../assets/png/5dots.png";
const Hero2 = () => {
  const serviceData = [
    {
      title: "Frontend Development",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit officia nesciunt repudiandae cum aut. Autem, amet quibusdam earum nisi quia quas dolorum, blanditiis adipisci quo magni nam! Minus, officiis aperiam.",
    },
    {
      title: "Backend Development",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit officia nesciunt repudiandae cum aut. Autem, amet quibusdam earum nisi quia quas dolorum, blanditiis adipisci quo magni nam! Minus, officiis aperiam.",
    },
  ];
  return (
    <div className="relative">
      <ul className="flex h-[90vh] flex-col justify-center gap-5 px-10 pt-10 md:flex-row md:px-20 [&>*:nth-child(2)]:md:ps-44 [&>*:nth-child(2)]:md:pt-48">
        {serviceData.map((item, index) => (
          <ServiceCard key={index} title={item.title} desc={item.desc} />
        ))}
      </ul>
      <img
        className="left-[25%] top-[66%] hidden h-24 md:absolute md:block"
        src={dotsnline}
      />
      <img
        className="right-[15%] top-[20%] hidden h-24 md:absolute md:block"
        src={dots}
      />
      <img
        className="right-[35%] top-[20%] hidden h-2 md:absolute md:block"
        src={dots2}
      />
    </div>
  );
};

const ServiceCard = ({ title, desc }) => {
  return (
    <div className=" font-sfui rounded-md px-5 py-5">
      <h1 className="pb-5 text-4xl font-black text-[#4831d4] md:text-5xl">
        {title}
      </h1>
      <p className=" w-[90%] text-sm text-[#4831d4] md:w-[80%]">{desc}</p>
    </div>
  );
};

export default Hero2;
