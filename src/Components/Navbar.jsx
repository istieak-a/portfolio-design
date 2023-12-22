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
      <div className="bg-[#4831d4] h-[90px] w-full flex items-center justify-between px-10">
        <h1 className="text-[#ccf381] font-scripto text-4xl">Istieak.</h1>
        <motion.div
          variants={toggleVariants}
          animate={navToggle ? "open" : "closed"}
          className=" z-50"
        >
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
        </motion.div>
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
                <p className="text-[#cbc9e2] tracking-[8px]">SAY HELLO</p>
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
