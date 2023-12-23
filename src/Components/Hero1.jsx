import React from "react";
import SocialIcons from "./SocialIcons";
import { motion } from "framer-motion";
import png1 from "../assets/png/dots.png";
import png2 from "../assets/png/5dots.png";
import png3 from '../assets/png/curve1.png'
import {Button} from "@nextui-org/react";
const Home = () => {
  const code = `
class Person {
  constructor() {
    this.name = "Istieak Ahmed";
    this.traits = ["DESIGN", "DEV"];
    this.email = "hello@istieakahmed.com"
  }
}
`;
  const lines = code.split("\n");

  return (
    <div className="md:flex">
      <div className="bg-[#4831d4] px-10 pb-5 pt-10 md:h-screen md:w-[60%] md:pt-[150px] lg:px-20">
        <h1 className="-rotate-2 font-mosk text-xl text-white">
          👋 Hi, I'm Istieak Ahmed
        </h1>
        <motion.h2 className="pt-3 font-mosk text-6xl font-black text-[#ccf381]">
          MERN Stack <br /> Developer
        </motion.h2>
        <p className="pt-3 font-mosk text-sm text-white">
          I'm a MERN Stack Developer. I love to build websites and web apps.
        </p>
        <Button className="mt-5" color="primary">Hire me</Button>
        <SocialIcons color="#fff" />
      </div>
      <div className="flex h-[60vh] items-center justify-center bg-[#ccf381] md:h-screen md:w-[40%]">
        <div className="left-[50%] z-40 flex h-[300px] w-[370px] md:w-[400px] lg:w-[420px] flex-col justify-center rounded-xl bg-[#232323] px-10 text-white  shadow-2xl md:absolute">
          {lines.map((line, i, index) => {
            return <p key={index}>{`${i + 1}. ${line}`}</p>;
          })}
        </div>
        <img
          className="absolute right-[100px] top-[50%] z-30 hidden h-48 md:block"
          src={png1}
          alt=""
        />
        <img className="absolute h-4 right-[18%] top-[18%]" src={png2} alt="" />
        <img className="absolute hidden md:block top-[40%] left-[46%] w-24" src={png3} alt="" />
        <img className="absolute hidden md:block top-[70%] rotate-45 left-[40%] w-20" src={png3} alt="" />
      </div>
    </div>
  );
};

export default Home;
