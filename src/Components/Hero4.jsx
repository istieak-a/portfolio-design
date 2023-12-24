import React from "react";
import proj1 from "../assets/projects/david-chang.png";
import proj2 from "../assets/projects/the-dubbery.png";
import { FaGithub } from "react-icons/fa";
import Button from "../Components/Button/Button";
import { Link } from "react-router-dom";

const Hero4 = () => {
  const ProjData = [
    {
      img: proj1,
      live: "https://istieak-a.github.io/DavidChang/",
      git: "https://github.com/istieak-a/DavidChang",
    },
    {
      img: proj2,
      live: "https://thedubbery.com",
      git: "https://github.com/istieak-a/the-dubbery",
    },
  ];

  return (
    <div className=" flex flex-col items-center gap-10 bg-[#f9f9f9] px-10 py-16">
      <h1 className="text-center text-4xl font-black text-[#4831d4]">
        My Projects
      </h1>
      <div className="flex flex-col gap-8 md:flex-row md:gap-20">
        {ProjData.map((item, index) => (
          <ProjectCard
            key={index}
            img={item.img}
            git={item.git}
            live={item.live}
          />
        ))}
      </div>
      <Button>VIEW MORE</Button>
    </div>
  );
};

const ProjectCard = ({ img, git, live }) => {
  return (
    <div className="flex h-[270px] w-[350px] flex-col justify-start rounded-xl border-2 border-[#4831d4] hover:shadow-xl md:w-[400px]">
      <div className="h-[60%] w-full overflow-hidden">
        <img
          className="h-full w-full cursor-pointer rounded-t-xl object-cover duration-300 hover:scale-125"
          src={img}
        />
      </div>
      <div className="flex items-center gap-4 px-5 pt-6 ">
        <Link to={live} target="_blank">
          <Button>Visit Project</Button>
        </Link>
        <Link to={git} target="_blank">
          <FaGithub className="cursor-pointer text-3xl text-[#4831d4] duration-300 hover:text-[#4831d4]" />
        </Link>
      </div>
    </div>
  );
};

export default Hero4;
