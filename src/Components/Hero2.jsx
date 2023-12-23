import { Button } from "keep-react";
import React from "react";
import dotsnline from '../assets/png/dotsnline.png'
import dots from '../assets/png/dots.png'
import dots2 from '../assets/png/5dots.png'
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
        <ul className="h-[90vh] px-10 md:px-20 flex flex-col justify-center md:flex-row gap-5 pt-10 [&>*:nth-child(2)]:md:pt-48 [&>*:nth-child(2)]:md:ps-44">
      {serviceData.map((item, index) => (
        <ServiceCard key={index} title={item.title} desc={item.desc} />
      ))}
    </ul>
    <img className="h-24 hidden md:block md:absolute left-[25%] top-[66%]" src={dotsnline} />
    <img className="h-24 hidden md:block md:absolute right-[15%] top-[20%]" src={dots} />
    <img className="h-2 hidden md:block md:absolute right-[35%] top-[20%]" src={dots2} />
    </div>
  );
};


const ServiceCard = ({ title, desc }) => {
  return (
    <div className=" px-5 py-5 rounded-md font-sfui">
      <h1 className="text-4xl md:text-5xl font-black pb-5 text-[#4831d4]">{title}</h1>
      <p className=" text-sm w-[90%] md:w-[80%] text-[#4831d4]">{desc}</p>
    </div>
  );
};

export default Hero2;
