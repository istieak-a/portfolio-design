import React from "react";
import { Button } from "keep-react";

const Home = () => {
  return (
    <div className="h-[65vh] bg-[#4831d4] px-10 pt-10">
      <h1 className="-rotate-2 font-mosk text-xl text-white">
        👋 Hi, I'm Istieak Ahmed
      </h1>
      <h2 className="pt-3 font-mosk text-6xl font-black text-[#ccf381]">
        MERN Stack <br /> Developer
      </h2>
      <p className="pt-3 font-mosk text-sm text-white">
        I'm a MERN Stack Developer. I love to build websites and web apps.
      </p>
      <Button className="mt-5">Hire me</Button>
    </div>
  );
};

export default Home;
