import { Button } from "keep-react";
import React, { useEffect } from "react";
import dotsnline from "../assets/png/dotsnline.png";
import dots from "../assets/png/dots.png";
import dots2 from "../assets/png/5dots.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative">
      <motion.ul
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
        className="flex h-[90vh] flex-col justify-center gap-5 px-10 md:flex-row md:px-20 md:pt-10 [&>*:nth-child(2)]:md:ps-44 [&>*:nth-child(2)]:md:pt-48"
      >
        {serviceData.map((item, index) => (
          <ServiceCard key={index} title={item.title} desc={item.desc} />
        ))}
      </motion.ul>
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
    <div className=" rounded-md px-5 py-5 font-sfui">
      <h1 className="pb-5 text-4xl font-black text-[#4831d4] md:text-5xl">
        {title}
      </h1>
      <p className=" w-[90%] text-sm text-[#4831d4] md:w-[80%]">{desc}</p>
    </div>
  );
};

export default Hero2;
