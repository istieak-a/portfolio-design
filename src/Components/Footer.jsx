import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const navData = [
    { title: "My Work", link: "/work" },
    { title: "My Shelf", link: "/shelf" },
    { title: "My Resume", link: "/resume" },
  ];
  const contactData = [
    { title: "hello@istieakahmed.com", link: "#" },
    { title: "+880 15711-42863", link: "#" },
  ];
  return (
    <div className="flex flex-col gap-10 bg-[#3d155f] px-10 md:px-28 py-20">
      <div className="flex gap-16 md:gap-48">
        <div>
          <p className="tracking-wider text-[#cbc9e2]">SAY HELLO</p>
          <div className="pt-5 flex flex-col gap-2">
            {contactData.map((item, index) => (
              <NavItem title={item.title} key={index} link={item.link} />
            ))}
          </div>
        </div>
        <div className="pt-10 flex flex-col gap-2">
          {navData.map((item, index) => (
              <NavItem key={index} title={item.title} link={item.link} />
          ))}
        </div>
      </div>
      <div className="border-t pt-10">
        <p className="text-[#b7d876]">© Istieak Ahmed 2024</p>

      </div>
    </div>
  );
};

const NavItem = ({ title, link }) => {
  return (
    <div>
      <Link className="text-md md:text-xl font-[500] text-[#b7d876]" to={link}>
        {title}
      </Link>
    </div>
  );
};

export default Footer;
