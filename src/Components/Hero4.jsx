import React from "react";
import proj1 from "../assets/projects/david-chang.png";
import proj2 from "../assets/projects/the-dubbery.png";
import { FaGithub } from "react-icons/fa";
import Button from '../Components/Button/Button'

const Hero4 = () => {
    const ProjData = [
        {img: proj1, live: 'https://istieak-a.github.io/DavidChang/', git: 'https://github.com/istieak-a/DavidChang'}, 
        {img: proj2, live: 'https://istieak-a.github.io/TheDubbery/', git: ''},
    ]

  return (
    <div className=" flex flex-col items-center gap-10 px-10 py-16 bg-[#f9f9f9]">
      <h1 className="text-center text-4xl font-black text-[#4831d4]">
        My Projects
      </h1>
      <div className="flex flex-col md:flex-row gap-8 md:gap-20">
        {
            ProjData.map((item, index) => (
                <ProjectCard key={index} img={item.img} git={item.git} live={item.live} />
            ))
        }
      </div>
      <Button>VIEW MORE</Button>
    </div>
  );
};

const ProjectCard = ({img, git, live}) => {
  return (
    <div className="border-2 flex flex-col justify-start border-[#4831d4] hover:shadow-xl h-[270px] rounded-xl w-[400px]">
      <div className="overflow-hidden h-[60%] w-full">
      <img className="cursor-pointer hover:scale-125 h-full w-full rounded-t-xl object-cover duration-300" src={img} />
      </div>
      <div className="flex gap-4 pt-6 items-center px-5 ">
        <Button>Visit Project</Button>
        <FaGithub href={git} className="cursor-pointer text-5xl text-[#4831d4]" />
      </div>
      
    </div>
  );
};

export default Hero4;
