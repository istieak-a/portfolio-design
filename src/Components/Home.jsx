import React from "react";
import { Button } from "keep-react";
import SocialIcons from "./SocialIcons";
import { motion } from "framer-motion";

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
      <div className="md:h-screen md:pt-[150px] md:w-[60%] bg-[#4831d4] px-10 pb-5 pt-10 lg:px-20">
        <h1 className="-rotate-2 font-mosk text-xl text-white">
          👋 Hi, I'm Istieak Ahmed
        </h1>
        <motion.h2 className="pt-3 font-mosk text-6xl font-black text-[#ccf381]">
          MERN Stack <br /> Developer
        </motion.h2>
        <p className="pt-3 font-mosk text-sm text-white">
          I'm a MERN Stack Developer. I love to build websites and web apps.
        </p>
        <Button className="mt-5">Hire me</Button>
        <SocialIcons color="#fff" />
      </div>
      <div className="md:h-screen md:w-[40%] flex h-[60vh] items-center justify-center bg-[#ccf381]">
        <div className="md:absolute left-[50%] shadow-2xl flex h-[300px] w-[420px] flex-col justify-center rounded-xl bg-[#232323]  px-10 text-white">
          {lines.map((line, i, index) => {
            return <p key={index}>{`${i + 1}. ${line}`}</p>;
          })}
          
        </div>
        
      </div>
    </div>
  );
};

export default Home;
