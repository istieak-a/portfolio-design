import React from "react";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [navToggle, setNavToggle] = React.useState(false);
  const navData = [
    { title: "My Work", link: "/work" },
    { title: "My Shelf", link: "/shelf" },
    { title: "My Resume", link: "/resume" },
  ];
  const menuAnimate = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 1, 0.2, 1],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  return (
    <div>
      <div className="bg-[#4831d4] h-[90px] w-full flex items-center justify-between px-10">
        <h1 className="text-[#ccf381] font-scripto text-4xl">Istieak.</h1>
        <div className=" z-50">
          {navToggle ? (
            <IoCloseSharp
              className="text-4xl cursor-pointer"
              onClick={() => setNavToggle(!navToggle)}
            />
          ) : (
            <IoMenu
              className="text-4xl cursor-pointer text-[#ccf381]"
              onClick={() => setNavToggle(!navToggle)}
            />
          )}
        </div>
      </div>
      <AnimatePresence>
        {navToggle && (
          <motion.div
            variants={menuAnimate}
            initial="initial"
            animate="animate"
            exit="exit"
            className="h-screen origin-top w-full absolute top-0 z-40 left-0 bg-white"
          >
            <div className="h-[90px] flex items-center px-10">
              <h1 className="text-[#4831d4] font-scripto text-4xl">Istieak.</h1>
            </div>
            <div className="px-16 py-5 flex flex-col gap-12">
              <div className="flex flex-col gap-3 text-[#4831d4]">
                {navData.map((item, index) => (
                  <NavItem key={index} title={item.title} link={item.link} />
                ))}
              </div>
              <div className="flex flex-col gap-8">
                <p className="text-[#cbc9e2] tracking-[8px]">SAY HELLO</p>
                <div className="flex flex-col gap-3 text-[#4831d4] font-[500]">
                  <a href="#">hello@istieakahmed.com</a>
                  <a href="#">+880 15711-42863</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NavItem = ({ title, link }) => {
  return (
    <div>
      <Link className="text-xl font-[500]" to={link}>
        {title}
      </Link>
    </div>
  );
};

export default Navbar;
