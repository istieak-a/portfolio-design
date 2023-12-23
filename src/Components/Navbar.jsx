import React from "react";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import SocialIcons from "./SocialIcons";
import {Button} from "@nextui-org/react";


const Navbar = () => {
  const [navToggle, setNavToggle] = React.useState(false);
  const navData = [
    { title: "My Work", link: "/work" },
    { title: "My Shelf", link: "/shelf" },
    { title: "My Resume", link: "/resume" },
  ];
  const contactData = [
    { title: "hello@istieakahmed.com", link: "#" },
    { title: "+880 15711-42863", link: "#" },
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
        delay: 0.2,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const itemVariants = {
    initial: {
      transition: {
        staggerChildren: 0.9,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
  };
  const toggleVariants = {
    open: {
      rotate: 90,
    },
    closed: {
      rotate: 0,
    },
  };
  return (
    <div>
      <div className="flex h-[90px] w-full items-center justify-between bg-[#4831d4] md:bg-transparent md:absolute px-10 lg:px-20">
        <Link to={`/`} className="font-scripto text-4xl text-[#ccf381]">Istieak.</Link>
        <div className="hidden md:flex gap-5">
          {navData.map((item, index) => (
            <div key={index} className="overflow-hidden">
              <NavItemlg title={item.title} link={item.link} />
            </div>
          ))}
        </div>
        <div className="hidden md:block">
          <Button color="primary">Contact me</Button>
        </div>
        <motion.div
          variants={toggleVariants}
          animate={navToggle ? "open" : "closed"}
          className=" z-50 md:hidden"
        >
          {navToggle ? (
            <IoCloseSharp
              className="cursor-pointer text-4xl"
              onClick={() => setNavToggle(!navToggle)}
            />
          ) : (
            <IoMenu
              className="cursor-pointer text-4xl text-[#ccf381]"
              onClick={() => setNavToggle(!navToggle)}
            />
          )}
        </motion.div>
      </div>
      <AnimatePresence>
        {navToggle && (
          <motion.div
            variants={menuAnimate}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute left-0 top-0 z-40 h-screen w-full origin-top bg-white"
          >
            <div className="flex h-[90px] items-center px-10">
              <h1 className="font-scripto text-4xl text-[#4831d4]">Istieak.</h1>
            </div>
            <div className="flex flex-col gap-12 px-16 py-5">
              <motion.div
                variants={itemVariants}
                initial="initial"
                animate="open"
                exit="exit"
                className="flex flex-col gap-3"
              >
                {navData.map((item, index) => (
                  <div key={index} className="overflow-hidden">
                    <NavItem title={item.title} link={item.link} />
                  </div>
                ))}
              </motion.div>
              <div className="flex flex-col gap-8">
                <p className="tracking-[8px] text-[#cbc9e2]">SAY HELLO</p>
                <motion.div
                  variants={itemVariants}
                  initial="initial"
                  animate="open"
                  className="flex flex-col gap-3"
                >
                  {contactData.map((item, index) => (
                    <div key={index} className="overflow-hidden">
                      <NavItem title={item.title} link={item.link} />
                    </div>
                  ))}
                  <SocialIcons color={`#4831d4`} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Navbar;

const linkVariants = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.55, 0, 0.45, 1],
    },
  },
};

const NavItem = ({ title, link }) => {
  return (
    <motion.div variants={linkVariants}>
      <Link className="text-xl font-[500] text-[#4831d4]" to={link}>
        {title}
      </Link>
    </motion.div>
  );
};

const NavItemlg = ({ title, link }) => {
  return (
    <div>
      <Link className="text-xl font-[700] tracking-wide text-white" to={link}>
        {title}
      </Link>
    </div>
  );
};
